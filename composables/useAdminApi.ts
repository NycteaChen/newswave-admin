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
}

export default () => adminApi;
