import { _getAllFee, _updateFees } from "@/services/setting/fee";
import { QuestionCircleOutlined, QuestionOutlined } from "@ant-design/icons";
import {
  ProCard,
  ProDescriptions,
  ProForm,
  ProFormDigit,
  ProFormText,
} from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import {
  Button,
  Col,
  Divider,
  FormInstance,
  message,
  Row,
  Tooltip,
} from "antd";
import useMessage from "antd/es/message/useMessage";
import React, { useRef, useState, useEffect } from "react";

export default function Index() {
  const formRef = useRef<FormInstance>();
  const [readOnly, setReadOnly] = useState(true);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const {
    data,
    refresh,
    loading: initialLoading,
    error: fetchError,
  } = useRequest(_getAllFee, {
    onSuccess: (res: any) => {
      if (res) {
        formRef.current?.setFieldsValue({
          stripe: res.stripe,
          vendpopups: res.vendpopups,
        });
      }
    },
  });

  useEffect(() => {
    if (data && formRef.current) {
      formRef.current.setFieldsValue({
        stripe: data.stripe,
        vendpopups: data.vendpopups,
      });
    }
  }, [data, formRef]);

  if (initialLoading) {
    return (
      <ProCard
        title="Fee Setting"
        className="min-h-[90vh]"
        loading={true}
      ></ProCard>
    );
  }

  if (fetchError) {
    messageApi.error("Failed to load fee settings. Please try refreshing.");
    return (
      <ProCard title="Fee Setting" className="min-h-[90vh]">
        Error loading data.
      </ProCard>
    );
  }

  const handleFormFinish = async (values: any) => {
    setLoading(true);
    messageApi.loading("Updating...");

    const payload = {
      stripe: {
        percentage: values.stripe?.percentage,
        fixed_dollar: values.stripe?.fixed_dollar,
        billing_percentage: values.stripe?.billing_percentage,
      },
      vendpopups: {
        percentage: values.vendpopups?.percentage,
        fixed_amount: values.vendpopups?.fixed_amount,
      },
    };

    try {
      await _updateFees(payload);
      messageApi.destroy();
      messageApi.success("Fees updated successfully!");
      setReadOnly(true);
      refresh();
    } catch (error) {
      messageApi.destroy();
      messageApi.error("Failed to update fees.");
    } finally {
      setLoading(false);
    }
  };

  const globalButtons = (
    <div className="flex gap-2">
      {!readOnly && (
        <Button
          type="primary"
          onClick={() => formRef.current?.submit()}
          loading={loading}
        >
          Save
        </Button>
      )}
      <Button
        type="primary"
        disabled={loading && !readOnly}
        onClick={() => {
          if (!readOnly) {
            formRef.current?.resetFields();
            if (data && formRef.current) {
              formRef.current.setFieldsValue({
                stripe: data.stripe,
                vendpopups: data.vendpopups,
              });
            }
          }
          setReadOnly(!readOnly);
        }}
      >
        {readOnly ? "Edit" : "Cancel"}
      </Button>
    </div>
  );

  return (
    <ProCard title="Fee Setting" className="min-h-[90vh]" extra={globalButtons}>
      {contextHolder}
      <ProForm
        formRef={formRef}
        disabled={readOnly}
        submitter={false}
        layout="vertical"
        onFinish={handleFormFinish}
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <ProCard title="Stripe Fee" bordered headerBordered>
              <ProFormDigit
                name={["stripe", "percentage"]}
                label="Fee Percentage (%)"
                min={0}
                max={100}
                fieldProps={{ precision: 2 }}
                rules={[
                  {
                    required: true,
                    message: "Please input Stripe fee percentage!",
                  },
                ]}
              />
              <ProFormDigit
                name={["stripe", "fixed_dollar"]}
                label="Fee Fixed Dollar ($)"
                min={0}
                fieldProps={{ precision: 2 }}
                rules={[
                  {
                    required: true,
                    message: "Please input Stripe fixed dollar amount!",
                  },
                ]}
              />
              <ProFormDigit
                name={["stripe", "billing_percentage"]}
                label="Billing Percentage (%)"
                min={0}
                max={100}
                fieldProps={{ precision: 2 }}
                rules={[
                  {
                    required: true,
                    message: "Please input Stripe billing percentage!",
                  },
                ]}
              />
            </ProCard>
          </Col>

          <Col xs={24} md={12}>
            <ProCard title="Vend Popups Fee" bordered headerBordered>
              <ProFormDigit
                name={["vendpopups", "percentage"]}
                label="Fee Percentage (%)"
                min={0}
                max={100}
                fieldProps={{ precision: 2 }}
                rules={[
                  {
                    required: true,
                    message: "Please input VendPopups fee percentage!",
                  },
                ]}
              />
              <ProFormDigit
                name={["vendpopups", "fixed_amount"]}
                label="Fixed Amount ($)"
                min={0}
                fieldProps={{ precision: 2 }}
                rules={[
                  {
                    required: true,
                    message: "Please input VendPopups fixed amount!",
                  },
                ]}
              />
            </ProCard>
          </Col>
        </Row>
      </ProForm>
    </ProCard>
  );
}
