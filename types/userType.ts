declare global {
  type PasswordType = string;

  type TokenType = string;

  interface UserInfoType {
    id: string;
    name: string;
    email: string;
  }
}

export {};
