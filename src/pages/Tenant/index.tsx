import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType } from "@ant-design/pro-components";
import React, { useEffect, useRef, useState } from "react";
import { TenantTableColumns } from "./columns";
import Helper from "@/util/searchHelper";
import { message } from "antd";
import { LandownerAdvancedStatus } from "@/services/commonType";
import { _getAllTenant } from "@/services/tenant/info";
export default function Index() {
  /**********************************狀態管理**********************************/

  const actionRef = useRef<ActionType>();
  const [searchKey, setSearchKey] = useState("");
  const [reload, setReload] = useState(() => actionRef.current?.reload);
  useEffect(() => {
    setReload(() => actionRef.current?.reload);
  }, []);

  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/

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
            headerTitle: "Account List",
            actionRef: actionRef,

            columns: TenantTableColumns({
              mainTableReload: reload,
            }),
            request: async () => {
              const dataSource = await _getAllTenant().then(
                ({ data }: { data: Page_tenant.mainTable[] }) => {
                  data = data.filter(
                    (item: any) =>
                      item.advanced_status != LandownerAdvancedStatus.WAITING
                  );
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
    </div>
  );
}
