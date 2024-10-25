declare namespace API {
  interface DefaultObjectResponse<T = any> {
    data: T;
    status: boolean;
    code: number;
  }
  interface DefaultListResponse<T> {
    data: T[];
    status: boolean;
    code: number;
  }
  interface Staff {
    id: string;
    token: string;
  }
  interface SignInData {
    account: string;
    password: string;
  }
}
