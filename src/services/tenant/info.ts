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
export const _getAllNewsletter = async (): Promise<API.DefaultObjectResponse> => {
	return request("/api/v1/admin/private/news/all", {
		method: "get",
	});
};
export const _getTenantById = async (id: string): Promise<API.DefaultObjectResponse> => {
	return request("/api/v1/admin/private/tenant/by-id", {
		method: "get",
		params: {
			id,
		},
	});
};
export const _editVendorInfo = async (
	tenID: string,
	adminId: string,
	data: any
): Promise<API.DefaultObjectResponse> => {
	return request(`/api/v1/admin/private/tenant/info/${tenID}`, {
		method: "put",
		data: data,
	});
};

export const _deleteTenantById = async (tenantId: string): Promise<API.DefaultObjectResponse> => {
	return request(`/api/v1/admin/private/tenant/${tenantId}`, {
		method: "DELETE",
	});
};
