import { CodeValidatorFactory } from '@/domain/code/factory/validator';
import { Entity } from '@/domain/common/entity/entity.abstract';
import { NotificationError } from '@/domain/common/notification/notification.error';
import { DomainError } from '@/domain/errors';
import { v4 as uuidV4 } from 'uuid';

export interface CodeEntityInterface {
  get code(): string;
  get available(): boolean;
  get id(): string;

  useCode(): void;
}

export class CodeEntity extends Entity implements CodeEntityInterface {
  _code: string;

  _id: string;

  _available: boolean;

  private constructor({ available, code, id }: { code: string; available: boolean; id: string }) {
    super();
    this._available = available;
    this._code = code;
    this._id = id;
  }

  public static create(): CodeEntity {
    const instance = new CodeEntity({
      available: true,
      code: uuidV4(),
      id: uuidV4(),
    });

    instance.validate();

    return instance;
  }

  public static restore({ available, code, id }: { available: boolean; code: string; id: string }): CodeEntity {
    const instance = new CodeEntity({
      available,
      code,
      id,
    });

    instance.validate();

    return instance;
  }

  get id(): string {
    return this._id;
  }

  get available(): boolean {
    return this._available;
  }

  get code(): string {
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
