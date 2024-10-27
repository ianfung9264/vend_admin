import { request } from "@umijs/max";

export const _getAllFaq = async (): Promise<API.DefaultListResponse> => {
  return request("/api/v1/admin/private/faq/all", {
    method: "get",
  });
};

export const _postFaq = async (
  data: API_Setting.CreateFaq
): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/faq", {
    method: "post",
    data,
  });
};
export const _updateFaq = async (
  data: API_Setting.UpdateFaq
): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/faq", {
    method: "put",
    data,
  });
};
