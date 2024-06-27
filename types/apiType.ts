declare global {
  interface ApiResponseType<T> {
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

  interface PageRequestType {
    pageIndex: number;
    pageSize?: number;
  }

  interface PageResponseType {
    firstPage: boolean;
    lastPage: boolean;
    empty: boolean;
    totalElements: number;
    totalPages: number;
    targetPage: number;
  }
}

export {};
