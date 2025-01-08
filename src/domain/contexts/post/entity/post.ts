import { Entity } from '@/domain/contexts/common/entity/entity.abstract';
import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { AgentsValueObject } from '@/domain/contexts/contexts/agents/valueObject';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';
import { PostEntityInterface, PostStepInterface } from '@/domain/contexts/contexts/post/entity/interfaces';
import { PostValidatorFactory } from '@/domain/contexts/contexts/post/factory';
import { PostTagsValueObject } from '@/domain/contexts/contexts/postTags/valueObject';
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { DomainError } from '@/domain/contexts/errors';

type PostEntityDto = {
  createdAt: Date;
  updateAt: Date;
  id: UniqueId;
  title: string;
  description: string;
  isDeleted: boolean;
  isPublished: boolean;
  authors: UserEntity[];

  agents: AgentsValueObject[];
  maps: MapsValueObject[];
  tags: PostTagsValueObject[];

  steps: PostStepInterface[];
};

type CreatePostStep = {
  description: string;
  imageUrl: string;
};

type PayloadCreatePostDto = {
  title: string;
  description: string;
  authors: UserEntity[];
};

type PostEntityRestoreDto = {
  createdAt: Date;
  updateAt: Date;
  id: string;
  title: string;
  description: string;
  isDeleted: boolean;
  isPublished: boolean;
  authors: UserEntity[];
  agents: AgentsValueObject[];
  maps: MapsValueObject[];
  tags: PostTagsValueObject[];
  steps: PostStepInterface[];
};

export class PostEntity extends Entity implements PostEntityInterface {
  readonly createdAt: Date;

  private _id: UniqueId;

  private _updateAt: Date;

  private _title: string;

  private _description: string;

  private _isDeleted: boolean;

  private _isPublished: boolean;

  private _authors: UserEntity[];

  private _agents: AgentsValueObject[];

  private _maps: MapsValueObject[];

  private _tags: PostTagsValueObject[];

  private _steps: PostStepInterface[];

  private _validatorTypes = PostValidatorFactory.create();

  private constructor({
    createdAt,
    updateAt,
    id,
    title,
    description,
    isDeleted,
    isPublished,
    authors,
    agents,
    maps,
    tags,
    steps,
  }: PostEntityDto) {
    super();
    this.createdAt = createdAt;
    this._updateAt = updateAt;
    this._id = id;
    this._title = title;
    this._description = description;
    this._isDeleted = isDeleted;
    this._isPublished = isPublished;
    this._authors = authors;
    this._agents = agents;
    this._maps = maps;
    this._tags = tags;
    this._steps = steps;

    this._validate();
  }

  get id(): UniqueId {
    return this._id;
  }

  get updateAt() {
    return this._updateAt;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get isDeleted() {
    return this._isDeleted;
  }

  get isPublished() {
    return this._isPublished;
  }

  get authors() {
    return this._authors;
  }

  get agents() {
    return this._agents;
  }

  get maps() {
    return this._maps;
  }

  get tags() {
    return this._tags;
  }

  get steps() {
    return this._steps;
  }

  public static create({ authors, description, title }: PayloadCreatePostDto) {
    return new PostEntity({
      id: new UniqueId(),
      title,
      description,
      authors,
      createdAt: new Date(),
      updateAt: new Date(),
      isDeleted: false,
      isPublished: false,
      maps: [],
      agents: [],
      tags: [],
      steps: [],
    });
  }

  public static restore(payload: PostEntityRestoreDto) {
    return new PostEntity({
      agents: payload.agents,
      authors: payload.authors,
      createdAt: payload.createdAt,
      description: payload.description,
      id: new UniqueId(payload.id),
      isDeleted: payload.isDeleted,
      isPublished: payload.isPublished,
      maps: payload.maps,
      steps: payload.steps,
      tags: payload.tags,
      title: payload.title,
      updateAt: payload.updateAt,
    });
  }

  public deletePost(): void {
    this._isDeleted = true;
    this._validate();
  }

  unpublishPost(): void {
    this._isPublished = false;
    this._validate();
  }

  publishPost(): void {
    this._isPublished = true;
    this._validate();
  }

  changeTags(tags: PostTagsValueObject[]): void {
    this._tags = tags;
    this._validate();
  }

  changeSteps(steps: CreatePostStep[]): void {
    this._steps = steps.map((step) => ({
      description: step.description,
      id: new UniqueId(),
      imageUrl: step.imageUrl,
    }));

    this._validate();
  }

  changeMap(maps: MapsValueObject[]): void {
    this._maps = maps;

    this._validate();
  }

  changeAgents(agents: AgentsValueObject[]): void {
    this._agents = agents;
    this._validate();
  }

  changeAuthors(authors: UserEntity[]): void {
    this._authors = authors;
    this._validate();
  }

  changeDescription(description: string): void {
    this._description = description;
    this._validate();
  }

  changeTitle(title: string): void {
    this._title = title;
    this._validate();
  }

  private _validate() {
    if (this._isPublished && !this._authors.length) {
      throw new DomainError('BusinessRuleViolation', 'Para publicar um post, ele precisa ter autores', {});
    }

    if (this._isPublished && !this._steps.length) {
      throw new DomainError('BusinessRuleViolation', 'Para publicar um post, ele precisa ter passos', {});
    }

    this._validatorTypes.validate(this);
  }
}
