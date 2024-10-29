import { request } from "@umijs/max";

export const _getAllFee = async (): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/fee/info", {
    method: "get",
  });
};
export const _getAllTransactionFee =
  async (): Promise<API.DefaultObjectResponse> => {
    return request("/api/v1/admin/private/application/all", {
      method: "get",
    });
  };

export const _updateVendPopupsFee = async (values: {
  percentage: number;
}): Promise<API.DefaultObjectResponse> => {
  return request("/api/v1/admin/private/fee/info", {
    method: "put",
    data: { vendpopups: { ...values } },
  });
};
