import { request } from "@umijs/max";
import { UrgentActionStatus } from "../commonType";

export const _getUrgentInfo = async (): Promise<API.DefaultListResponse> => {
  const result = await request(`/api/v1/admin/private/urgent/all`, {
    method: "get",
  });
  return result;
};
export const _putUrgentInfo = async (data: {
  urgent_id: string;
  status: UrgentActionStatus;
}): Promise<API.DefaultObjectResponse> => {
  const result = await request(`/api/v1/admin/private/urgent`, {
    method: "put",
    data,
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};
