import { Entity } from '@/domain/contexts/common/entity/entity.abstract';
import { NotificationError } from '@/domain/contexts/common/notification/notification.error';
import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { SuggestionEntityInterface } from '@/domain/contexts/contexts/suggestion/entity/interfaces';
import { SuggestionValidatorFactory } from '@/domain/contexts/contexts/suggestion/factory/suggestion.validator';
import { statusSuggestionType } from '@/infrastructure/api/interfaces/suggestion';

type SuggestionEntityDto = {
  status: statusSuggestionType;
  email: string;
  description: string;
  postId: UniqueId;
  id: UniqueId;
  createdAt: string;
  updatedAt: string;
};

type SuggestionEntityCreateDto = {
  email: string;
  description: string;
  postId: string;
};

type SuggestionEntityRestoreDto = {
  status: statusSuggestionType;
  email: string;
  description: string;
  postId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export class SuggestionEntity extends Entity implements SuggestionEntityInterface {
  private _status: statusSuggestionType;

  private _email: string;

  private _description: string;

  private _postId: UniqueId;

  private _id: UniqueId;

  private _createdAt: string;

  private _updatedAt: string;

  private _validatorTypes = SuggestionValidatorFactory.create();

  private constructor({ id, status, email, description, postId, createdAt, updatedAt }: SuggestionEntityDto) {
    super();
    this._id = id;
    this._status = status;
    this._email = email;
    this._description = description;
    this._postId = postId;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;

    this.validate();
  }

  public static create({ description, email, postId }: SuggestionEntityCreateDto) {
    return new SuggestionEntity({
      description,
      email,
      postId: new UniqueId(postId),
      id: new UniqueId(),
      status: 'waiting',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  public static restore(payload: SuggestionEntityRestoreDto) {
    return new SuggestionEntity({ ...payload, id: new UniqueId(payload.id), postId: new UniqueId(payload.postId) });
  }

  get id() {
    return this._id;
  }

  get status() {
    return this._status;
  }

  get email() {
    return this._email;
  }

  get postId() {
    return this._postId;
  }

  get description() {
    return this._description;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  public delete() {
    console.log('DELETED_ENTITY');
  }

  private validate() {
    this._validatorTypes.validate(this);

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }
}
