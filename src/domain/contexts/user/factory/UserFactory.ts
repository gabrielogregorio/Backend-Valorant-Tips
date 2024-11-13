import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';

export class UserFactory {
  static mongoDataToUserEntity(userMongoData: any): UserEntity {
    const userEntity = UserEntity.restore({
      id: userMongoData.id,
      password: userMongoData.password,
      username: userMongoData.username,
    });

    if (userMongoData.image) {
      userEntity.changeImage(userMongoData.image);
    }

    return userEntity;
  }

  static userEntityToMongo(user: UserEntity): any {
    return {
      id: user.id,
      image: user.image,
      password: user.password,
      username: user.username,
    };
  }
}
