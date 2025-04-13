import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType } from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import { OrgTableColumns } from "./columns";
import Helper from "@/util/searchHelper";
import { message, Button } from "antd";
import { LandownerAdvancedStatus } from "@/services/commonType";
import * as XLSX from "xlsx";
import { DownloadOutlined } from "@ant-design/icons";

export default function Index() {
  /**********************************狀態管理**********************************/

  const actionRef = useRef<ActionType>();
  const [searchKey, setSearchKey] = useState("");
  const [reload, setReload] = useState(() => actionRef.current?.reload);
  const [allOrgData, setAllOrgData] = useState<any[]>([]);
  useEffect(() => {
    setReload(() => actionRef.current?.reload);
  }, []);

  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/

  // Function to export organizer data to Excel
  const exportToExcel = async () => {
    try {
      // Fetch the data directly to ensure we have the latest
      const response = await _getAllOrg();
      const data = response.data.filter(
        (item: any) => item.advanced_status != LandownerAdvancedStatus.WAITING
      );

      // Format the data to include only the required fields
      const exportData = data.map((org: any) => ({
        "Legal Name":
          `${org.legal_person_first_name || ""} ${org.legal_person_last_name || ""}`.trim(),
        "Business Legal Name": org.business_full_name || "",
        Email: org.email || "",
        "Zip Code": org.business_address?.zip || "",
        "Bank Routing Number": org.bank_routing_number || "",
        "Bank Account Number": org.bank_account_number || "",
        taxpayer_identification_number: org.taxpayer_identification_number,
        social_security_number: org.social_security_number,
      }));

      // Create workbook and worksheet
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Organizers");

      // Generate Excel file and trigger download
      XLSX.writeFile(workbook, "organizers_export.xlsx");

      message.success("Export successful");
    } catch (error) {
      console.error("Export error:", error);
      message.error("Failed to export data");
    }
  };

  /**********************************異步函數**********************************/
  return (
    <div>
      <BaseIndex title="Organization account page">
        <div>
          <div className="flex mb-8 justify-end">
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={exportToExcel}
            >
              Export to Excel
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
            headerTitle: "Account List",
            actionRef: actionRef,

            columns: OrgTableColumns({
              mainTableReload: reload,
            }),
            request: async () => {
              const dataSource = await _getAllOrg().then(
                ({ data }: { data: Page_org.mainTable[] }) => {
                  data = data.filter(
                    (item: any) =>
                      item.advanced_status != LandownerAdvancedStatus.WAITING
                  );
                  console.log("getAllOrg:", data);
                  setAllOrgData(data);
                  return {
                    success: true,
                    data: data,
                  };
                }
              );
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
