import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { PostEntity } from '../entity/post';

export interface PostRepositoryInterface extends RepositoryInterface<PostEntity> {
  save: (post: PostEntity) => Promise<PostEntity>;
  update: (post: PostEntity) => Promise<PostEntity>;
  findById: (id: string) => Promise<PostEntity | null>;
  findAvailableMaps: () => Promise<string[]>;
  findAvailableAgents: (map: string) => Promise<string[]>;
  findAll: () => Promise<PostEntity[]>;
  findAllByMapAndAgent: (agent: string, map: string) => Promise<PostEntity[]>;
  deleteById: (id: string) => Promise<void>;
  countAll: () => Promise<number>;
  findMaps: () => Promise<string[]>;
  findAgents: () => Promise<string[]>;
}
