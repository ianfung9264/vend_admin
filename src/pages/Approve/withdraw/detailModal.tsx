import BaseModel from "@/components/Base/BaseModel";
import { _getOrgById } from "@/services/org/info";
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
import { Button, Divider, Image, message, Popconfirm, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { Line } from "@ant-design/charts";
import { useModel } from "@umijs/max";
import {
  _passOrgAdvanceApprove,
  _rejectOrgAdvanceApprove,
} from "@/services/org/advanced";
import {
  WithdrawalProgress,
  WithdrawalProgressNoRejected,
} from "@/services/commonType";
import {
  _rejectWithdrawal,
  _updateWithdrawalProgress,
} from "@/services/withdrawal/info";

export default function DetailModal({
  initData,
  mainTableReload,
}: {
  mainTableReload: (() => Promise<void>) | undefined;

  initData?: any;
}) {
  /**********************************狀態管理**********************************/
  const formRef = useRef<ProFormInstance>();

  const leftFile = { span: 8, offset: 0 };
  const rightFile = { span: 8, offset: 6 };
  const [statusSelection, setStatusSelection] = useState<any[]>([]);
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
    <BaseModel
      modalFormProps={{
        submitter: {
          searchConfig: {
            resetText: "Reject",
            submitText: "Confirm",
          },
          resetButtonProps: {
            preventDefault: false,
          },

          render: (_, dom) => {
            const restButton = dom[0];

            const newRestButton = (
              <>
                <BaseModel
                  allowUpdate={false}
                  readOnly={false}
                  title="Confirmation reject"
                  modalFormProps={{
                    onFinish: async (values) => {
                      // console.log("values", values);
                      try {
                        await _rejectWithdrawal({
                          withdrawalId: initData._id,
                          reason: values.reason,
                        });
                        message.success("Reject success");
                      } catch (error) {
                        message.error("Reject failed" + error);
                      } finally {
                        console.log("formRef.current", formRef.current);
                        formRef.current?.submit();
                        await mainTableReload?.();
                        return true;
                      }
                    },
                    width: "650px",
                    submitter: {
                      searchConfig: {
                        submitText: "Yes",
                        resetText: "No",
                      },
                    },
                    trigger: <Button>Reject</Button>,
                  }}
                >
                  <Divider
                    children="Reason"
                    orientation="left"
                    orientationMargin={20}
                  />
                  <ProFormTextArea
                    required={true}
                    rules={[
                      {
                        required: true,
                        message: "Please enter the reason for rejection",
                      },
                    ]}
                    fieldProps={{
                      placeholder: "Please enter the reason for rejection",
                    }}
                    name="reason"
                    colProps={{ span: 18 }}
                  />
                </BaseModel>
              </>
            );
            return [newRestButton, dom[1]];
          },
        },
        formRef: { ...formRef },
        clearOnDestroy: true,
        onInit(values, form) {
          formRef.current = form;
          switch (initData.progress) {
            case WithdrawalProgress.WAITING_FOR_APPROVE:
              setStatusSelection([
                {
                  label: "Progressing",
                  value: WithdrawalProgress.APPROVED_PROGRESSING,
                },
              ]);
              break;
            case WithdrawalProgress.APPROVED_PROGRESSING:
              setStatusSelection([
                {
                  label: "Approve",
                  value: WithdrawalProgress.APPROVED_COMPLETED,
                },
              ]);
              break;
            case WithdrawalProgress.APPROVED_COMPLETED:
              setStatusSelection([]);
              break;
            case WithdrawalProgress.REJECTED:
              setStatusSelection([]);
              break;
          }
        },
        onFinish: async (values) => {
          console.log("values", values);
          if (!values.progress) {
            return true;
          }
          if (initData) {
            try {
              await _updateWithdrawalProgress({
                withdrawalId: initData._id,
                progress: values.progress,
              });
              message.success("Update success");
            } catch (error) {
              message.error("Update failed");
            } finally {
              await mainTableReload?.();
              return true;
            }
          }
        },
      }}
      allowUpdate={false}
      readOnly={false}
      // initData={org}

      title="Approve withdrawal"
    >
      <ProForm.Group style={groupStyle}>
        <ProFormSelect
          label="Chose withdrawal status"
          name="progress"
          colProps={leftFile}
          options={statusSelection}
        />
      </ProForm.Group>
    </BaseModel>
  );
}
