import { Entity } from '@/domain/contexts/common/entity/entity.abstract';
import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { CodeValidatorFactory } from '@/domain/contexts/contexts/code/factory/validator';
import { DomainError } from '@/domain/contexts/errors';

export interface CodeEntityInterface {
  get code(): UniqueId;
  get available(): boolean;
  get id(): UniqueId;

  useCode(): void;
}

export class CodeEntity extends Entity implements CodeEntityInterface {
  private _code: UniqueId;

  private _id: UniqueId;

  private _available: boolean;

  private _validatorTypes = CodeValidatorFactory.create();

  private constructor({ available, code, id }: { code: UniqueId; available: boolean; id: UniqueId }) {
    super();
    this._available = available;
    this._code = code;
    this._id = id;
  }

  public static create(): CodeEntity {
    const instance = new CodeEntity({
      available: true,
      code: new UniqueId(),
      id: new UniqueId(),
    });

    instance._validate();

    return instance;
  }

  public static restore({ available, code, id }: { available: boolean; code: string; id: string }): CodeEntity {
    const instance = new CodeEntity({
      available,
      code: new UniqueId(code),
      id: new UniqueId(id),
    });

    instance._validate();

    return instance;
  }

  get id(): UniqueId {
    return this._id;
  }

  get available(): boolean {
    return this._available;
  }

  get code(): UniqueId {
    return this._code;
  }

  public useCode() {
    if (!this.available) {
      throw new DomainError('CodeIsNotAvailable', 'Código não pode ser usado', {
        code: this.code.getValue(),
        available: this.available,
        id: this.id.getValue(),
      });
    }

    this._available = false;
    this._validate();
  }

  private _validate() {
    this._validatorTypes.validate(this);
  }
}
