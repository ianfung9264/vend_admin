import BaseIndex from "@/components/Base/BaseIndex";
import BaseModel from "@/components/Base/BaseModel";
import BaseSearch from "@/components/Base/BaseSearch";
import BaseTable from "@/components/Base/BaseTable";
import {
  _createCategory,
  _getBannerContext,
  _getBannerVideo,
  _getCategory,
  _getPrivacyPolicy,
  _getTermsCondition,
  _postTermsCondition,
  _putPrivacyPolicy,
  _putTermsCondition,
  _updateBannerVideo,
  _updateBannerContext,
  _updateCategory,
  _deleteCategory, // Make sure _deleteCategory is imported
} from "@/services/setting/others";
import Helper from "@/util/searchHelper";
import { PlusSquareOutlined, UploadOutlined } from "@ant-design/icons";
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
import {
  Button,
  Col,
  Divider,
  FormInstance,
  message,
  Row,
  Spin,
  Upload,
} from "antd";
import { DataSourceItemType } from "antd/es/auto-complete";
import React, { useEffect, useRef, useState } from "react";
import LoginImageElement from "./cms/LoginImageElement";
import SignUpImageElement from "./cms/SignUpImageElement";
import { UploadProps } from "antd/lib";
import HomeTitleImage from "./cms/HomeTitileImage";
import HomeFooterImage from "./cms/HomeFooterImage";
import RichTextEditor from "@/components/RichTextEditor";

