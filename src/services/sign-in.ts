import { request } from "@umijs/max";

export const sign_in = async (
  data: API.SignInData
): Promise<API.DefaultObjectResponse<API.Staff>> => {
  // console.log("data", data);
  return request("/api/v1/admin/public/auth/sign-in", {
    method: "post",
    data,
  });
};
