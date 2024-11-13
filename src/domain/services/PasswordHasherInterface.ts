export interface PasswordHasherInterface {
  generateHashPassword(password: string): Promise<string>;
  passwordIsValid(password: string, hashedPassword: string): Promise<boolean>;
}
