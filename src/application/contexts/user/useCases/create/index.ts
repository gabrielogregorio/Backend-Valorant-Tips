import { AppError } from '@/application/errors/AppError';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { CodeRepositoryInterface } from '@/domain/contexts/contexts/code/repository';
import {
  CreateUserInputDtoInterface,
  CreateUserOutputDtoInterface,
  CreateUserUseCaseInterface,
} from '@/application/contexts/user/useCases/create/CreateUserUseCaseInterface';
import { PasswordHasherInterface } from '@/domain/contexts/services/PasswordHasherInterface';

export class CreateUserUseCase implements CreateUserUseCaseInterface {
  constructor(
    private _userRepository: UserRepositoryInterface,
    private _codeRepository: CodeRepositoryInterface,
    private _passwordHasher: PasswordHasherInterface,
  ) {}

  execute = async (
    code: string,
    { username, password, imageUrl }: CreateUserInputDtoInterface,
  ): Promise<CreateUserOutputDtoInterface> => {
    const codeEntity = await this._codeRepository.findByCode(code);
    if (!codeEntity) {
      throw new AppError('CODE_NOT_FOUND', { code, username, imageUrl });
    }

    const userFound = await this._userRepository.findOneByUsername(username);
    if (userFound) {
      throw new AppError('USERNAME_ALREADY_EXISTS', { username });
    }

    codeEntity.useCode();

    this._codeRepository.updateEntity(codeEntity);
    const user = UserEntity.create({ username, password: await this._passwordHasher.generateHashPassword(password) });

    if (imageUrl) {
      user.changeImageUrl(imageUrl);
    }

    const userCreated = await this._userRepository.save(user);
    return {
      id: userCreated.id.getValue(),
      username: userCreated.username,
      imageUrl: userCreated.imageUrl,
    };
  };
}
