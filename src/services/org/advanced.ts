import { request } from "@umijs/max";

export const _passOrgAdvanceApprove = async (data: {
  id: string;
}): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/approve/advance/pass", {
    method: "put",
    data,
  });
};
export const _getAllWaitingAdvancedOrg =
  async (): Promise<API.DefaultObjectResponse> => {
    return request("/api/v1/admin/private/approve/advance/all", {
      method: "get",
    });
  };
export const _rejectOrgAdvanceApprove = async (data: {
  id: string;
  reason: string;
}): Promise<API.DefaultObjectResponse> => {
  console.log("_rejectOrgAdvanceApprove.data", data);
  return request("/api/v1/admin/private/approve/advance/reject", {
    method: "put",
    data,
  });
};
