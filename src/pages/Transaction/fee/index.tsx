import BaseIndex from "@/components/Base/BaseIndex";
import BaseModel from "@/components/Base/BaseModel";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import { _getAllTransactionFee } from "@/services/setting/fee";
import {
  _createCategory,
  _getBannerVideo,
  _getCategory,
  _getPrivacyPolicy,
  _getTermsCondition,
  _postPrivacyPolicy,
  _postTermsCondition,
  _putPrivacyPolicy,
  _putTermsCondition,
  _updateBannerVideo,
  _updateCategory,
} from "@/services/setting/others";
import Helper from "@/util/searchHelper";
import { Liquid, Pie } from "@ant-design/charts";
import { PlusSquareOutlined } from "@ant-design/icons";
import {
  ActionType,
  EditableFormInstance,
  EditableProTable,
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StatisticCard,
} from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import { Button, FormInstance, message, Statistic } from "antd";
import { DataSourceItemType } from "antd/es/auto-complete";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useRef, useState } from "react";
export default function Index() {
  /**********************************狀態管理**********************************/
  const [tab, setTab] = useState("tab1");
  const { refresh: TransactionFeeDataRefresh } = useRequest(
    _getAllTransactionFee,
    {
      onSuccess: (res) => {
        console.log("res", res);
        setCommission(res.commission);
        setApplicationFee(res.application_fee_list);
      },
    }
  );

  const actionRef = useRef<ActionType>();
  const feeActionRef = useRef<ActionType>();

  const [commission, setCommission] = useState<any[]>([]);
  const [applicationFee, setApplicationFee] = useState<any[]>([]);

  const [commissionSearchKey, setCommissionSearchKey] = useState("");

  const [transactionFeeSearchKey, setTransactionFeeSearchKey] = useState("");
  useEffect(() => {
    TransactionFeeDataRefresh();
  }, []);
  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/

  const CommissionElement = () => {
    return (
      <div>
        <BaseSearch
          title="Search bar"
          submitFun={actionRef.current?.reload}
          inputProps={{
            value: commissionSearchKey,
            onChange: ({ currentTarget: { value } }) =>
              setCommissionSearchKey(value),
          }}
        />
        <BaseTable<any>
          searchKey={commissionSearchKey}
          props={{
            headerTitle: "Commission List",
            actionRef: actionRef,
            columns: [
              {
                key: "id",
                title: "Application Session Id",
                dataIndex: "application_fee_session_id",
                width: "10%",
                align: "center",
                ellipsis: true,
                copyable: true,
              },
              {
                key: "event_id",
                title: "Event Id",
                dataIndex: "event_id",
                align: "center",
                copyable: true,
                ellipsis: true,
              },
              {
                title: "Schedule ",
                dataIndex: "schedule",
                align: "center",
                copyable: true,
                ellipsis: true,
                render: (text: any, record: any) => {
                  const mockData = [
                    {
                      start_time: "2024-10-28T00:30:00.000Z",
                      end_time: "2024-10-28T12:55:00.000Z",
                    },
                    {
                      start_time: "2024-10-28T00:30:00.000Z",
                      end_time: "2024-10-28T12:55:00.000Z",
                    },
                  ];
                  // 检查 schedule 是否存在并且是数组
                  if (Array.isArray(record.schedule)) {
                    return record.schedule.map((item: any, Index: number) => {
                      const startTime = new Date(
                        item.start_time
                      ).toLocaleString(); // 格式化开始时间
                      const endTime = new Date(item.end_time).toLocaleString(); // 格式化结束时间
                      return (
                        <>
                          {Index + 1} : {startTime.toString()} -
                          {endTime.toString()}
                          <br></br>
                        </>
                      ); // 返回格式化的字符串
                    });
                  }
                  return ""; // 如果没有 schedule，返回空字符串
                },
              },
              {
                title: "Commission",
                dataIndex: "commission",
                key: "commission",
                align: "center",
                render: (text: any, record: any) => {
                  return record.stall_payment_summary.vendpopups_commission
                    .total_amount;
                },
              },
              {
                title: "Commission percentage",
                dataIndex: "commission",
                key: "commission",
                align: "center",
                valueType: "percent",
                render: (text: any, record: any) => {
                  return (
                    record.stall_payment_summary.vendpopups_commission
                      .percentage + "%"
                  );
                },
              },
              {
                title: "Created At",
                dataIndex: "createdAt",
                align: "center",
                valueType: "dateTime",
              },
            ],
            request: async () => {
              const dataSource = await TransactionFeeDataRefresh().then(
                (res) => {
                  return {
                    success: true,
                    data: res.commission,
                  };
                }
              );
              if (commissionSearchKey) {
                dataSource.data = Helper<Page_org.mainTable>({
                  dataSource: dataSource.data,
                  keyWord: commissionSearchKey,
                }) as Page_org.mainTable[];
                console.log("dataSource", dataSource);
                return dataSource;
              } else {
                return dataSource;
              }
            },
          }}
        />
      </div>
    );
  };
  const TransactionFeeElement = () => {
    return (
      <div>
        <BaseSearch
          title="Search bar"
          submitFun={feeActionRef.current?.reload}
          inputProps={{
            value: transactionFeeSearchKey,
            onChange: ({ currentTarget: { value } }) =>
              setTransactionFeeSearchKey(value),
          }}
        />
        <BaseTable<any>
          searchKey={transactionFeeSearchKey}
          props={{
            headerTitle: "Transaction fee List",
            actionRef: feeActionRef,
            columns: [
              {
                key: "id",
                title: "Application Session Id",
                dataIndex: "application_fee_session_id",
                width: "10%",
                align: "center",
                ellipsis: true,
                copyable: true,
              },
              {
                key: "event_id",
                title: "Event Id",
                dataIndex: "event_id",
                align: "center",
                copyable: true,
                ellipsis: true,
              },
              {
                key: "amount",
                title: "Amount",
                dataIndex: "event_id",
                align: "center",
                copyable: true,
                ellipsis: true,
                render: (text: any, record: any) => {
                  return "$2";
                },
              },
              {
                title: "Created At",
                dataIndex: "createdAt",
                align: "center",
                valueType: "dateTime",
              },
            ],
            request: async () => {
              const dataSource = await TransactionFeeDataRefresh().then(
                (res) => {
                  return {
                    success: true,
                    data: res.application_fee_list,
                  };
                }
              );
              if (transactionFeeSearchKey) {
                dataSource.data = Helper<Page_org.mainTable>({
                  dataSource: dataSource.data,
                  keyWord: transactionFeeSearchKey,
                }) as Page_org.mainTable[];
                return dataSource;
              } else {
                return dataSource;
              }
            },
          }}
        />
      </div>
    );
  };
  const DashboardElement = () => {
    const config = {
      title: {
        visible: true,
        text: "水波图",
      },
      description: {
        visible: true,
        text: "水波图 - 百分比显示",
      },
      min: 0,
      max: 10000,
      value: 5639,
      // statistic: {
      //   formatter: (value) => ((100 * value) / 10000).toFixed(1) + "%",
      // },
    };
    const totalVendpopupsCommission = commission.reduce((total, item) => {
      // 确保 vendpopups_commission 存在并且有 total_amount 属性
      if (
        item.stall_payment_summary &&
        item.stall_payment_summary.vendpopups_commission
      ) {
        return (
          total + item.stall_payment_summary.vendpopups_commission.total_amount
        );
      }
      return total; // 如果没有，返回当前总和
    }, 0);
    const applicationFeeTotalAmount = applicationFee.length * 2;

    const totalAmount = applicationFeeTotalAmount + totalVendpopupsCommission;
    return (
      <ProCard
        title="Dashboard"
        extra={dayjs().format("YYYY-MM-DD HH:mm")}
        split={"horizontal"}
        // headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: "Application total quantity",
                  value: applicationFee.length,
                }}
              />
              <StatisticCard
                statistic={{
                  title: "Commission total quantity",
                  value: commission.length,
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: "Application total amount",
                  value: applicationFeeTotalAmount,
                  suffix: "$",
                }}
              />
              <StatisticCard
                statistic={{
                  title: "Commission total amount",
                  value: totalVendpopupsCommission,
                  suffix: "$",
                }}
              />
            </ProCard>
          </ProCard>
          <ProCard split="vertical">
            <StatisticCard
              title="Application fee percentage"
              chart={
                <Liquid
                  height={400}
                  width={400}
                  label={{
                    visible: true,
                    formatter: (text: any) => {
                      return (
                        Number(
                          (applicationFeeTotalAmount / totalAmount).toFixed(2)
                        ) *
                          100 +
                        "%"
                      );
                    },
                  }}
                  percent={Number(
                    (applicationFeeTotalAmount / totalAmount).toFixed(2)
                  )}
                />
              }
            />
            <StatisticCard
              title="Percentage summary"
              chart={
                <Pie
                  forceFit={true}
                  radius={0.8}
                  angleField="value"
                  colorField="label"
                  label={{
                    visible: true,
                    type: "spider",
                  }}
                  type={"view"}
                  data={[
                    {
                      value:
                        Number(
                          (totalVendpopupsCommission / totalAmount).toFixed(2)
                        ) * 100,
                      label: "Commission",
                    },
                    {
                      value:
                        Number(
                          (applicationFeeTotalAmount / totalAmount).toFixed(2)
                        ) * 100,
                      label: "Application",
                    },
                  ]}
                />
              }
            />
          </ProCard>
        </ProCard>
      </ProCard>
    );
  };
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  /**********************************異步函數**********************************/
  return (
    <BaseIndex title="Commission & fee page">
      <ProCard
        title=""
        headStyle={{ paddingBottom: 24 }}
        style={{ minHeight: "90vh" }}
        tabs={{
          tabPosition: "left",
          activeKey: tab,
          items: [
            {
              label: `Dashboard`,
              key: "dashboard",
              children: DashboardElement(),
            },
            {
              label: `Commission`,
              key: "tab1",

              children: CommissionElement(),
            },
            {
              label: `Application fee`,
              key: "tab2",
              children: TransactionFeeElement(),
            },
          ],
          onChange: (key) => {
            setTab(key);
          },
        }}
      />
    </BaseIndex>
  );
}
//
