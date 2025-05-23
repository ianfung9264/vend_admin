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
export const _getOrgById = async (id: string): Promise<API.DefaultObjectResponse> => {
	return request("/api/v1/admin/private/org/by-id", {
		method: "get",
		params: {
			id,
		},
	});
};

export const _editOrgInfo = async (orgId: string, adminId: string, data: any): Promise<API.DefaultObjectResponse> => {
	return request(`/api/v1/admin/private/org/info/${orgId}`, {
		method: "put",
		data: data,
	});
};

export const _deleteOrgById = async (orgId: string): Promise<API.DefaultObjectResponse> => {
	return request(`/api/v1/admin/private/org/${orgId}`, {
		method: "DELETE",
	});
};

export const _getApplicationTransactionsByEventIds = async (eventIds: string[]): Promise<any[]> => {
	const eventIdsParam = eventIds.join(",");
	return request(`/api/v1/admin/private/application/transaction`, {
		method: "get",
		params: { event_ids: eventIdsParam },
	});
};
