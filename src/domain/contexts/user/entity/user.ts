import { Entity } from '@/domain/contexts/common/entity/entity.abstract';
import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';
import { UserEntityInterface } from '@/domain/contexts/contexts/user/entity/types';
import { UserValidatorFactory } from '@/domain/contexts/contexts/user/factory/user.validator';

type UserEntityDto = {
  id: UniqueId;
  username: string;
  password: string;
  name: string;
};

type UserEntityCreateDto = {
  username: string;
  password: string;
  name: string;
};

type UserEntityRestoreDto = {
  id: string;
  username: string;
  password: string;
  name: string;
};

export class UserEntity extends Entity implements UserEntityInterface {
  private _id: UniqueId;

  private _username: string;

  private _password: string;

  private _imageUrl: string;

  private _name: string;

  private _validatorTypes = UserValidatorFactory.create();

  private constructor({ id, username, password, name }: UserEntityDto) {
    super();
    this._id = id;
    this._username = username;
    this._password = password;
    this._imageUrl = '';
    this._name = name;

    this._validate();
  }

  public static create({ password, username, name }: UserEntityCreateDto) {
    return new UserEntity({
      id: new UniqueId(),
      username,
      password,
      name,
    });
  }

  public static restore({ password, username, id, name }: UserEntityRestoreDto) {
    return new UserEntity({
      id: new UniqueId(id),
      username,
      password,
      name,
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

  get name() {
    return this._name;
  }

  public changeName(name: string): void {
    this._name = name;
  }

  private _validate() {
    this._validatorTypes.validate(this);
  }
}
