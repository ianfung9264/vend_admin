import { request } from "@umijs/max";
import { EventStatus } from "../commonType";

export const _getAllEvent = async (): Promise<
  API.DefaultListResponse<API_EVENT.Event>
> => {
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
