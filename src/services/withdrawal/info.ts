import { request } from "@umijs/max";
import { WithdrawalProgress } from "../commonType";
export const _getAlWithdrawal = async (): Promise<any[]> => {
	return request("/api/v1/admin/private/withdrawal/all", {
		method: "get",
	});
};
export const _getAllRefund = async (): Promise<any[]> => {
	return request("/api/v1/admin/private/refund/all", {
		method: "get",
	});
};
export const _rejectWithdrawal = async (data: {
	reason: string;
	withdrawalId: string;
}): Promise<API.DefaultObjectResponse> => {
	return request(`/api/v1/admin/private/withdrawal/${data.withdrawalId}`, {
		method: "put",
		data: {
			rejected_reason: data.reason,
			progress: WithdrawalProgress.REJECTED,
		},
	});
};

export const _updateWithdrawalProgress = async (data: {
	withdrawalId: string;
	progress: WithdrawalProgress;
}): Promise<API.DefaultObjectResponse> => {
	console.log("data", data);
	return request(`/api/v1/admin/private/withdrawal/${data.withdrawalId}`, {
		method: "put",
		data: { progress: data.progress },
	});
};
