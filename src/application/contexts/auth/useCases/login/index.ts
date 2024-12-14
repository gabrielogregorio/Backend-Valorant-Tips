import {
  LoginUseCaseInputDtoInterface,
  LoginUseCaseInterface,
  LoginUseCaseOutputDtoInterface,
} from '@/application/contexts/auth/useCases/login/LoginUseCaseInterface';
import { AppError } from '@/application/errors/AppError';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { PasswordHasherInterface } from '@/domain/contexts/services/PasswordHasherInterface';
import { JWT_SECRET } from '@/infrastructure/api/config/envs';
import { handleAuthTokenInterface } from '@/application/services/HandleAuthToken';

export class LoginUseCase implements LoginUseCaseInterface {
  constructor(
    private _userRepository: UserRepositoryInterface,
    private _passwordHasher: PasswordHasherInterface,
    private _handleAuthToken: handleAuthTokenInterface,
  ) {}

  execute = async ({ username, password }: LoginUseCaseInputDtoInterface): Promise<LoginUseCaseOutputDtoInterface> => {
    const user = await this._userRepository.findOneByUsername(username);
    if (!user) {
      throw new AppError('USER_NOT_FOUND', { username });
    }

    const passwordIsValid = await this._passwordHasher.passwordIsValid(password, user.password);
    if (!passwordIsValid) {
      throw new AppError('INVALID_PASSWORD', { username });
    }

    const handleAuthToken = await this._handleAuthToken.generate(
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
