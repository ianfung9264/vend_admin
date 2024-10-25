import { request } from "@umijs/max";

export const _getAllEvent = async (): Promise<
  API.DefaultListResponse<API_EVENT.Event>
> => {
  return request("/api/v1/admin/private/event/all", {
    method: "get",
  });
};
// export const _stopEvent = async ({
//   id,
// }: {
//   id: string;
// }): Promise<API.DefaultListResponse<API_EVENT.Event>> => {
//   return request("/api/v1/admin/private/event/all", {
//     method: "get",
//   });
// };
// export const _cancelEvent = async ({
//   id,
// }: {
//   id: string;
// }): Promise<API.DefaultListResponse<API_EVENT.Event>> => {
//   return request("/api/v1/admin/private/event/all", {
//     method: "get",
//   });
// };
// export const _restartEvent = async ({
//   id,
// }: {
//   id: string;
// }): Promise<API.DefaultListResponse<API_EVENT.Event>> => {
//   return request("/api/v1/admin/private/event/all", {
//     method: "get",
//   });
// };
