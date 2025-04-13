// SendEmailModal.tsx
import React from "react";
import { Modal, Input, Form, Button } from "antd";

const { TextArea } = Input;

interface SendEmailModalProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: { subject: string; content: string }) => void;
  loading?: boolean;
}

const SendEmailModal: React.FC<SendEmailModalProps> = ({
  visible,
  onCancel,
  onSubmit,
  loading = false,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <Modal
      title="Send Newsletter"
      open={visible}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      footer={[
        <Button key="cancel" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleSubmit}
        >
          Send
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" name="send_email_form">
        <Form.Item
          name="subject"
          label="Subject"
          rules={[{ required: true, message: "Please enter email subject" }]}
        >
          <Input placeholder="Enter email subject" />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: "Please enter email content" }]}
        >
          <TextArea
            placeholder="Enter email content"
            rows={8}
            showCount
            maxLength={5000}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SendEmailModal;
