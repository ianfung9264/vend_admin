import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType } from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import { WithdrawalTableColumns } from "./columns";
import Helper from "@/util/searchHelper";
import { message, Button } from "antd";
import { LandownerAdvancedStatus } from "@/services/commonType";
import { _getAllWaitingAdvancedOrg } from "@/services/org/advanced";
import { _getAlWithdrawal } from "@/services/withdrawal/info";
import * as XLSX from "xlsx";
import { DownloadOutlined } from "@ant-design/icons";

export default function Index() {
  /**********************************狀態管理**********************************/

  const actionRef = useRef<ActionType>();
  const [searchKey, setSearchKey] = useState("");
  const [reload, setReload] = useState(() => actionRef.current?.reload);
  const [allWithdrawalData, setAllWithdrawalData] = useState<any[]>([]);
  useEffect(() => {
    setReload(() => actionRef.current?.reload);
  }, []);

  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/

  // Function to export withdrawal data to Excel
  const exportToExcel = async () => {
    try {
      // Fetch the data directly to ensure we have the latest
      const response = await _getAlWithdrawal();

      // Filter for APPROVED_PROGRESSING items only
      const data = response.filter(
        (item: any) => item.progress === "APPROVED_PROGRESSING"
      );

      // Format the data to include only the required fields
      const exportData = data.map((withdrawal: any) => {
        const org = withdrawal.landowner;
        return {
          "Legal Name":
            `${org.legal_person_first_name || ""} ${org.legal_person_last_name || ""}`.trim(),
          "Business Legal Name": org.business_full_name || "",
          Email: org.email || "",
          "Zip Code": org.business_address?.zip || "",
          "Bank Routing Number": org.bank_routing_number || "",
          "Bank Account Number": org.bank_account_number || "",
          Amount: withdrawal.amount || "",
          taxpayer_identification_number: org.taxpayer_identification_number,
          social_security_number: org.social_security_number,
        };
      });

      // Create workbook and worksheet
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Pending Withdrawals");

      // Generate Excel file and trigger download
      XLSX.writeFile(workbook, "pending_withdrawals.xlsx");

      message.success("Export successful");
    } catch (error) {
      console.error("Export error:", error);
      message.error("Failed to export data");
    }
  };

  /**********************************異步函數**********************************/
  return (
    <div>
      <BaseIndex title="Org withdrawal approval page">
        <div>
          <div className="flex mb-8 justify-end">
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={exportToExcel}
            >
              Export Pending Withdrawals
            </Button>
          </div>
          <BaseSearch
            title="Search bar"
            submitFun={actionRef.current?.reload}
            inputProps={{
              value: searchKey,
              onChange: ({ currentTarget: { value } }) => setSearchKey(value),
            }}
          />
        </div>

        <BaseTable<Page_org.mainTable>
          searchKey={searchKey}
          props={{
            // tooltip: (
            //   <>
            //     - When this application is Waiting, you can only change to
            //     Progressing or Rejected.
            //     <br />
            //     - When this application is Progressing, you can only change to
            //     Approved or Rejected.
            //     <br />- When this application is Approved or Rejected, you can't
            //     change anything.
            //   </>
            // ),
            headerTitle: "Withdrawal approval List",
            actionRef: actionRef,

            columns: WithdrawalTableColumns({
              mainTableReload: reload,
            }),
            request: async () => {
              const dataSource = await _getAlWithdrawal().then((data) => {
                console.log("withdrawal data: ", data);
                setAllWithdrawalData(data);
                return {
                  success: true,
                  data: data,
                };
              });
              if (searchKey) {
                dataSource.data = Helper<Page_org.mainTable>({
                  dataSource: dataSource.data,
                  keyWord: searchKey,
                }) as Page_org.mainTable[];

                return dataSource;
              } else {
                return dataSource;
              }
            },
          }}
        />
      </BaseIndex>
    </div>
  );
}
