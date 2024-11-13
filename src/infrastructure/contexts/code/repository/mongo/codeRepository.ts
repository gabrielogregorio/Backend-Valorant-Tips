import { CodeEntity } from '@/domain/contexts/contexts/code/entity';
import { Code } from './Code';
import { CodeRepositoryInterface } from '@/domain/contexts/contexts/code/repository';

export class CodeRepository implements CodeRepositoryInterface {
  save = async (code: CodeEntity): Promise<CodeEntity> => {
    const newCode = new Code({
      available: code.available,
      code: code.code.getValue(),
      id: code.id.getValue(),
    });
    await newCode.save();

    return CodeEntity.restore({
      available: newCode.available,
      code: newCode.code,
      id: newCode.id,
    });
  };

  findByCode = async (code: string): Promise<CodeEntity | null> => {
    const codeFound = await Code.findOne({ code });

    if (!codeFound) {
      return null;
    }

    return CodeEntity.restore({ id: codeFound.id, available: codeFound.available, code: codeFound.code });
  };

  updateEntity = async (code: CodeEntity): Promise<CodeEntity | null> => {
    const filter = { code: code.code.getValue() };
    const updateTo = { $set: { available: code.available, code: code.code.getValue() } };
    const options = { new: true };
    const result = await Code.findOneAndUpdate(filter, updateTo, options);
    if (!result) {
      return null;
    }

    return CodeEntity.restore({ id: result.id, available: result?.available, code: result.code });
  };
}
