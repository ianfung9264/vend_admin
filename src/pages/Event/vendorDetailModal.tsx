import React, { useEffect, useRef, useState } from "react";
import BaseModel from "@/components/Base/BaseModel";
import { _editOrgInfo, _getOrgById } from "@/services/org/info";
import {
  _getEventByIdWithApplications,
  _refundVendorFromOrgWallet,
} from "@/services/event/info";
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
  ProColumns,
} from "@ant-design/pro-components";
import {
  Divider,
  Image,
  message,
  Progress,
  Button,
  Modal,
  Input,
  InputNumber,
  Tag,
} from "antd";
import { Line } from "@ant-design/charts";
import { truncate } from "lodash";
import dayjs from "dayjs";

// Helper function for status tags
const getPaymentStatusTag = (
  status: string | undefined | null
): React.ReactNode => {
  switch (status?.toUpperCase()) {
    case "PAID":
      return <Tag color="green">Accepted & Paid</Tag>;
    case "REFUNDED":
      return <Tag color="purple">Refunded</Tag>;
    case "DENIED":
      return <Tag color="red">Rejected Application</Tag>;
    case "WAITING":
      return <Tag color="orange">Pending Decision</Tag>;
    case "ACCEPT":
      return <Tag color="blue">Accepted & Unpaid</Tag>;
    case "CANCELLED":
      return <Tag color="default">Cancelled</Tag>;
    default:
      return <Tag>{status || "N/A"}</Tag>;
  }
};

