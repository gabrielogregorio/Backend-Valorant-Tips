import { RepositoryInterface } from '@/domain/contexts/common/repository/customRepository.interface';
import { CodeEntity } from '@/domain/contexts/contexts/code/entity';

export interface CodeRepositoryInterface extends RepositoryInterface<CodeEntity> {
  save: (code: CodeEntity) => Promise<CodeEntity>;
  findByCode: (code: string) => Promise<CodeEntity | null>;
  updateEntity: (code: CodeEntity) => Promise<CodeEntity | null>; // trocar para save, para ser agnostico
}
