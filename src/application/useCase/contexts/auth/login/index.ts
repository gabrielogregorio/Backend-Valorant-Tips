import { AppError } from '@/application/errors/AppError';
import { PasswordHasherInterface } from '@/domain/contexts/contexts/services/PasswordHasherInterface';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { JWT_SECRET } from '@/infrastructure/api/config/envs';
import {
  LoginUseCaseInputDto,
  LoginUseCaseInterface,
  LoginUseCaseOutputDto,
} from '@/useCase/contexts/auth/login/LoginUseCaseInterface';
import jwt from 'jsonwebtoken'; // desacoplar

export class LoginUseCase implements LoginUseCaseInterface {
  constructor(
    private userRepository: UserRepositoryInterface,
    private passwordHasher: PasswordHasherInterface,
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

    return new Promise<{ token: string; id: string }>((resolve, reject) => {
      // desacoplar isso
      jwt.sign({ username, name: user.username, id: user.id }, JWT_SECRET, { expiresIn: '128h' }, (error, token) => {
        if (error || token === undefined) {
          reject(new AppError('INTERNAL_ERROR'));
          return;
        }

        resolve({ token, id: user.id?.toString() as string });
      });
    });
  };
}
