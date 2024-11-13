/* eslint-disable max-classes-per-file */
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { FindUserByIdUseCaseInterface, FindUserByIdOutputDto } from './FindUserByIdUseCaseInterface';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';

class OutputMapper {
  static toOutput(user: UserEntity): FindUserByIdOutputDto {
    return {
      image: user.image,
      username: user.username,
    };
  }
}

export class FindUserByIdUseCase implements FindUserByIdUseCaseInterface {
  constructor(private userRepository: UserRepositoryInterface) {}

  execute = async (id: string): Promise<FindUserByIdOutputDto | null> => {
    const user = await this.userRepository.findById(id);
    if (user === null) {
      return null;
    }

    return OutputMapper.toOutput(user);
  };
}
