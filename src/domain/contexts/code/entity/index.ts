import { Entity } from '@/domain/contexts/common/entity/entity.abstract';
import { NotificationError } from '@/domain/contexts/common/notification/notification.error';
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
  _code: UniqueId;

  _id: UniqueId;

  _available: boolean;

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

    instance.validate();

    return instance;
  }

  public static restore({ available, code, id }: { available: boolean; code: string; id: string }): CodeEntity {
    const instance = new CodeEntity({
      available,
      code: new UniqueId(code),
      id: new UniqueId(id),
    });

    instance.validate();

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
      throw new DomainError('CodeIsNotAvailable', 'Código não pode ser usado');
    }

    this._available = false;
    this.validate();
  }

  private validate() {
    CodeValidatorFactory.create().validate(this);

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }
}
