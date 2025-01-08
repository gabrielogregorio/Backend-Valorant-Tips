import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';

export interface UserRepositoryInterface extends RepositoryInterface<UserEntity> {
  save: (user: UserEntity) => Promise<UserEntity>;
  update: (id: string, user: UserEntity) => Promise<void>;
  findById: (id: string) => Promise<UserEntity | null>;
  findByIds: (id: string[]) => Promise<UserEntity[]>;
  findOneByUsername: (username: string) => Promise<UserEntity | null>;
  findOneAndDelete: (id: string) => Promise<void>;
  countDocuments: () => Promise<number>;
}
