import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType } from "@ant-design/pro-components";
import React, { useEffect, useRef, useState } from "react";
import { NewsletterTableColumns } from "./column";
import Helper from "@/util/searchHelper";
import { Button, Space, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { LandownerAdvancedStatus } from "@/services/commonType";
import { _getAllNewsletter } from "@/services/tenant/info";
import {
  _sendEmail,
  _sendVendorMassEmail,
  _sendOrganizerMassEmail,
} from "@/services/event/info";
import SendEmailModal from "./SendEmailModal";

export default function Index() {
  /**********************************狀態管理**********************************/
  const actionRef = useRef<ActionType>();
  const [searchKey, setSearchKey] = useState("");
  const [reload, setReload] = useState(() => actionRef.current?.reload);
  const [modalVisible, setModalVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [currentEmailType, setCurrentEmailType] = useState<
    "newsletter" | "vendor" | "organizer"
  >("newsletter");

  useEffect(() => {
    setReload(() => actionRef.current?.reload);
  }, []);

  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  const openSendEmailModal = (
    emailType: "newsletter" | "vendor" | "organizer"
  ) => {
    setCurrentEmailType(emailType);
    setModalVisible(true);
  };

  const handleMassEmailSubmit = async (values: {
    subject: string;
    content: string;
  }) => {
    try {
      setSending(true);
      let result;
      let successMessage = "";

      if (currentEmailType === "newsletter") {
        result = await _sendEmail(values);
        successMessage =
          "Email sent successfully to all newsletter subscribers!";
      } else if (currentEmailType === "vendor") {
        result = await _sendVendorMassEmail(values);
        successMessage = "Email sent successfully to all vendors!";
      } else if (currentEmailType === "organizer") {
        result = await _sendOrganizerMassEmail(values);
        successMessage = "Email sent successfully to all organizers!";
      }

      console.log(`${currentEmailType} email sent result:`, result);
      message.success(successMessage);
    } catch (error) {
      console.error(`Failed to send ${currentEmailType} email:`, error);
      message.error(
        `Failed to send ${currentEmailType} email. Please try again.`
      );
    } finally {
      setModalVisible(false);
      setSending(false);
      if (actionRef.current) {
        actionRef.current.reload();
      }
    }
  };
  /**********************************異步函數**********************************/
  return (
    <div>
      <BaseIndex title="Tenant account page">
        <BaseSearch
          title="Search bar"
          submitFun={actionRef.current?.reload}
          inputProps={{
            value: searchKey,
            onChange: ({ currentTarget: { value } }) => setSearchKey(value),
          }}
        />
        <BaseTable<Page_tenant.mainTable>
          searchKey={searchKey}
          props={{
            headerTitle: (
              <Space>
                <Button
                  type="primary"
                  icon={<MailOutlined />}
                  onClick={() => openSendEmailModal("newsletter")}
                >
                  Send Newsletter Email
                </Button>
                <Button
                  type="primary"
                  icon={<MailOutlined />}
                  onClick={() => openSendEmailModal("vendor")}
                  // style={{ backgroundColor: 'green', borderColor: 'green' }} // Optional: different color
                >
                  Send Vendor Emails
                </Button>
                <Button
                  type="primary"
                  icon={<MailOutlined />}
                  onClick={() => openSendEmailModal("organizer")}
                  // style={{ backgroundColor: 'orange', borderColor: 'orange' }} // Optional: different color
                >
                  Send Organizer Emails
                </Button>
              </Space>
            ),
            actionRef: actionRef,
            columns: NewsletterTableColumns({
              mainTableReload: reload,
            }),
            request: async () => {
              const dataSource = await _getAllNewsletter().then(
                ({ data }: { data: Page_tenant.mainTable[] }) => {
                  console.log("data", data);
                  return {
                    success: true,
                    data: data,
                  };
                }
              );
              if (searchKey) {
                dataSource.data = Helper<Page_tenant.mainTable>({
                  dataSource: dataSource.data,
                  keyWord: searchKey,
                }) as Page_tenant.mainTable[];

                return dataSource;
              } else {
                return dataSource;
              }
            },
          }}
        />
      </BaseIndex>

      <SendEmailModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSubmit={handleMassEmailSubmit}
        loading={sending}
      />
    </div>
  );
}
