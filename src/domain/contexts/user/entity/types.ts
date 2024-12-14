import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';

export interface UserEntityInterface {
  get id(): UniqueId;
  get username(): string;
  get password(): string;
  get image(): string;

  changeUsername(username: string): void;
  changePassword(passwordHash: string): void;
  changeImage(image: string): void;
}
