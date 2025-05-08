import { request } from "@umijs/max";

export const _getAllFee = async (): Promise<API.DefaultObjectResponse> => {
	return request("/api/v1/admin/private/fee/info", {
		method: "get",
	});
};
export const _getAllTransactionFee = async (): Promise<API.DefaultObjectResponse> => {
	return request("/api/v1/admin/private/application/all", {
		method: "get",
	});
};

export const _updateFees = async (values: {
	stripe?: {
		percentage?: number;
		fixed_dollar?: number;
		billing_percentage?: number;
	};
	vendpopups?: {
		percentage?: number;
		fixed_amount?: number;
	};
}): Promise<API.DefaultObjectResponse> => {
	return request("/api/v1/admin/private/fee/info", {
		method: "put",
		data: values,
	});
};
