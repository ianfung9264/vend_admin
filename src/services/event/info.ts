import { request } from "@umijs/max";
import { EventStatus } from "../commonType";

export const _getAllEvent = async (): Promise<API.DefaultListResponse<API_EVENT.Event>> => {
	return request("/api/v1/admin/private/event/all", {
		method: "get",
	});
};
export const _stopEvent = async ({
	event_id,
}: {
	event_id: string;
}): Promise<API.DefaultListResponse<API_EVENT.Event>> => {
	return request("/api/v1/admin/private/event/status", {
		method: "put",
		data: {
			event_id: event_id,
			status: EventStatus.SUSPEND,
		},
	});
};
export const _cancelEvent = async ({
	event_id,
}: {
	event_id: string;
}): Promise<API.DefaultListResponse<API_EVENT.Event>> => {
	console.log("event_id", event_id);
	return request("/api/v1/admin/private/event/status", {
		method: "put",
		data: {
			event_id: event_id,
			status: EventStatus.CANCEL,
		},
	});
};
export const _restartEvent = async ({
	event_id,
}: {
	event_id: string;
}): Promise<API.DefaultListResponse<API_EVENT.Event>> => {
	return request("/api/v1/admin/private/event/status", {
		method: "put",
		data: {
			event_id: event_id,
			status: EventStatus.NORMAL,
		},
	});
};

export const _getEventById = async (eventId: string) => {
	const result = await request(`/api/v1/client/public/event/by-id?id=${eventId}`, {
		method: "get",
	});
	return result;
};

export const _getApplicantInformationByEventId = async (eventId: string) => {
	const result = await request(`/api/v1/client/private/landowner/event/details/${eventId}`, {
		method: "get",
	});
	return result;
};

export const _getEventDetailsByEventId = async (creatorId: string, eventId: string) => {
	const result = await request(
		`http://localhost:8888/api/v1/client/private/landowner/event/details/admin/${creatorId}/${eventId}`,
		{
			method: "get",
		}
	);
	return result;
};

export const _approveCancelEvent = async (
	data: { application_id_list: { id: string; amount: number }[] },
	landowner_id: string
) => {

	return request(`http://localhost:8888/api/v1/client/private/landowner/application/refund/admin/${landowner_id}`, {
		method: "post",
		data,
	});
};
