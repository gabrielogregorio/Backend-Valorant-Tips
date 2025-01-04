import { Entity } from '@/domain/contexts/common/entity/entity.abstract';
import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { UserEntityInterface } from '@/domain/contexts/contexts/user/entity/types';
import { UserValidatorFactory } from '@/domain/contexts/contexts/user/factory/user.validator';

type UserEntityDto = {
  id: UniqueId;
  username: string;
  password: string;
};

type UserEntityCreateDto = {
  username: string;
  password: string;
};

type UserEntityRestoreDto = {
  id: string;
  username: string;
  password: string;
};

export class UserEntity extends Entity implements UserEntityInterface {
  private _id: UniqueId;

  private _username: string;

  private _password: string;

  private _imageUrl: string;

  private _validatorTypes = UserValidatorFactory.create();

  private constructor({ id, username, password }: UserEntityDto) {
    super();
    this._id = id;
    this._username = username;
    this._password = password;
    this._imageUrl = '';

    this._validate();
  }

  public static create({ password, username }: UserEntityCreateDto) {
    return new UserEntity({
      id: new UniqueId(),
      username,
      password,
    });
  }

  public static restore({ password, username, id }: UserEntityRestoreDto) {
    return new UserEntity({
      id: new UniqueId(id),
      username,
      password,
    });
  }

  public changePassword(password: string) {
    this._password = password;
    this._validate();
  }

  public changeImageUrl(imageUrl: string) {
    this._imageUrl = imageUrl;
    this._validate();
  }

  public changeUsername(username: string) {
    this._username = username;
    this._validate();
  }

  get id() {
    return this._id;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  private _validate() {
    this._validatorTypes.validate(this);
  }
}
