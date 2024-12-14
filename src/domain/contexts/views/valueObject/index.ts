import { ValueObject } from '@/domain/contexts/common/valueObject/valueObject.abstract';
import { ViewsValidatorFactory } from '@/domain/contexts/contexts/views/factory/validator';
import { ViewsValueObjectInterface } from '@/domain/contexts/contexts/views/valueObject/types';

type ViewsValueObjectDto = {
  dateAccess: Date;
  ip: string;
};

type ViewsValueObjectCreateDto = {
  ip: string;
};

type ViewsValueObjectRestoreDto = {
  dateAccess: Date;
  ip: string;
};

export class ViewsValueObject extends ValueObject implements ViewsValueObjectInterface {
  public readonly ip: string;

  public readonly dateAccess: Date;

  private _validatorTypes = ViewsValidatorFactory.create();

  private constructor({ dateAccess, ip }: ViewsValueObjectDto) {
    super();

    this.ip = ip;
    this.dateAccess = dateAccess;
    this._validate();
  }

  public static create(payload: ViewsValueObjectCreateDto) {
    return new ViewsValueObject({
      dateAccess: new Date(),
      ip: payload.ip,
    });
  }

  public static restore(payload: ViewsValueObjectRestoreDto) {
    return new ViewsValueObject(payload);
  }

  private _validate() {
    this._validatorTypes.validate(this);
  }
}
