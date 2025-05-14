import { request } from "@umijs/max";
// import { API_APPLICATION } from "./typing"; // Removed: .d.ts types are globally available

/**
 * Fetches all application entries for the admin transaction page.
 * This includes application fee status, stall payment status, and enriched data like event and tenant names.
 */
export const _getAllApplicationsForAdmin = async (): Promise<
	API.DefaultObjectResponse<API_APPLICATION.Application[]> // API_APPLICATION should be globally available
> => {
	return request("/api/v1/admin/private/application/truly-all", {
		method: "get",
	});
};