export default function Index() {
  /**********************************狀態管理**********************************/
  const [tab, setTab] = useState("tab1"); // Default to tab1 or any relevant tab

  const [bannerFormReadOnly, setBannerFormReadOnly] = useState(true);

  const bannerFormRef = useRef<FormInstance>();
  const { refresh: BannerFormDataRefresh } = useRequest(_getBannerContext, {
    onSuccess: async (res) => {
      if (!res || !res[0]) {
        console.warn("没有获取到数据 for banner context");
        bannerFormRef.current?.setFieldsValue({
          // Clear form if no data
          url: "",
          description1: { title: "", subtitle: "", body: "" },
          description2: { title: "", subtitle: "", body: "" },
          description3: { title: "", subtitle: "", body: "" },
        });
        return;
      }
      const videoRes = await _getBannerVideo(); // Assuming this fetches the video URL string
      const data = res[0];
      bannerFormRef.current?.setFieldsValue({
        url: videoRes.data, // videoRes.data should be the URL string
        description1: {
          title: data.children?.[0]?.title ?? "",
          subtitle: data.children?.[0]?.subtitle ?? "",
          body: data.children?.[0]?.body ?? "",
        },
        description2: {
          title: data.children?.[1]?.title ?? "",
          subtitle: data.children?.[1]?.subtitle ?? "",
          body: data.children?.[1]?.body ?? "",
        },
        description3: {
          title: data.children?.[2]?.title ?? "",
          subtitle: data.children?.[2]?.subtitle ?? "",
          body: data.children?.[2]?.body ?? "",
        },
      });
    },
    onError: (error) => {
      message.error("Failed to load banner data.");
      console.error("Banner data fetch error:", error);
    },
  });

  // ActionRef for PrivacyPolicyElement's BaseTable
  const privacyPolicyActionRef = useRef<ActionType>();
  const [privacyPolicySearchKey, setPrivacyPolicySearchKey] = useState("");

  // ActionRef for TermsConditionElement's BaseTable
  const termsConditionActionRef = useRef<ActionType>();
  const [termsConditionSearchKey, setTermsConditionSearchKey] = useState("");

  const [loading, setLoading] = useState(false); // For BannerVideoElement video upload

  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  const uploadProps: UploadProps = {
    name: "file",
    showUploadList: false,
    beforeUpload: () => false,
    accept: "video/*",
    onChange: async (info) => {
      const file = info.fileList[0]?.originFileObj;
      if (file) {
        if (!file.type.startsWith("video/")) {
          message.error("请上传视频文件");
          return;
        }
        const maxSize = 100 * 1024 * 1024; // 100MB
        if (file.size > maxSize) {
          message.error("视频文件不能超过 100MB");
          return;
        }
        try {
          setLoading(true);
          const response = await _updateBannerVideo({ youtube_url: file });
          if (response.status) {
            message.success("上传成功");
            BannerFormDataRefresh(); // Refresh data after successful upload
          } else {
            message.error(
              typeof response.data === "string" ? response.data : "上传失败"
            );
          }
        } catch (error: any) {
          message.error(error?.data?.message || error?.message || "上传失败");
          console.error("Video upload error:", error);
        } finally {
          setLoading(false);
        }
      }
    },
  };

  const BannerVideoElement = () => {
    return (
      <Spin spinning={loading} tip="视频上传中...">
        <ProForm
          formRef={bannerFormRef}
          onFinish={async (values) => {
            try {
              const children = [
                {
                  title: values.description1?.title,
                  subtitle: values.description1?.subtitle,
                  body: values.description1?.body,
                },
                {
                  title: values.description2?.title,
                  subtitle: values.description2?.subtitle,
                  body: values.description2?.body,
                },
                {
                  title: values.description3?.title,
                  subtitle: values.description3?.subtitle,
                  body: values.description3?.body,
                },
              ].filter((item) => item.title || item.subtitle || item.body);

              await _updateBannerContext({ children });
              message.success("Update banner success");
            } catch (error: any) {
              console.error("Update banner error:", error);
              message.error(
                error?.data?.message || error?.message || "Update banner failed"
              );
            } finally {
              BannerFormDataRefresh();
              setBannerFormReadOnly(true);
              return true;
            }
          }}
          submitter={{
            searchConfig: { resetText: "Cancel", submitText: "Save" },
            onReset: () => {
              setBannerFormReadOnly(true);
              BannerFormDataRefresh();
            },
            render(props, dom) {
              const editButton = (
                <Button
                  type="primary"
                  onClick={() => setBannerFormReadOnly(false)}
                >
                  Edit
                </Button>
              );
              return bannerFormReadOnly ? editButton : dom;
            },
          }}
          grid={true}
          readonly={bannerFormReadOnly}
        >
          <ProFormTextArea
            colProps={{ span: 16 }}
            label={"Video url"}
            readonly // URL is displayed but not editable via this form save; only via new upload.
            fieldProps={{
              style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            name="url"
            extra={
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Click to Upload Video</Button>
              </Upload>
            }
          />
          <ProForm.Group title="Description one">
            <ProFormText
              colProps={{ span: 12 }}
              label={"Title"}
              name={["description1", "title"]}
            />
            <ProFormText
              colProps={{ span: 12 }}
              label={"Subtitle"}
              name={["description1", "subtitle"]}
            />
            <ProFormTextArea
              colProps={{ span: 12 }}
              label={"body"}
              name={["description1", "body"]}
            />
          </ProForm.Group>
          <ProForm.Group title="Description two">
            <ProFormText
              colProps={{ span: 12 }}
              label={"Title"}
              name={["description2", "title"]}
            />
            <ProFormText
              colProps={{ span: 12 }}
              label={"Subtitle"}
              name={["description2", "subtitle"]}
            />
            <ProFormTextArea
              colProps={{ span: 12 }}
              label={"body"}
              name={["description2", "body"]}
            />
          </ProForm.Group>
          <ProForm.Group title="Description three">
            <ProFormText
              colProps={{ span: 12 }}
              label={"Title"}
              name={["description3", "title"]}
            />
            <ProFormText
              colProps={{ span: 12 }}
              label={"Subtitle"}
              name={["description3", "subtitle"]}
            />
            <ProFormTextArea
              colProps={{ span: 12 }}
              label={"body"}
              name={["description3", "body"]}
            />
          </ProForm.Group>
        </ProForm>
      </Spin>
    );
  };

  const CategoryElement = () => {
    const categoryTableActionRef = useRef<ActionType>();

    return (
      <EditableProTable
        rowKey="_id"
        actionRef={categoryTableActionRef}
        editable={{
          type: "single",
          onSave: async (key, record, originRow, newLineConfig) => {
            try {
              if (record.isCreate) {
                // 'isCreate' is a temporary flag for new rows
                await _createCategory({ name: record.name });
                message.success("Category created successfully");
              } else {
                await _updateCategory({
                  _id: record._id,
                  name: record.name,
                  isDisplay: record.isDisplay,
                });
                message.success("Category updated successfully");
              }
              categoryTableActionRef.current?.reloadAndRest?.(); // Reload and reset states
              return true;
            } catch (error: any) {
              message.error(
                error?.data?.message ||
                  error?.message ||
                  "Failed to save category"
              );
              console.error("Save category error:", error);
              return false; // Keep row in editable state on error
            }
          },
          onDelete: async (key, row) => {
            try {
              await _deleteCategory(row._id);
              message.success("Category deleted successfully");
              categoryTableActionRef.current?.reloadAndRest?.(); // Reload and reset states
            } catch (error: any) {
              message.error(
                error?.data?.message ||
                  error?.message ||
                  "Failed to delete category"
              );
              console.error("Delete category error:", error);
            }
          },
          deletePopconfirmMessage:
            "Are you sure you want to delete this category?",
        }}
        recordCreatorProps={{
          creatorButtonText: "Create",
          record: () => ({
            _id: `new-category-${Date.now()}`,
            isCreate: true,
            name: "default name",
            isDisplay: true,
          }),
        }}
        request={async (params, sorter, filter) => {
          try {
            const res = await _getCategory();
            if (res.status && Array.isArray(res.data)) {
              return { data: res.data, success: true, total: res.data.length };
            }
            message.error(
              typeof res.data === "string"
                ? res.data
                : "Failed to load categories"
            );
            return { data: [], success: false };
          } catch (error: any) {
            message.error(
              error?.data?.message ||
                error?.message ||
                "Failed to load categories"
            );
            console.error("Load categories error:", error);
            return { data: [], success: false };
          }
        }}
        columns={[
          {
            title: "Category name",
            dataIndex: "name",
            formItemProps: {
              // Add validation for editing/creating
              rules: [{ required: true, message: "Category name is required" }],
            },
          },
          // {
          //   title: "IsDisplay",
          //   dataIndex: "isDisplay",
          //   valueType: "select",
          //   valueEnum: {
          //     true: { text: "Show", status: "Success" },
          //     false: { text: "Hidden", status: "Default" },
          //   },
          // },
          {
            title: "Action",
            valueType: "option",
            width: 200,
            render: (text, record, _, action) => [
              <a
                key="editable"
                onClick={() => {
                  action?.startEditable?.(record._id);
                }}
              >
                Edit
              </a>,
              // Delete action is auto-rendered if onDelete is provided
            ],
          },
        ]}
      />
    );
  };

  const PrivacyPolicyElement = () => {
    return (
      <div>
        <BaseSearch
          title="Search bar"
          submitFun={async () => {
            await privacyPolicyActionRef.current?.reload();
          }}
          inputProps={{
            value: privacyPolicySearchKey,
            onChange: ({ currentTarget: { value } }) =>
              setPrivacyPolicySearchKey(value),
          }}
        />
        <BaseTable<any>
          searchKey={privacyPolicySearchKey}
          requestFun={async () => {
            const res = await _getPrivacyPolicy();
            const dataArray = res.status && res.data ? [res.data] : [];
            return { detail: dataArray } as any;
          }}
          props={{
            headerTitle: "Privacy Policy List",
            rowKey: "_id",
            actionRef: privacyPolicyActionRef,
            optionsRender(props, defaultDom) {
              const createEntry = (
                <BaseModel<API_Setting.CreatePrivacyPolicy>
                  allowUpdate={false} // This implies it's a create-only modal
                  readOnly={false}
                  modalFormProps={{
                    onFinish: async (value) => {
                      try {
                        await _putPrivacyPolicy({ context: value.context });
                        message.success("Updated successfully");
                        privacyPolicyActionRef.current?.reload();
                        return true;
                      } catch (error: any) {
                        message.error(
                          error?.data?.message ||
                            error?.message ||
                            "Create failed"
                        );
                        return false;
                      }
                    },
                    grid: true,
                    trigger: (
                      <Button icon={<PlusSquareOutlined />} type="text" />
                    ),
                    submitter: {
                      searchConfig: {
                        resetText: "Cancel",
                        submitText: "Confirm",
                      },
                    },
                  }}
                  title="New Part"
                >
                  <ProForm.Item
                    label="Context"
                    name="context"
                    rules={[{ required: true, message: "Context is required" }]}
                  >
                    <RichTextEditor />
                  </ProForm.Item>
                </BaseModel>
              );
              return [createEntry, ...defaultDom];
            },
            columns: [
              {
                key: "context",
                title: "Content",
                dataIndex: "context",
                align: "center",
                width: "90%",
                render: (_, record) => (
                  <div
                    style={{ textAlign: "left", padding: 8 }}
                    dangerouslySetInnerHTML={{ __html: record.context }}
                  />
                ),
              },
              {
                title: "Actions",
                dataIndex: "action",
                key: "action",
                render: (_, record) => (
                  <BaseModel<API_Setting.UpdatePrivacyPolicy>
                    readOnly={true}
                    modalFormProps={{
                      initialValues: {
                        context: record.context,
                      },
                      onFinish: async (value) => {
                        try {
                          await _putPrivacyPolicy({
                            context: value.context,
                          });
                          message.success("Updated successfully");
                          privacyPolicyActionRef.current?.reload();
                          return true;
                        } catch (error: any) {
                          message.error(
                            error?.data?.message ||
                              error?.message ||
                              "Update failed"
                          );
                          return false;
                        }
                      },
                      grid: true,
                      submitter: {
                        searchConfig: {
                          resetText: "Cancel",
                          submitText: "Confirm",
                        },
                      },
                    }}
                    title="Edit Content"
                    allowUpdate={false}
                  >
                    <RichTextEditor />
                  </BaseModel>
                ),
                align: "center",
              },
            ],
          }}
        />
      </div>
    );
  };

  const TermsConditionElement = () => {
    return (
      <div>
        <BaseSearch
          title="Search bar"
          submitFun={async () => {
            await termsConditionActionRef.current?.reload();
          }}
          inputProps={{
            value: termsConditionSearchKey,
            onChange: ({ currentTarget: { value } }) =>
              setTermsConditionSearchKey(value),
          }}
        />
        <BaseTable<any> // Assuming API_Setting.TermsConditionItem or similar
          searchKey={termsConditionSearchKey}
          requestFun={async () => {
            const res = await _getTermsCondition();
            const arr = res.status && Array.isArray(res.data) ? res.data : [];
            return { detail: arr } as any;
          }}
          props={{
            headerTitle: "Terms & Conditions List",
            rowKey: "part",
            actionRef: termsConditionActionRef,
            optionsRender(props, defaultDom) {
              const createEntry = (
                <BaseModel<API_Setting.CreateTermsCondition>
                  allowUpdate={false}
                  readOnly={false}
                  modalFormProps={{
                    onFinish: async (value) => {
                      try {
                        await _postTermsCondition({ context: value.context });
                        message.success("Created successfully");
                        termsConditionActionRef.current?.reload();
                        return true;
                      } catch (error: any) {
                        message.error(
                          error?.data?.message ||
                            error?.message ||
                            "Create failed"
                        );
                        return false;
                      }
                    },
                    grid: true,
                    trigger: (
                      <Button icon={<PlusSquareOutlined />} type="text" />
                    ),
                    submitter: {
                      searchConfig: {
                        resetText: "Cancel",
                        submitText: "Confirm",
                      },
                    },
                  }}
                  title="New Part"
                >
                  <ProForm.Item
                    label="Context"
                    name="context"
                    rules={[{ required: true, message: "Context is required" }]}
                  >
                    <RichTextEditor />
                  </ProForm.Item>
                </BaseModel>
              );
              return [createEntry, ...defaultDom];
            },
            columns: [
              {
                key: "part",
                title: "Part",
                dataIndex: "part",
                width: "10%",
                align: "center",
                sorter: (a, b) => a.part - b.part,
              },
              {
                key: "context",
                title: "Content",
                dataIndex: "context",
                align: "center",
                width: "80%",
                render: (_, record) => (
                  <div
                    style={{ textAlign: "left", padding: 8 }}
                    dangerouslySetInnerHTML={{ __html: record.context }}
                  />
                ),
              },
              {
                title: "Actions",
                dataIndex: "action",
                key: "action",
                render: (_, record) => (
                  <span>
                    <BaseModel<API_Setting.UpdateTermsCondition>
                      readOnly={false}
                      modalFormProps={{
                        initialValues: {
                          part: record.part,
                          context: record.context,
                        },
                        onFinish: async (value) => {
                          try {
                            await _putTermsCondition({
                              part: record.part, // Use record.part as identifier
                              context: value.context,
                            });
                            message.success("Updated successfully");
                            termsConditionActionRef.current?.reload();
                            return true;
                          } catch (error: any) {
                            message.error(
                              error?.data?.message ||
                                error?.message ||
                                "Update failed"
                            );
                            return false;
                          }
                        },
                        grid: true,
                        submitter: {
                          searchConfig: {
                            resetText: "Cancel",
                            submitText: "Confirm",
                          },
                        },
                      }}
                      title="Edit Part"
                    >
                      <ProFormText
                        colProps={{ span: 18 }}
                        label="Part"
                        name="part"
                        readonly={true}
                      />
                      <ProForm.Item
                        label="Context"
                        name="context"
                        rules={[
                          { required: true, message: "Context is required" },
                        ]}
                      >
                        <RichTextEditor />
                      </ProForm.Item>
                    </BaseModel>
                  </span>
                ),
                align: "center",
              },
            ],
          }}
        />
      </div>
    );
  };

  const CmsElement = () => {
    return (
      <ProCard title="CMS" headerBordered ghost>
        <Row gutter={16}>
          <Col span={12}>
            <LoginImageElement />
          </Col>
          <Col span={12}>
            <SignUpImageElement />
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            <HomeTitleImage />
          </Col>
          <Col span={12}>
            <HomeFooterImage />
          </Col>
        </Row>
      </ProCard>
    );
  };
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  /**********************************異步函數**********************************/
  return (
    <BaseIndex title="Other settings">
      <ProCard
        title="Settings card"
        headStyle={{ paddingBottom: 24 }}
        style={{ minHeight: "90vh" }}
        tabs={{
          tabPosition: "left",
          activeKey: tab,
          items: [
            {
              label: `Home Page`,
              key: "tab1",
              children: BannerVideoElement(),
            },
            {
              label: `Category`,
              key: "tab2",
              children: CategoryElement(),
            },
            {
              label: `Privacy policy`,
              key: "tab3",
              children: PrivacyPolicyElement(),
            },
            {
              label: `Terms & Conditions`,
              key: "tab4",
              children: TermsConditionElement(),
            },
            {
              label: `CMS`,
              key: "tab5",
              children: CmsElement(),
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
