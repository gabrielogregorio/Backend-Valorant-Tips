import { AppError } from '@/application/errors/AppError';
import { HandleAuthTokenInterface } from '@/application/services/HandleAuthToken';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { PasswordHasherInterface } from '@/domain/contexts/services/PasswordHasherInterface';
import { JWT_SECRET } from '@/infrastructure/api/config/envs';
import {
  LoginUseCaseInputDto,
  LoginUseCaseInterface,
  LoginUseCaseOutputDto,
} from '@/useCase/contexts/auth/login/LoginUseCaseInterface';

export class LoginUseCase implements LoginUseCaseInterface {
  constructor(
    private userRepository: UserRepositoryInterface,
    private passwordHasher: PasswordHasherInterface,
    private HandleAuthToken: HandleAuthTokenInterface,
  ) {}

  execute = async ({ username, password }: LoginUseCaseInputDto): Promise<LoginUseCaseOutputDto> => {
    const user = await this.userRepository.findOneByUsername(username);
    if (!user) {
      throw new AppError('USER_NOT_FOUND', { username });
    }

    const passwordIsValid = await this.passwordHasher.passwordIsValid(password, user.password);
    if (!passwordIsValid) {
      throw new AppError('INVALID_PASSWORD');
    }

    const HandleAuthToken = await this.HandleAuthToken.generate(
      { username, name: user.username, userId: user.id.getValue() },
      {
        expiresIn: '128h',
        secret: JWT_SECRET,
      },
    );

    if (HandleAuthToken.errors !== null || !HandleAuthToken.data) {
      throw new AppError('INTERNAL_ERROR');
    }

    return {
      userId: HandleAuthToken.data.userId,
      token: HandleAuthToken.data.token,
    };
  };
}