export default function VendorDetailModal({
  initData,
  mainTableReload,
}: {
  mainTableReload: (() => Promise<void>) | undefined;

  initData?: Page_org.mainTable;
}) {
  /**********************************狀態管理**********************************/
  const formRef = useRef<ProFormInstance>();
  const [data, setData] = useState<Record<string, any>>();
  const [isRefundModalVisible, setIsRefundModalVisible] = useState(false);
  const [refundAmount, setRefundAmount] = useState<number>(0);
  const [currentParticipant, setCurrentParticipant] = useState<any>(null);
  const [isRefunding, setIsRefunding] = useState(false);

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

  const handleRefund = async () => {
    if (!currentParticipant || !refundAmount) {
      message.error("Please enter a valid refund amount");
      return;
    }

    setIsRefunding(true);
    try {
      await _refundVendorFromOrgWallet(
        data?.creator?._id,
        currentParticipant.application_id,
        refundAmount
      );
      message.success("Refund processed successfully");
      setIsRefundModalVisible(false);
      setRefundAmount(0);
      setCurrentParticipant(null);
      if (mainTableReload) {
        await mainTableReload();
      }
    } catch (error) {
      message.error("Failed to process refund");
      console.error("Refund error:", error);
    } finally {
      setIsRefunding(false);
    }
  };

  const expandedVendorRowRender = (participant: any) => {
    const {
      ticket_type_applied,
      add_ons_applied,
      application_id,
      stall_payment_status,
      firstname,
      lastname,
      phone_pre,
      phone,
    } = participant;

    const appliedSchedule =
      participant?.applied_schedule || participant?.schedule || [];

    const formattedPhone = `${phone_pre || ""} ${phone || ""}`.trim() || "N/A";

    return (
      <div style={{ padding: "16px", backgroundColor: "#f9f9f9" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <div>
            <p>
              <strong>Contact Name:</strong> {firstname || ""} {lastname || ""}
            </p>
            <p>
              <strong>Phone:</strong> {formattedPhone}
            </p>
            <p>
              <strong>Application ID:</strong> {application_id || "N/A"}
            </p>
            {stall_payment_status === "Paid" && (
              <Button
                type="primary"
                onClick={() => {
                  setCurrentParticipant(participant);
                  setIsRefundModalVisible(true);
                }}
                style={{ marginTop: "10px" }}
              >
                Process Refund
              </Button>
            )}
          </div>
          <div>
            <h4>Ticket Type Applied:</h4>
            {ticket_type_applied ? (
              <div>
                <p>
                  <strong>Type:</strong>{" "}
                  {ticket_type_applied.ticket_type || "N/A"}
                </p>
                <p>
                  <strong>Amount:</strong> $
                  {(
                    ticket_type_applied.amount -
                    (add_ons_applied && Array.isArray(add_ons_applied)
                      ? add_ons_applied.reduce(
                          (sum: number, addon: any) =>
                            sum +
                            (Number(addon.amount) * Number(addon.quantity) ||
                              0),
                          0
                        )
                      : 0)
                  ).toFixed(2)}
                </p>
              </div>
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>

        <h4 style={{ marginTop: "16px" }}>Add-ons:</h4>
        {add_ons_applied &&
        Array.isArray(add_ons_applied) &&
        add_ons_applied.length > 0 ? (
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {add_ons_applied.map((addon: any, idx: number) => (
              <li key={idx} style={{ marginBottom: "5px" }}>
                {addon.add_on_type || "N/A"}: ${Number(addon.amount).toFixed(2)}{" "}
                (Qty: {addon.quantity || 0})
              </li>
            ))}
          </ul>
        ) : (
          <p>No add-ons</p>
        )}

        <h4 style={{ marginTop: "16px" }}>Application Questions:</h4>
        {ticket_type_applied?.questions &&
        Array.isArray(ticket_type_applied.questions) &&
        ticket_type_applied.questions.length > 0 ? (
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              marginTop: "8px",
            }}
          >
            {ticket_type_applied.questions.map((qna: any, idx: number) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
                <p style={{ marginBottom: "2px" }}>
                  <strong>Q:</strong> {qna.questions || "N/A"}
                </p>
                <p style={{ marginBottom: "2px" }}>
                  <strong>A:</strong> {qna.answer || "N/A"}
                </p>
                {qna.file && (
                  <p style={{ marginBottom: "2px" }}>
                    <strong>File:</strong>{" "}
                    <a
                      href={qna.file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {qna.file.filename || "View File"}
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No additional questions.</p>
        )}

        <h4 style={{ marginTop: "16px" }}>Applied Schedule:</h4>
        {appliedSchedule &&
        Array.isArray(appliedSchedule) &&
        appliedSchedule.length > 0 ? (
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {appliedSchedule.map((slot: any, idx: number) => (
              <li key={idx}>
                {slot.start_time
                  ? dayjs(slot.start_time).format("MM/DD/YYYY HH:mm")
                  : "N/A"}{" "}
                -
                {slot.end_time
                  ? dayjs(slot.end_time).format("MM/DD/YYYY HH:mm")
                  : "N/A"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No specific schedule applied</p>
        )}
      </div>
    );
  };

  const vendorColumns: ProColumns<any>[] = [
    {
      title: "Vendor Name",
      dataIndex: "business_name",
      key: "business_name",
      render: (text) => text || "N/A",
      width: 150,
      ellipsis: true,
      sorter: (a, b) =>
        (a.business_name || "").localeCompare(b.business_name || ""),
    },
    {
      title: "Application Date",
      dataIndex: "application_createdAt",
      key: "application_createdAt",
      render: (text: any, record: any) => {
        // console.log(`App Date for ${record.business_name}:`, text, typeof text); // Uncomment for debugging
        if (text && typeof text === "string") {
          const date = new Date(text);
          if (!isNaN(date.getTime())) {
            return date.toLocaleDateString();
          }
        }
        return "N/A";
      },
      sorter: (a: any, b: any) =>
        new Date(a.application_createdAt || 0).getTime() -
        new Date(b.application_createdAt || 0).getTime(),
      width: 150,
      // valueType: 'date', // Temporarily commented out
    },
    {
      title: "Payment Status",
      dataIndex: "stall_payment_status",
      key: "stall_payment_status",
      render: (dom: React.ReactNode, entity: any) =>
        getPaymentStatusTag(entity.stall_payment_status as string | undefined),
      width: 150,
      align: "center",
      sorter: (a, b) =>
        (a.stall_payment_status || "").localeCompare(
          b.stall_payment_status || ""
        ),
      filters: [
        { text: "Paid", value: "Paid" },
        { text: "Refunded", value: "Refunded" },
        { text: "Denied", value: "Denied" },
        { text: "Cancelled", value: "Cancelled" },
      ],
      onFilter: (value, record) => record.stall_payment_status === value,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => text || "N/A",
      width: 250,
      ellipsis: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text, record) =>
        `${record.phone_pre || ""} ${text || ""}`.trim() || "N/A",
      width: 180,
    },
  ];

  return (
    <BaseModel<Page_org.mainTable>
      modalFormProps={{
        formRef: formRef,
        clearOnDestroy: true,
        onInit: async (values, form) => {
          try {
            if (initData?._id) {
              const res = await _getEventByIdWithApplications(initData._id);
              if (res?.data) {
                setData(res.data);
                form.setFieldsValue(res.data);
                return;
              }
            }
          } catch (e) {
            console.error("Failed to load event applications:", e);
          }
          // Fallback to whatever we have
          setData(initData);
          form.setFieldsValue(initData);
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
      allowUpdate={false}
      submit={formRef?.current?.submit}
      initData={data}
      title="Participating Vendor Information"
    >
      <ProTable
        columns={vendorColumns}
        dataSource={data?.participants || []}
        rowKey="application_id"
        pagination={false}
        search={false}
        toolBarRender={false}
        expandable={{
          expandedRowRender: expandedVendorRowRender,
          rowExpandable: (record) => true,
          expandRowByClick: true,
        }}
        tableLayout="fixed"
      />

      <Modal
        title="Process Refund"
        open={isRefundModalVisible}
        onOk={handleRefund}
        onCancel={() => {
          setIsRefundModalVisible(false);
          setRefundAmount(0);
        }}
        okText="Confirm"
        cancelText="Cancel"
        confirmLoading={isRefunding}
      >
        <div style={{ marginBottom: 16 }}>
          <p>
            Max refund amount (Ticket + Add-ons): $
            {(currentParticipant?.ticket_type_applied?.amount || 0).toFixed(2)}
          </p>
          <p>Please enter the refund amount:</p>
          <InputNumber
            style={{ width: "100%" }}
            min={0.01}
            max={currentParticipant?.ticket_type_applied?.amount || 0}
            precision={2}
            value={refundAmount}
            onChange={(value) => setRefundAmount(value || 0)}
            placeholder="Enter refund amount"
          />
        </div>
      </Modal>
    </BaseModel>
  );
}
