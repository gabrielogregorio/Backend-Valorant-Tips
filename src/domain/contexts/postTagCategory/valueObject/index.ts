import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { ValueObject } from '@/domain/contexts/common/valueObject/valueObject.abstract';
import { PostTagCategoryValidatorFactory } from '@/domain/contexts/contexts/postTagCategory/factory/validator';
import { PostTagCategoryValueObjectInterface } from '@/domain/contexts/contexts/postTagCategory/valueObject/types';

type PostTagCategoryValueObjectDto = {
  id: UniqueId;
  name: string;
};

type PostTagCategoryValueObjectCreateDto = {
  name: string;
};

type PostTagCategoryValueObjectRestoreDto = {
  id: string;
  name: string;
};

export class PostTagCategoryValueObject extends ValueObject implements PostTagCategoryValueObjectInterface {
  public readonly id: UniqueId;

  public readonly name: string;

  private _validatorTypes = PostTagCategoryValidatorFactory.create();

  private constructor({ id, name }: PostTagCategoryValueObjectDto) {
    super();

    this.id = id;

    this.name = name;

    this._validate();
  }

  public static create(payload: PostTagCategoryValueObjectCreateDto) {
    return new PostTagCategoryValueObject({
      name: payload.name,
      id: new UniqueId(),
    });
  }

  public static restore(payload: PostTagCategoryValueObjectRestoreDto) {
    return new PostTagCategoryValueObject({
      id: new UniqueId(payload.id),
      name: payload.name,
    });
  }

  private _validate() {
    this._validatorTypes.validate(this);
  }
}
