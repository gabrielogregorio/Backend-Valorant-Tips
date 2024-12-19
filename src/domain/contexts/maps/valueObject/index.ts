import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { ValueObject } from '@/domain/contexts/common/valueObject/valueObject.abstract';
import { MapsValidatorFactory } from '@/domain/contexts/contexts/maps/factory/validator';
import { MapsValueObjectInterface } from '@/domain/contexts/contexts/maps/valueObject/types';

type MapsValueObjectDto = {
  id: UniqueId;
  name: string;
  image: string;
};

type MapsValueObjectCreateDto = {
  image: string;
  name: string;
};

type MapsValueObjectRestoreDto = {
  id: string;
  name: string;
  image: string;
};

export class MapsValueObject extends ValueObject implements MapsValueObjectInterface {
  public readonly id: UniqueId;

  public readonly image: string;

  public readonly name: string;

  private _validatorTypes = MapsValidatorFactory.create();

  private constructor({ name, id, image }: MapsValueObjectDto) {
    super();

    this.id = id;
    this.image = image;
    this.name = name;

    this._validate();
  }

  public static create(payload: MapsValueObjectCreateDto) {
    return new MapsValueObject({
      id: new UniqueId(),
      name: payload.name,
      image: payload.image,
    });
  }

  public static restore(payload: MapsValueObjectRestoreDto) {
    return new MapsValueObject({
      id: new UniqueId(payload.id),
      image: payload.image,
      name: payload.name,
    });
  }

  private _validate() {
    this._validatorTypes.validate(this);
  }
}
