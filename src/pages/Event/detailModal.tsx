import React, { useEffect, useRef, useState } from "react";
import BaseModel from "@/components/Base/BaseModel";
import { _editOrgInfo, _getOrgById } from "@/services/org/info";
import {
  ProForm,
  ProFormField,
  ProFormGroup,
  ProFormInstance,
  ProFormRate,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from "@ant-design/pro-components";
import { Divider, Image, message, Progress } from "antd";
import { _getEventByIdWithApplications } from "@/services/event/info";
import { Line } from "@ant-design/charts";
import { truncate } from "lodash";

export default function DetailModal({
  initData,
  mainTableReload,
}: {
  mainTableReload: (() => Promise<void>) | undefined;

  initData?: Page_org.mainTable;
}) {
  /**********************************狀態管理**********************************/
  const formRef = useRef<ProFormInstance>();
  const [data, setData] = useState<Record<string, any>>();

  // Resolve timezone based on event location (US-focused fallback)
  const US_STATE_TO_TZ: Record<string, string> = {
    AL: "America/Chicago",
    AK: "America/Anchorage",
    AZ: "America/Phoenix",
    AR: "America/Chicago",
    CA: "America/Los_Angeles",
    CO: "America/Denver",
    CT: "America/New_York",
    DE: "America/New_York",
    FL: "America/New_York",
    GA: "America/New_York",
    HI: "Pacific/Honolulu",
    IA: "America/Chicago",
    ID: "America/Denver",
    IL: "America/Chicago",
    IN: "America/New_York",
    KS: "America/Chicago",
    KY: "America/New_York",
    LA: "America/Chicago",
    ME: "America/New_York",
    MD: "America/New_York",
    MA: "America/New_York",
    MI: "America/Detroit",
    MN: "America/Chicago",
    MS: "America/Chicago",
    MO: "America/Chicago",
    MT: "America/Denver",
    NE: "America/Chicago",
    NV: "America/Los_Angeles",
    NH: "America/New_York",
    NJ: "America/New_York",
    NM: "America/Denver",
    NY: "America/New_York",
    NC: "America/New_York",
    ND: "America/Chicago",
    OH: "America/New_York",
    OK: "America/Chicago",
    OR: "America/Los_Angeles",
    PA: "America/New_York",
    RI: "America/New_York",
    SC: "America/New_York",
    SD: "America/Chicago",
    TN: "America/Chicago",
    TX: "America/Chicago",
    UT: "America/Denver",
    VT: "America/New_York",
    VA: "America/New_York",
    WA: "America/Los_Angeles",
    WV: "America/New_York",
    WI: "America/Chicago",
    WY: "America/Denver",
    DC: "America/New_York",
  };

  const US_STATE_NAME_TO_CODE: Record<string, string> = {
    ALABAMA: "AL",
    ALASKA: "AK",
    ARIZONA: "AZ",
    ARKANSAS: "AR",
    CALIFORNIA: "CA",
    COLORADO: "CO",
    CONNECTICUT: "CT",
    DELAWARE: "DE",
    FLORIDA: "FL",
    GEORGIA: "GA",
    HAWAII: "HI",
    IDAHO: "ID",
    ILLINOIS: "IL",
    INDIANA: "IN",
    IOWA: "IA",
    KANSAS: "KS",
    KENTUCKY: "KY",
    LOUISIANA: "LA",
    MAINE: "ME",
    MARYLAND: "MD",
    MASSACHUSETTS: "MA",
    MICHIGAN: "MI",
    MINNESOTA: "MN",
    MISSISSIPPI: "MS",
    MISSOURI: "MO",
    MONTANA: "MT",
    NEBRASKA: "NE",
    NEVADA: "NV",
    "NEW HAMPSHIRE": "NH",
    "NEW JERSEY": "NJ",
    "NEW MEXICO": "NM",
    "NEW YORK": "NY",
    "NORTH CAROLINA": "NC",
    "NORTH DAKOTA": "ND",
    OHIO: "OH",
    OKLAHOMA: "OK",
    OREGON: "OR",
    PENNSYLVANIA: "PA",
    "RHODE ISLAND": "RI",
    "SOUTH CAROLINA": "SC",
    "SOUTH DAKOTA": "SD",
    TENNESSEE: "TN",
    TEXAS: "TX",
    UTAH: "UT",
    VERMONT: "VT",
    VIRGINIA: "VA",
    WASHINGTON: "WA",
    "WEST VIRGINIA": "WV",
    WISCONSIN: "WI",
    WYOMING: "WY",
    "DISTRICT OF COLUMBIA": "DC",
  };

  const resolveTimezoneFromLocationFallback = (location?: {
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
  } | null): string | null => {
    if (!location) return null;
    const countryRaw = String(location.country || "").trim().toLowerCase();
    const stateRaw = String(location.state || "").trim();
    const stateUpper = stateRaw.toUpperCase();
    const isUs =
      countryRaw === "us" ||
      countryRaw === "usa" ||
      countryRaw === "united states" ||
      countryRaw === "united states of america" ||
      (!countryRaw && !!stateRaw);
    if (isUs) {
      const code = US_STATE_TO_TZ[stateUpper] ? stateUpper : US_STATE_NAME_TO_CODE[stateUpper];
      if (code && US_STATE_TO_TZ[code]) return US_STATE_TO_TZ[code];
    }
    return null;
  };

  const formatInEventTimezone = (iso?: string | Date | null): string => {
    if (!iso) return "N/A";
    const tz = resolveTimezoneFromLocationFallback((data as any)?.location);
    try {
      const date = typeof iso === "string" ? new Date(iso) : iso;
      if (tz) return date.toLocaleString(undefined, { timeZone: tz });
      return date.toLocaleString();
    } catch {
      try {
        return new Date(String(iso)).toLocaleString();
      } catch {
        return "N/A";
      }
    }
  };

  React.useEffect(() => {
    if (data) {
      try {
        console.log("[EventDetail] data updated", data, {
          creator: (data as any)?.creator,
          creatorType: typeof (data as any)?.creator,
          creatorKeys:
            (data as any)?.creator && typeof (data as any).creator === "object"
              ? Object.keys((data as any).creator)
              : null,
        });
      } catch (e) {
        console.warn("[EventDetail] error logging data update", e);
      }
    }
  }, [data]);

  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  const groupStyle: React.CSSProperties = {
    backgroundColor: "white",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingTop: "6px",
    borderBottom: 3,
    borderColor: "black",
  };
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  // const fetchOrgData = async (id: string) => {
  //   try {
  //     const res = await _getOrgById(id);
  //     console.log("res.data", res.data);
  //     setOrg(res.data);
  //     formRef.current?.setFieldsValue(res.data);
  //   } catch (error) {
  //     console.error("获取组织数据失败:", error);
  //   }
  // };
  /**********************************異步函數**********************************/
  return (
    <BaseModel<Page_org.mainTable>
      modalFormProps={{
        formRef: formRef,
        clearOnDestroy: true,
        onInit: async (values, form) => {
          try {
            console.log("[EventDetail] onInit called", {
              initData,
              values,
            });
            if (initData?._id) {
              console.log(
                "[EventDetail] fetching event by id with applications",
                initData._id
              );
              const res = await _getEventByIdWithApplications(initData._id);
              if (res?.data) {
                console.log("[EventDetail] fetch result", {
                  raw: res,
                  data: res?.data,
                  creator: res?.data?.creator,
                  creatorType: typeof res?.data?.creator,
                  creatorKeys:
                    res?.data?.creator &&
                    typeof res?.data?.creator === "object"
                      ? Object.keys(res.data.creator)
                      : null,
                });

                // Hydrate organizer (creator) with full org details
                let hydrated = res.data as any;
                try {
                  const creatorVal = (res.data as any)?.creator;
                  const organizerId =
                    typeof creatorVal === "string"
                      ? creatorVal
                      : creatorVal?._id;
                  if (organizerId) {
                    const orgRes = await _getOrgById(organizerId);
                    if (orgRes?.data) {
                      const org = orgRes.data as any;
                      hydrated = {
                        ...res.data,
                        creator: {
                          ...(typeof creatorVal === "object" ? creatorVal : {}),
                          ...org,
                          // Map display name for the form field expecting creator.name
                          name:
                            (org && org.business_name) ||
                            (typeof creatorVal === "object"
                              ? creatorVal.business_name
                              : undefined),
                        },
                      };
                      console.log("[EventDetail] hydrated creator with org", {
                        organizerId,
                        orgKeys: Object.keys(org || {}),
                        creatorAfter: hydrated.creator,
                      });
                    }
                  }
                } catch (hydrateErr) {
                  console.warn(
                    "[EventDetail] failed to hydrate organizer from org id",
                    hydrateErr
                  );
                }

                setData(hydrated);
                form.setFieldsValue(hydrated);
                try {
                  console.log(
                    "[EventDetail] form fields set (from fetched data)",
                    form.getFieldsValue()
                  );
                } catch (formErr) {
                  console.warn("[EventDetail] unable to read form values", formErr);
                }
                return;
              }
            }
          } catch (e) {
            console.error("Failed to load full event details:", e);
          }
          console.warn("[EventDetail] Falling back to initData", {
            initData,
            creator: (initData as any)?.creator,
            creatorType: typeof (initData as any)?.creator,
            creatorKeys:
              (initData as any)?.creator &&
              typeof (initData as any).creator === "object"
                ? Object.keys((initData as any).creator)
                : null,
          });
          // Attempt to hydrate fallback data as well
          let fallbackHydrated: any = initData;
          try {
            const creatorVal = (initData as any)?.creator;
            const organizerId =
              typeof creatorVal === "string" ? creatorVal : creatorVal?._id;
            if (organizerId) {
              const orgRes = await _getOrgById(organizerId);
              if (orgRes?.data) {
                const org = orgRes.data as any;
                fallbackHydrated = {
                  ...(initData as any),
                  creator: {
                    ...(typeof creatorVal === "object" ? creatorVal : {}),
                    ...org,
                    name:
                      (org && org.business_name) ||
                      (typeof creatorVal === "object"
                        ? creatorVal.business_name
                        : undefined),
                  },
                };
                console.log("[EventDetail] hydrated fallback creator with org", {
                  organizerId,
                  orgKeys: Object.keys(org || {}),
                  creatorAfter: fallbackHydrated.creator,
                });
              }
            }
          } catch (hydrateErr) {
            console.warn(
              "[EventDetail] failed to hydrate fallback organizer",
              hydrateErr
            );
          }
          setData(fallbackHydrated);
          form.setFieldsValue(fallbackHydrated);
          try {
            console.log(
              "[EventDetail] form fields set (from initData)",
              form.getFieldsValue()
            );
          } catch (formErr) {
            console.warn("[EventDetail] unable to read form values", formErr);
          }
        },
        // onFinish: async (value) => {
        // 	console.log("original value", value);

        // 	// Destructure to remove event_operation_license and _id.
        // 	// _id is removed because it's passed as initData._id to the API.
        // 	const { event_operation_license, _id, icon_url, ...intermediatePayload } = value;

        // 	// Create a new payload object to hold only non-empty string values
        // 	const finalPayload: Record<string, any> = {};
        // 	for (const key in intermediatePayload) {
        // 		if (Object.prototype.hasOwnProperty.call(intermediatePayload, key)) {
        // 			const fieldValue = intermediatePayload[key];
        // 			// Keep the field if it's not an empty string.
        // 			// Also, explicitly keep fields that are numbers (like 0) or booleans (like false),
        // 			// as they shouldn't be removed if they are legitimate values.
        // 			if (typeof fieldValue === "string" && fieldValue.trim() === "") {
        // 				// Skip empty strings
        // 			} else if (fieldValue === null || typeof fieldValue === "undefined") {
        // 				// Also skip null or undefined values, backend @IsOptional should handle these.
        // 			} else {
        // 				finalPayload[key] = fieldValue;
        // 			}
        // 		}
        // 	}

        // 	// Ensure specified URL fields, if present and not empty, are valid strings.
        // 	// This step might be less critical now that we remove empty strings,
        // 	// but it can be a safeguard if a URL field could be, e.g., a number by mistake.
        // 	const urlFields = ["business_url", "facebook_url", "ins_url", "x_url"];
        // 	for (const field of urlFields) {
        // 		if (
        // 			finalPayload.hasOwnProperty(field) &&
        // 			finalPayload[field] !== null &&
        // 			typeof finalPayload[field] !== "undefined"
        // 		) {
        // 			if (typeof finalPayload[field] !== "string") {
        // 				finalPayload[field] = String(finalPayload[field]); // Convert to string if not already
        // 			}
        // 			// If, after conversion, it's an empty string (e.g. was `""` already), it would have been removed above.
        // 			// If it was, for example, `0`, it would become "0". The @IsUrl validator will catch if "0" is not a valid URL.
        // 		}
        // 	}
        // 	finalPayload.be_followed_count = finalPayload.be_followed_count.toString();
        // 	console.log("payload to send", finalPayload);

        // 	if (initData?._id) {
        // 		try {
        // 			// Make sure value.adminId is correctly sourced if required by _editOrgInfo
        // 			await _editOrgInfo(initData._id, value.adminId, finalPayload);

        // 			message.success("Organization info updated successfully");
        // 			mainTableReload?.();
        // 			return true; // Indicate success
        // 		} catch (error) {
        // 			console.error("Error updating organization info:", error);
        // 			let errorMessage = "Failed to update organization info";
        // 			// Assuming you use axios, otherwise adjust error checking
        // 			if (
        // 				typeof error === "object" &&
        // 				error !== null &&
        // 				"isAxiosError" in error &&
        // 				(error as any).isAxiosError
        // 			) {
        // 				const axiosError = error as any; // Cast to any to access response
        // 				if (
        // 					axiosError.response &&
        // 					axiosError.response.data &&
        // 					axiosError.response.data.message
        // 				) {
        // 					errorMessage = `Failed to update: ${axiosError.response.data.message}`;
        // 				}
        // 			} else if (error instanceof Error) {
        // 				errorMessage = `Failed to update: ${error.message}`;
        // 			}
        // 			message.error(errorMessage);
        // 			return false; // Indicate failure
        // 		}
        // 	} else {
        // 		console.error("Cannot update: initData._id is missing");
        // 		message.error("Cannot update organization: ID is missing.");
        // 		return false;
        // 	}
        // },
      }}
      allowUpdate={true}
      submit={formRef?.current?.submit}
      initData={data}
      title="Account Details"
    >
      <Divider
        children="Event Information"
        orientation="left"
        orientationMargin={20}
      />
      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormText
          label={"Name"}
          name="name"
          colProps={{ span: 12, offset: 0 }}
        />
        <ProFormText
          label={"Event Type"}
          name="type"
          colProps={{ span: 12, offset: 0 }}
        />

        <ProFormField
          label={"Description"}
          colProps={{ span: 24, offset: 0 }}
          readonly
        >
          {data?.description && (
            <div
              className="event-description"
              dangerouslySetInnerHTML={{ __html: data.description }}
              style={{
                border: "1px solid #f0f0f0",
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "15px",
              }}
            />
          )}
        </ProFormField>
        <ProFormText
          label={"Event Organizer"}
          name={["creator", "name"]}
          colProps={{ span: 12, offset: 0 }}
        />
        <ProFormText
          label={"Organizer Email"}
          name={["creator", "email"]}
          colProps={{ span: 12, offset: 0 }}
        />
        <ProFormText
          label={"Organizer Phone Prefix"}
          name={["creator", "phone_pre"]}
          colProps={{ span: 12, offset: 0 }}
        />
        <ProFormText
          label={"Organizer Phone"}
          name={["creator", "phone"]}
          colProps={{ span: 12, offset: 0 }}
        />
        <ProFormText
          label={"Organizer Total Balance Amount"}
          name={["creator", "wallet"]}
          colProps={{ span: 12, offset: 0 }}
          proFieldProps={{
            render: () => {
              const amount = Number((data as any)?.creator?.wallet ?? 0);
              return isFinite(amount) ? amount.toFixed(2) : "0.00";
            },
          }}
          readonly
        />
        <ProFormText
          label={"Organizer Withdrawable Balance Amount"}
          name={["creator", "useable_wallet"]}
          colProps={{ span: 12, offset: 0 }}
          proFieldProps={{
            render: () => {
              const amount = Number((data as any)?.creator?.useable_wallet ?? 0);
              return isFinite(amount) ? amount.toFixed(2) : "0.00";
            },
          }}
          readonly
        />
        <ProFormText
          label={"Organizer Pending Balance Amount"}
          name={["creator", "total_cool_down"]}
          colProps={{ span: 12, offset: 0 }}
          proFieldProps={{
            render: () => {
              const total = Number((data as any)?.creator?.wallet ?? 0);
              const usable = Number((data as any)?.creator?.useable_wallet ?? 0);
              const pending = (isFinite(total) ? total : 0) - (isFinite(usable) ? usable : 0);
              return (isFinite(pending) ? pending : 0).toFixed(2);
            },
          }}
          readonly
        />
        <ProFormField
          label={"Images"}
          name="image_filename"
          colProps={{ span: 24, offset: 0 }}
          readonly
        >
          {data?.image_filename.map((imageObj: any, index: number) => (
            <Image
              src={imageObj.url}
              width={100}
              style={{ paddingRight: "10px" }}
            />
          ))}
        </ProFormField>

        <ProFormText
          name={["location", "country"]}
          colProps={{ span: 12, offset: 0 }}
          label={"Country"}
        />
        <ProFormText
          name={["location", "zip"]}
          colProps={{ span: 12, offset: 0 }}
          label={"State"}
        />
        <ProFormText
          name={["location", "city"]}
          colProps={{ span: 12 }}
          label={"City"}
        />
        <ProFormText
          name={["location", "address"]}
          label={"Address"}
          colProps={{ span: 12 }}
        />
        <ProFormText
          name={["location", "venue"]}
          label={"Venue"}
          colProps={{ span: 24 }}
        />

        <ProFormText
          name={"stripe_fee_belong"}
          label={"Stripe Fee Responsibility"}
          colProps={{ span: 24 }}
          proFieldProps={{
            render: () => {
              return typeof data?.stripe_fee_belong === "number"
                ? data.stripe_fee_belong === 0
                  ? "Organizer"
                  : "Vendor"
                : "N/A";
            },
          }}
        />
        {data?.schedule &&
          Array.isArray(data.schedule) &&
          data.schedule.map(
            (
              scheduleItem: { start_time: string; end_time: string },
              index: number
            ) => (
              <React.Fragment key={`schedule-entry-${index}`}>
                <ProFormText
                  label={`Schedule ${index + 1} Start Time`}
                  initialValue={
                    scheduleItem.start_time
                      ? formatInEventTimezone(scheduleItem.start_time)
                      : "N/A"
                  }
                  name={scheduleItem.start_time}
                  readonly
                  colProps={{ span: 12, offset: 0 }}
                />
                <ProFormText
                  label={`Schedule ${index + 1} End Time`}
                  initialValue={
                    scheduleItem.end_time
                      ? formatInEventTimezone(scheduleItem.end_time)
                      : "N/A"
                  }
                  name={scheduleItem.end_time}
                  readonly
                  colProps={{ span: 12, offset: 0 }}
                />
              </React.Fragment>
            )
          )}
        <ProFormField
          label={"Application Deadline"}
          colProps={{ span: 24, offset: 0 }}
          readonly
          proFieldProps={{
            render: () => {
              return (data as any)?.application_deadline
                ? formatInEventTimezone((data as any).application_deadline)
                : "N/A";
            },
          }}
        />
        <ProFormField
          label={"Invoice Effective Duration "}
          colProps={{ span: 24, offset: 0 }}
          readonly
          proFieldProps={{
            render: () => {
              const daysRaw = (data as any)?.invoice_effective_duration;
              const daysNum = Number(daysRaw);
              if (!isFinite(daysNum) || daysNum <= 0) return "N/A";
              return `${daysNum} ${daysNum === 1 ? "day" : "days"}`;
            },
          }}
        />
        <ProFormField
          label={"Ticket Types"}
          colProps={{ span: 24, offset: 0 }}
          readonly
        >
          {data?.ticket_types && Array.isArray(data.ticket_types) && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {data.ticket_types.map((ticket: any, index: number) => (
                <div
                  key={`ticket-${index}`}
                  style={{
                    border: "1px solid #f0f0f0",
                    padding: "15px",
                    borderRadius: "5px",
                  }}
                >
                  <h4 style={{ marginTop: 0 }}>{ticket.stall_type}</h4>
                  <p style={{ margin: "0 0 10px" }}>{ticket.description}</p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
                  >
                    <div>
                      <strong>Price:</strong> ${Number(ticket.price || 0).toFixed(2)}
                    </div>
                    <div>
                      <strong>Quantity:</strong> {ticket.quantity}
                    </div>
                    <div>
                      <strong>Dimensions:</strong> {ticket.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ProFormField>

        <ProFormField
          label={"Add-ons"}
          colProps={{ span: 24, offset: 0 }}
          readonly
        >
          {data?.add_ons &&
          Array.isArray(data.add_ons) &&
          data.add_ons.length > 0 ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {data.add_ons.map((addon: any, index: number) => (
                <div
                  key={`addon-${index}`}
                  style={{
                    border: "1px solid #f0f0f0",
                    padding: "15px",
                    borderRadius: "5px",
                  }}
                >
                  <h4 style={{ marginTop: 0 }}>{addon.add_on_type}</h4>
                  <p style={{ margin: "0 0 10px" }}>{addon.description}</p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
                  >
                    <div>
                      <strong>Price:</strong> ${Number(addon.price || 0).toFixed(2)}
                    </div>
                    <div>
                      <strong>Quantity:</strong> {addon.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <span>No add-ons available</span>
          )}
        </ProFormField>

        <ProFormField
          label={"Tags"}
          colProps={{ span: 24, offset: 0 }}
          readonly
        >
          {data?.tags && Array.isArray(data.tags) && data.tags.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {data.tags.map((tag: string, index: number) => (
                <div
                  key={`tag-${index}`}
                  style={{
                    background: "#f0f0f0",
                    padding: "4px 12px",
                    borderRadius: "16px",
                    fontSize: "14px",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          ) : (
            <span>No tags</span>
          )}
        </ProFormField>

        <ProFormField
          label={"Refund Policy"}
          colProps={{ span: 24, offset: 0 }}
          readonly
        >
          {data?.refund_policy &&
          Array.isArray(data.refund_policy) &&
          data.refund_policy.length > 0 ? (
            <div>
              {data.refund_policy[0].days === "" &&
              data.refund_policy[0].percent === "" ? (
                <span>No Refund Policy</span>
              ) : (
                <div
                  style={{
                    border: "1px solid #f0f0f0",
                    padding: "15px",
                    borderRadius: "5px",
                  }}
                >
                  <p>
                    <strong>{data.refund_policy[0].days}</strong> days:{" "}
                    <strong>{data.refund_policy[0].percent}%</strong> refund
                  </p>
                </div>
              )}
            </div>
          ) : (
            <span>No Refund Policy</span>
          )}
        </ProFormField>

        {/* <ProFormField label={"Additional Details"} colProps={{ span: 24, offset: 0 }} readonly>
					{data?.additional_detail ? (
						<div
							className="additional-details"
							dangerouslySetInnerHTML={{ __html: data.additional_detail }}
							style={{
								border: "1px solid #f0f0f0",
								padding: "15px",
								borderRadius: "5px",
							}}
						/>
					) : (
						<span>No additional details</span>
					)}
				</ProFormField>

				<ProFormField label={"Setup Details"} colProps={{ span: 24, offset: 0 }} readonly>
					{data?.set_up_detail ? (
						<div
							className="setup-details"
							dangerouslySetInnerHTML={{ __html: data.set_up_detail }}
							style={{
								border: "1px solid #f0f0f0",
								padding: "15px",
								borderRadius: "5px",
							}}
						/>
					) : (
						<span>No setup details</span>
					)}
				</ProFormField> */}
      </ProForm.Group>
    </BaseModel>
  );
}
