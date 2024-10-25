import { _getAllFee, _updateVendPopupsFee } from "@/services/setting/fee";
import { QuestionCircleOutlined, QuestionOutlined } from "@ant-design/icons";
import {
  ProCard,
  ProDescriptions,
  ProForm,
  ProFormText,
} from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import { Button, Divider, FormInstance, message, Tooltip } from "antd";
import useMessage from "antd/es/message/useMessage";
import React, { useRef, useState } from "react";
export default function Index() {
  /**********************************狀態管理**********************************/
  const [stripeFee, setStripeFee] = useState<{
    percentage: number;
    fixed_dollar: number;
    billing_percentage: number;
  }>();
  const formRef = useRef<FormInstance>();
  const [readOnly, setReadOnly] = useState(true);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { data, refresh } = useRequest(_getAllFee, {
    onSuccess: (res) => {
      setStripeFee(res.stripe);
      formRef.current?.setFieldsValue(res.vendpopups);
    },
  });
  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  /**********************************異步函數**********************************/
  return (
    <ProCard title="Fee setting" className="min-h-[90vh]">
      {contextHolder}
      <ProCard
        title={
          <>
            Stripe Fee
            <Tooltip title="Stripe Fee can not be changed">
              <QuestionCircleOutlined className="ml-2 opacity-50" />
            </Tooltip>
          </>
        }
        colSpan="50%"
      >
        <ProDescriptions dataSource={stripeFee} column={1} layout="horizontal">
          <ProDescriptions.Item label="Fee Percentage">
            {stripeFee?.percentage}
          </ProDescriptions.Item>
          <ProDescriptions.Item label="Fee Fixed dollar">
            {stripeFee?.fixed_dollar}
          </ProDescriptions.Item>
          <ProDescriptions.Item label="Billing Percentage">
            {stripeFee?.billing_percentage}
          </ProDescriptions.Item>
        </ProDescriptions>
      </ProCard>

      <Divider type="vertical" className="min-h-[90vh]" />
      <ProCard
        title="Vend Popups Fee"
        extra={
          <div className="flex gap-2">
            {!readOnly && (
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                onClick={() => {
                  setLoading(true);
                  messageApi.loading("Updating...");
                  formRef.current?.submit();
                }}
              >
                Save
              </Button>
            )}
            <Button
              type="primary"
              disabled={loading}
              onClick={() => setReadOnly(!readOnly)}
            >
              {readOnly ? "Edit" : "Cancel"}
            </Button>
          </div>
        }
      >
        <ProForm
          formRef={formRef}
          disabled={readOnly}
          readonly={readOnly}
          submitter={false}
          layout="horizontal"
          grid={true}
          onFinish={async (values) => {
            await _updateVendPopupsFee({
              percentage: values.percentage,
            })
              .then(() => {
                messageApi.destroy();
                messageApi.success("Success");
                setLoading(false);
                setReadOnly(true);
                refresh();
              })
              .catch(() => {
                setLoading(false);
                messageApi.destroy();
                messageApi.error("Failed");
                setReadOnly(true);
                refresh();
              });
          }}
        >
          <ProFormText
            colProps={{ span: 8 }}
            name="percentage"
            label="Fee Percentage"
          />
        </ProForm>
      </ProCard>
    </ProCard>
  );
}
