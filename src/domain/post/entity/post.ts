import { Entity } from '@/domain/common/entity/entity.abstract';
import { NotificationError } from '@/domain/common/notification/notification.error';
import { UniqueId } from '@/domain/common/utils/UniqueId';
import { PostValidatorFactory } from '@/domain/post/factory/post.validator';
import { PostImagesInterface, PostInterface, PostTagsInterface } from '@/domain/post/entity/interfaces';

type PostEntityDto = {
  title: string;
  userId: UniqueId;
  id?: UniqueId;
  tags?: PostTagsInterface;
  imgs?: PostImagesInterface[];
  description?: string;
};

type PayloadCreatePostDto = {
  title: string;
  userId: string;
  tags?: PostTagsInterface;
  imgs?: PostImagesInterface[];
  description?: string;
};

type PostEntityRestoreDto = {
  title: string;
  userId: string;
  id: string;
  tags?: PostTagsInterface;
  imgs?: PostImagesInterface[];
  description?: string;
};

export class PostEntity extends Entity implements PostInterface {
  private _id: UniqueId;

  private _userId: UniqueId;

  private _title: string;

  private _description: string;

  private _tags: PostTagsInterface;

  private _imgs: PostImagesInterface[];

  get imgs() {
    return this._imgs;
  }

  get tags() {
    return this._tags;
  }

  get description() {
    return this._description;
  }

  get title() {
    return this._title;
  }

  get id(): UniqueId {
    return this._id;
  }

  get userId() {
    return this._userId;
  }

  private constructor({
    title,
    imgs = [],
    description = '',
    tags = {
      ability: '',
      agent: '',
      difficult: '',
      map: '',
      mapPosition: '',
      moment: '',
      side: '',
    },
    userId,
    id = new UniqueId(),
  }: PostEntityDto) {
    super();
    this._id = id;
    this._title = title;
    this._description = description;
    this._userId = userId;
    this._imgs = imgs;
    this._tags = tags;

    this.validate();
  }

  public static create(payload: Omit<PayloadCreatePostDto, 'id'>) {
    return new PostEntity({
      title: payload.title,
      userId: new UniqueId(payload.userId),
      description: payload.description,
      id: new UniqueId(),
      imgs: payload.imgs,
      tags: payload.tags,
    });
  }

  public static restore(payload: PostEntityRestoreDto) {
    return new PostEntity({ ...payload, id: new UniqueId(payload.id), userId: new UniqueId(payload.userId) });
  }

  public changeTags(tags: PostTagsInterface) {
    this._tags = tags;
    this.validate();
  }

  public changeDescription(description: string) {
    this._description = description;
    this.validate();
  }

  public changeImgs(imgs: PostImagesInterface[]) {
    this._imgs = imgs;
    this.validate();
  }

  private validate() {
    PostValidatorFactory.create().validate(this);

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }
}
