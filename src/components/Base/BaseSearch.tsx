import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, InputProps } from "antd";

export default function BaseSearch({
  title,
  inputProps,
  submitFun,
}: {
  title: string;
  inputProps?: InputProps;
  submitFun: (() => Promise<void>) | undefined;
}) {
  /**********************************狀態管理**********************************/
  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  /**********************************異步函數**********************************/
  return (
    <div className="w-auto h-[130px] bg-white p-[24px] rounded-[4px] flex gap-[24px] flex-col">
      <div>{title}</div>
      <div className="flex gap-[16px]">
        <Input
          prefix={<SearchOutlined className="mr-[24px]" />}
          placeholder="search..."
          onPressEnter={() => {
            if (submitFun) submitFun();
          }}
          {...inputProps}
        />
        <Button
          type="primary"
          onClick={() => {
            if (submitFun) submitFun();
          }}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: 400,
            padding: 16,
          }}
        >
          start
        </Button>
      </div>
    </div>
  );
}
