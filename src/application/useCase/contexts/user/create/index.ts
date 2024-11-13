import { AppError } from '@/application/errors/AppError';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { CodeRepositoryInterface } from '@/domain/contexts/contexts/code/repository';
import {
  CreateUserInputDto,
  CreateUserUseCaseInterface,
} from '@/useCase/contexts/user/create/CreateUserUseCaseInterface';
import { PasswordHasherInterface } from '@/domain/contexts/services/PasswordHasherInterface';

export class CreateUserUseCase implements CreateUserUseCaseInterface {
  constructor(
    private userRepository: UserRepositoryInterface,
    private codeRepository: CodeRepositoryInterface,
    private passwordHasher: PasswordHasherInterface,
  ) {}

  execute = async (code: string, { username, password, image }: CreateUserInputDto): Promise<void> => {
    const codeEntity = await this.codeRepository.findByCode(code);
    if (!codeEntity) {
      throw new AppError('CODE_NOT_FOUND');
    }

    const userFound = await this.userRepository.findOneByUsername(username);
    if (userFound) {
      throw new AppError('USERNAME_ALREADY_EXISTS', { username });
    }

    codeEntity.useCode();

    this.codeRepository.updateEntity(codeEntity);
    const user = UserEntity.create({ username, password: await this.passwordHasher.generateHashPassword(password) });

    if (image) {
      user.changeImage(image);
    }

    await this.userRepository.save(user);
  };
}
