/* eslint-disable sonarjs/no-base-to-string */
import { AppError } from '@/application/errors/AppError';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { PasswordHasherInterface } from '@/domain/contexts/services/PasswordHasherInterface';
import { UpdateUserUseCaseDtoInterface, UpdateUserUseCaseInterface } from './UpdateUserUseCaseInterface';

export class UpdateUserUseCase implements UpdateUserUseCaseInterface {
  constructor(
    private _userRepository: UserRepositoryInterface,
    private _passwordHasher: PasswordHasherInterface,
  ) {}

  execute = async (id: string, { username, password, imageUrl }: UpdateUserUseCaseDtoInterface): Promise<void> => {
    const user = await this._userRepository.findById(id);
    if (!user) {
      throw new AppError('USER_ID_NOT_FOUND', { id });
    }

    if (username) {
      const userFound = await this._userRepository.findOneByUsername(username);
      // @ts-ignore
      if (userFound !== null && userFound.id?.toString() !== id) {
        throw new AppError('USERNAME_ALREADY_EXISTS', {
          input: { username, id },
          db: { userId: userFound.id.getValue() },
        });
      }

      user.changeUsername(username);
    }

    if (password) {
      user.changePassword(await this._passwordHasher.generateHashPassword(password));
    }

    if (imageUrl) {
      user.changeImageUrl(imageUrl);
    }

    return this._userRepository.update(id, user);
  };
}
