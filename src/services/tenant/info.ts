import { request } from "@umijs/max";

export const _blockTenant = async (data: {
  landownerId: string;
  adminPassword: string;
}): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/Tenant/block/by-id", {
    method: "put",
    data,
  });
};
export const _getAllTenant = async (): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/tenant/all", {
    method: "get",
  });
};
export const _getTenantById = async (
  id: string
): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/tenant/by-id", {
    method: "get",
    params: {
      id,
    },
  });
};
