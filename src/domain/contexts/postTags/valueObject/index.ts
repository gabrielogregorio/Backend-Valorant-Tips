import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { ValueObject } from '@/domain/contexts/common/valueObject/valueObject.abstract';
import { PostTagsValidatorFactory } from '@/domain/contexts/contexts/postTags/factory/validator';
import { PostTagsValueObjectInterface } from '@/domain/contexts/contexts/postTags/valueObject/types';

type PostTagsValueObjectDto = {
  id: UniqueId;
  name: string;
  categoryId: UniqueId;
};

type PostTagsValueObjectCreateDto = {
  name: string;
  categoryId: string;
};

type PostTagsValueObjectRestoreDto = {
  id: string;
  categoryId: string;
  name: string;
};

export class PostTagsValueObject extends ValueObject implements PostTagsValueObjectInterface {
  public readonly id: UniqueId;

  public readonly categoryId: UniqueId;

  public readonly name: string;

  private _validatorTypes = PostTagsValidatorFactory.create();

  private constructor({ id, name, categoryId }: PostTagsValueObjectDto) {
    super();

    this.id = id;

    this.name = name;

    this.categoryId = categoryId;

    this._validate();
  }

  public static create(payload: PostTagsValueObjectCreateDto) {
    return new PostTagsValueObject({
      name: payload.name,
      categoryId: new UniqueId(payload.categoryId),
      id: new UniqueId(),
    });
  }

  public static restore(payload: PostTagsValueObjectRestoreDto) {
    return new PostTagsValueObject({
      id: new UniqueId(payload.id),
      categoryId: new UniqueId(payload.categoryId),
      name: payload.name,
    });
  }

  private _validate() {
    this._validatorTypes.validate(this);
  }
}
