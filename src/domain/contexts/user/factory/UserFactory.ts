/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';

export class UserFactory {
  // resolve tgus
  static mongoDataToUserEntity(userMongoData: any): UserEntity {
    const userEntity = UserEntity.restore({
      id: userMongoData.id,
      password: userMongoData.password,
      username: userMongoData.username,
    });

    if (userMongoData.image) {
      userEntity.changeImageUrl(userMongoData.imageUrl);
    }

    return userEntity;
  }

  static userEntityToMongo(user: UserEntity): any {
    return {
      id: user.id.getValue(),
      imageUrl: user.imageUrl,
      password: user.password,
      username: user.username,
    };
  }
}
