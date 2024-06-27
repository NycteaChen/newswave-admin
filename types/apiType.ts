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

  interface UploadResponseType {
    imgUrl: string;
  }

  interface CreateArticleRequestType {
    topic: string;
    editor: string;
    title: string;
    imageDescribe: string;
    image: string;
    content: string;
    source: {
      name: string;
      url: string;
    };
  }
}

export {};
