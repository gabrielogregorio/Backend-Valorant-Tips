import { Entity } from '@/domain/contexts/common/entity/entity.abstract';
import { NotificationError } from '@/domain/contexts/common/notification/notification.error';
import { ViewsEntityInterface } from '@/domain/contexts/contexts/views/entity/types';
import { ViewsValidatorFactory } from '@/domain/contexts/contexts/views/factory/validator';

type ViewsEntityDto = {
  dateAccess: Date;
  ip: string;
};

type ViewsEntityCreateDto = {
  ip: string;
};

type ViewsEntityRestoreDto = {
  dateAccess: Date;
  ip: string;
};

export class ViewsEntity extends Entity implements ViewsEntityInterface {
  private _ip: string;

  private _dateAccess: Date;

  private constructor({ dateAccess, ip }: ViewsEntityDto) {
    super();

    this._ip = ip;
    this._dateAccess = dateAccess;
    this.validate();
  }

  public static create(payload: ViewsEntityCreateDto) {
    return new ViewsEntity({
      dateAccess: new Date(),
      ip: payload.ip,
    });
  }

  public static restore(payload: ViewsEntityRestoreDto) {
    return new ViewsEntity(payload);
  }

  get dateAccess(): Date {
    return this._dateAccess;
  }

  get ip(): string {
    return this._ip;
  }

  private validate() {
    ViewsValidatorFactory.create().validate(this);

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }
}
