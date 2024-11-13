import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { DeleteUserByIdUseCaseInterface } from './DeleteUserByIdUseCaseInterface';

export class DeleteUserByIdUseCase implements DeleteUserByIdUseCaseInterface {
  constructor(private userRepository: UserRepositoryInterface) {}

  execute = async (id: string) => {
    await this.userRepository.findOneAndDelete(id);
  };
}
