import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';

export interface UserEntityInterface {
  get id(): UniqueId;
  get username(): string;
  get password(): string;
  get imageUrl(): string;
  get name(): string;

  changeUsername(username: string): void;
  changePassword(passwordHash: string): void;
  changeImageUrl(imageUrl: string): void;
  changeName(string: string): void;
}
