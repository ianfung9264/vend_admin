import BaseIndex from "@/components/Base/BaseIndex";
import BaseModel from "@/components/Base/BaseModel";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import {
  _createCategory,
  _getBannerContext,
  _getCategory,
  _getLoginImage,
  _getPrivacyPolicy,
  _getTermsCondition,
  _postPrivacyPolicy,
  _postTermsCondition,
  _putPrivacyPolicy,
  _putTermsCondition,
  _updateBannerContext,
  _updateCategory,
  _updateLoginImage,
} from "@/services/setting/others";
import Helper from "@/util/searchHelper";
import {
  PlusOutlined,
  PlusSquareOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  ActionType,
  EditableFormInstance,
  EditableProTable,
  ProCard,
  ProForm,
  ProFormField,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { useRequest } from "@umijs/max";
import { Button, FormInstance, Image, message, Upload } from "antd";
import { DataSourceItemType } from "antd/es/auto-complete";
import { UploadProps } from "antd/lib";
import React, { useEffect, useRef, useState } from "react";
export default function Index() {
  /**********************************狀態管理**********************************/
  const [loginImage, setLoginImage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLoginImage();
  }, []);
  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  const props: UploadProps = {
    name: "file",
    showUploadList: false, // 不显示上传列表
    beforeUpload: () => false, // 阻止自动上传

    onChange: async (info) => {
      const file = info.fileList[0]?.originFileObj;
      if (file) {
        // 验证是否为图片
        if (!file.type.startsWith("image/")) {
          message.error("请上传图片文件");
          return;
        }

        try {
          setLoading(true);
          const response = await _updateLoginImage({
            file: file,
          });
          if (response.status) {
            message.success("上传成功");
            getLoginImage();
          } else {
            message.error("上传失败");
          }
        } catch (error) {
          message.error("上传失败");
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    },
  };
  const LoginImageElement = () => {
    return (
      <ProCard
        title="Login image"
        headerBordered
        boxShadow={true}
        loading={loading}
        extra={
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        }
        collapsible
        defaultCollapsed
      >
        <Image
          src={loginImage}
          width={"100%"}
          height={"100%"}
          style={{
            objectFit: "contain", // 保持比例缩放
            maxHeight: "500px", // 最大高度限制
          }}
        />
      </ProCard>
    );
  };
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  const getLoginImage = async () => {
    await _getLoginImage().then((res) => {
      setLoginImage(res.data[0].images[0]);
    });
  };
  /**********************************異步函數**********************************/
  return <LoginImageElement />;
}
//
