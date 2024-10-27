import BaseIndex from "@/components/Base/BaseIndex";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllOrg } from "@/services/org/info";
import { ActionType, ProFormText } from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import React, { useEffect, useRef, useState } from "react";
import Helper from "@/util/searchHelper";
import { Button, message } from "antd";
import { LandownerAdvancedStatus } from "@/services/commonType";
import { _getAllWaitingAdvancedOrg } from "@/services/org/advanced";
import { _getAlWithdrawal } from "@/services/withdrawal/info";
import { QuestionTableColumns } from "./columns";
import { _getAllFaq, _postFaq } from "@/services/setting/faq";
import BaseModel from "@/components/Base/BaseModel";
import { PlusSquareOutlined } from "@ant-design/icons";
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
      <BaseIndex title="FAQ page">
        <BaseSearch
          title="Search bar"
          submitFun={actionRef.current?.reload}
          inputProps={{
            value: searchKey,
            onChange: ({ currentTarget: { value } }) => setSearchKey(value),
          }}
        />
        <BaseTable<any>
          searchKey={searchKey}
          props={{
            headerTitle: "Withdrawal approval List",
            actionRef: actionRef,
            optionsRender(props, defaultDom) {
              const createFaq = (
                <BaseModel<API_Setting.CreateFaq>
                  allowUpdate={false}
                  readOnly={false}
                  modalFormProps={{
                    onFinish: async (value) => {
                      try {
                        await _postFaq(value);
                        message.success("Create faq success");
                      } catch (error) {
                        message.error("Create faq failed");
                      } finally {
                        actionRef.current?.reload();
                        return true;
                      }
                    },
                    grid: true,
                    trigger: (
                      <Button icon={<PlusSquareOutlined />} type="text" />
                    ),
                    submitter: {
                      searchConfig: {
                        resetText: "reset",
                        submitText: "confirm",
                      },
                    },
                  }}
                  title="New faq"
                >
                  <ProFormText
                    colProps={{ span: 18 }}
                    label="Question"
                    name="question"
                  />
                  <ProFormText
                    colProps={{ span: 18 }}
                    label="Answer"
                    name="answer"
                  />
                </BaseModel>
              );
              return [createFaq, ...defaultDom];
            },
            columns: QuestionTableColumns({
              mainTableReload: reload,
            }),
            request: async () => {
              const dataSource = await _getAllFaq().then(({ data }) => {
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
