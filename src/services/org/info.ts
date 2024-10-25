import { request } from "@umijs/max";

export const _blockOrg = async (data: {
  landownerId: string;
  adminPassword: string;
}): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/org/block/by-id", {
    method: "put",
    data,
  });
};
export const _getAllOrg = async (): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/org/all", {
    method: "get",
  });
};
export const _getOrgById = async (
  id: string
): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/org/by-id", {
    method: "get",
    params: {
      id,
    },
  });
};
