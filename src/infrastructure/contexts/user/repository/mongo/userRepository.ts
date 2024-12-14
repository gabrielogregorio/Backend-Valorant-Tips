import { UserEntity } from '@/domain/contexts/contexts/user/entity/user';
import { UserFactory } from '@/domain/contexts/contexts/user/factory/UserFactory';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { User } from './User';

export class UserRepository implements UserRepositoryInterface {
  save = async (user: UserEntity): Promise<UserEntity> => {
    const newUser = new User(UserFactory.userEntityToMongo(user));
    await newUser.save();

    return user;
  };

  update = async (id: string, user: UserEntity) => {
    const userMongoData = UserFactory.userEntityToMongo(user);
    await User.findOneAndUpdate(
      { id },
      {
        $set: userMongoData,
      },
      { new: true },
    );
  };

  findById = async (id: string): Promise<UserEntity | null> => {
    const user = await User.findOne({ id });
    if (!user) {
      return null;
    }

    return UserFactory.mongoDataToUserEntity(user);
  };

  findByIds = async (ids: string[]): Promise<UserEntity[]> => {
    const users = await User.find({ id: { $in: ids } }).exec();

    return users.map((user) => UserFactory.mongoDataToUserEntity(user));
  };

  findOneByUsername = async (username: string): Promise<UserEntity | null> => {
    const user = await User.findOne({ username });
    if (!user) {
      return user;
    }

    return UserFactory.mongoDataToUserEntity(user);
  };

  findOneAndDelete = async (id: string): Promise<void> => {
    await User.findOneAndDelete({ id });
  };

  countDocuments = async (): Promise<number> => User.countDocuments({});
}
