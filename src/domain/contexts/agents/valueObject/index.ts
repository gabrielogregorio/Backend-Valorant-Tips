import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { ValueObject } from '@/domain/contexts/common/valueObject/valueObject.abstract';
import { AgentsValidatorFactory } from '@/domain/contexts/contexts/agents/factory/validator';
import { AgentsValueObjectInterface } from '@/domain/contexts/contexts/agents/valueObject/types';

type AgentsValueObjectDto = {
  id: UniqueId;
  name: string;
  image: string;
};

type AgentsValueObjectCreateDto = {
  image: string;
  name: string;
};

type AgentsValueObjectRestoreDto = {
  id: string;
  name: string;
  image: string;
};

export class AgentsValueObject extends ValueObject implements AgentsValueObjectInterface {
  public readonly id: UniqueId;

  public readonly image: string;

  public readonly name: string;

  private _validatorTypes = AgentsValidatorFactory.create();

  private constructor({ name, id, image }: AgentsValueObjectDto) {
    super();

    this.id = id;
    this.image = image;
    this.name = name;

    this._validate();
  }

  public static create(payload: AgentsValueObjectCreateDto) {
    return new AgentsValueObject({
      id: new UniqueId(),
      name: payload.name,
      image: payload.image,
    });
  }

  public static restore(payload: AgentsValueObjectRestoreDto) {
    return new AgentsValueObject({
      id: new UniqueId(payload.id),
      image: payload.image,
      name: payload.name,
    });
  }

  private _validate() {
    this._validatorTypes.validate(this);
  }
}
