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
import { Divider, Image, message, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { Line } from "@ant-design/charts";
import { _postFaq, _updateFaq } from "@/services/setting/faq";
import { values } from "lodash";

export default function DetailModal({
  initData,
  mainTableReload,
}: {
  mainTableReload: (() => Promise<void>) | undefined;

  initData?: API_Setting.UpdateFaq;
}) {
  /**********************************狀態管理**********************************/
  // const formRef = useRef<ProFormInstance>();
  const [formRef, setFormRef] = useState<ProFormInstance>();
  useEffect(() => {
    console.log("formRef", formRef);
  }, [initData]);
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
    <BaseModel<API_Setting.UpdateFaq>
      submit={formRef?.submit}
      allowUpdate={true}
      title="Faq Details"
      modalFormProps={{
        initialValues: { initData },
        style: { minHeight: "20vh" },
        clearOnDestroy: true,
        onInit: async (values, form) => {
          console.log("form", form);
          setFormRef(form);
          form.setFieldsValue(initData);
        },

        onFinish: async (value) => {
          console.log("value", value);
          if (initData) {
            value._id = initData?._id;
            if (value.isDisplay) {
              value.isDisplay = JSON.parse(value.isDisplay as any);
            }
            try {
              await _updateFaq(value);
              message.success("Create faq success");
            } catch (error) {
              message.error("Create faq failed");
            } finally {
              mainTableReload?.();
              return true;
            }
          }
        },
      }}
    >
      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormTextArea
          label={"Question"}
          name="question"
          colProps={{ span: 8, offset: 0 }}
        />

        <ProFormSelect
          label="IsDisplay"
          name={"isDisplay"}
          fieldProps={{
            defaultValue: initData?.isDisplay,
          }}
          options={[
            {
              label: "Show",
              value: "true",
            },
            {
              label: "Hidden",
              value: "false",
            },
          ]}
          colProps={{ span: 8, offset: 6 }}
        />
        <ProFormTextArea
          label={"Answer"}
          name="answer"
          colProps={{ span: 8, offset: 0 }}
        />
      </ProForm.Group>
    </BaseModel>
  );
}
