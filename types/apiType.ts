declare global {
  interface ApiResponseType<T> {
    [x: string]: any;
    status?: boolean;
    message: string;
    data: T;
  }

  interface LoginRequestType {
    email: UserInfoType['email'];
    password: PasswordType;
  }

  interface LoginRegisterResponseType extends UserInfoType {
    token: TokenType;
  }
}

export {};
