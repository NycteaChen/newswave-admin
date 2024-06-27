// 後台管理者
class adminApi {
  static async login(params: LoginRequestType): Promise<ApiResponseType<LoginRegisterResponseType>> {
    const body = {
      email: params.email,
      password: params.password
    };
    const res = await useApi('/admin/login', {
      method: 'post',
      body
    });

    return res;
  }

  static async logout(): Promise<ApiResponseType<undefined>> {
    const res = await useApi('/admin/logout', {
      method: 'post'
    });

    return res;
  }

  static async createNewsArticle(body: CreateArticleRequestType): Promise<ApiResponseType<undefined>> {
    const res = await useApi('/admin/create-news-article', {
      method: 'post',
      body
    });

    return res;
  }

  static async uploadImage(file: File): Promise<ApiResponseType<UploadResponseType>> {
    const formData = new FormData();
    formData.append('file', file);

    const res = await useApi('/admin/upload/image', {
      method: 'post',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return res;
  }
}

export default () => adminApi;
