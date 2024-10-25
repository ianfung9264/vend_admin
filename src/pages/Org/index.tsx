import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType } from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import { OrgTableColumns } from "./columns";
import Helper from "@/util/searchHelper";
import { message } from "antd";
import { LandownerAdvancedStatus } from "@/services/commonType";
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

  /**********************************異步函數**********************************/
  return (
    <div>
      <BaseIndex title="Org account page">
        <BaseSearch
          title="Search bar"
          submitFun={actionRef.current?.reload}
          inputProps={{
            value: searchKey,
            onChange: ({ currentTarget: { value } }) => setSearchKey(value),
          }}
        />
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
