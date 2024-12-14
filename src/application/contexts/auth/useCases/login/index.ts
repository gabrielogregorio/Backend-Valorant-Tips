import {
  LoginUseCaseInputDto,
  LoginUseCaseInterface,
  LoginUseCaseOutputDto,
} from '@/application/contexts/auth/useCases/login/LoginUseCaseInterface';
import { AppError } from '@/application/errors/AppError';
import { handleAuthTokenInterface } from '@/application/services/handleAuthToken';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { PasswordHasherInterface } from '@/domain/contexts/services/PasswordHasherInterface';
import { JWT_SECRET } from '@/infrastructure/api/config/envs';

export class LoginUseCase implements LoginUseCaseInterface {
  constructor(
    private userRepository: UserRepositoryInterface,
    private passwordHasher: PasswordHasherInterface,
    private handleAuthToken: handleAuthTokenInterface,
  ) {}

  execute = async ({ username, password }: LoginUseCaseInputDto): Promise<LoginUseCaseOutputDto> => {
    const user = await this.userRepository.findOneByUsername(username);
    if (!user) {
      throw new AppError('USER_NOT_FOUND', { username });
    }

    const passwordIsValid = await this.passwordHasher.passwordIsValid(password, user.password);
    if (!passwordIsValid) {
      throw new AppError('INVALID_PASSWORD', { username });
    }

    const handleAuthToken = await this.handleAuthToken.generate(
      { username, name: user.username, userId: user.id.getValue() },
      {
        expiresIn: '128h',
        secret: JWT_SECRET,
      },
    );

    if (handleAuthToken.errors !== null || !handleAuthToken.data) {
      throw new AppError('INTERNAL_ERROR', handleAuthToken);
    }

    return {
      userId: handleAuthToken.data.userId,
      token: handleAuthToken.data.token,
    };
  };
}
