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
  _postPrivacyPolicy,
  _postTermsCondition,
  _putPrivacyPolicy,
  _putTermsCondition,
  _updateBannerVideo,
  _updateCategory,
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
export default function Index() {
  /**********************************狀態管理**********************************/
  const [tab, setTab] = useState("tab1");

  const [bannerFormReadOnly, setBannerFormReadOnly] = useState(true);

  const bannerFormRef = useRef<FormInstance>();
  const { refresh: BannerFormDataRefresh } = useRequest(_getBannerContext, {
    onSuccess: async (res) => {
      console.log("获取到的原始数据:", res); // 调试用

      if (!res || !res[0]) {
        console.warn("没有获取到数据");
        return;
      }
      const videoRes = await _getBannerVideo();
      console.log("videoRes", videoRes);
      const data = res[0];
      console.log("要设置的数据:", {
        url: Array.isArray(data.youtube_url)
          ? data.youtube_url[0]
          : data.youtube_url,
        description1: data.children?.[0],
        description2: data.children?.[1],
        description3: data.children?.[2],
      });
      bannerFormRef.current?.setFieldsValue({
        url: videoRes.data,
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
  });
  const actionRef = useRef<ActionType>();
  const [searchKey, setSearchKey] = useState("");
  const [reload, setReload] = useState(() => actionRef.current?.reload);

  const termsConditionActionRef = useRef<ActionType>();
  const [termsConditionSearchKey, setTermsConditionSearchKey] = useState("");
  const [termsConditionReload, setTermsConditionReload] = useState(
    () => termsConditionActionRef.current?.reload
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setReload(() => actionRef.current?.reload);
  }, []);
  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  const uploadProps: UploadProps = {
    name: "file",
    showUploadList: false, // 不显示上传列表
    beforeUpload: () => false, // 阻止自动上传
    accept: "video/*",
    onChange: async (info) => {
      const file = info.fileList[0]?.originFileObj;
      if (file) {
        // 验证是否为图片
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
          const response = await _updateBannerVideo({
            youtube_url: file,
          });
          if (response.status) {
            message.success("上传成功");
            BannerFormDataRefresh();
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
  const BannerVideoElement = () => {
    return (
      <Spin spinning={loading} tip="视频上传中...">
        <ProForm
          formRef={bannerFormRef}
          onFinish={async (values) => {
            try {
              // 过滤空的描述对象
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

              const formData = {
                youtube_url: values.url || "",
                children: children,
              };

              await _updateBannerVideo(formData);
              message.success("Update banner success");
            } catch (error) {
              console.log("error", error);
              message.error("Update banner failed");
            } finally {
              BannerFormDataRefresh();
              setBannerFormReadOnly(true);
              return true;
            }
          }}
          submitter={{
            searchConfig: {
              resetText: "Cancel",
              submitText: "Save",
            },

            onReset: (e) => {
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
              if (bannerFormReadOnly) {
                return editButton;
              } else {
                return dom;
              }
            },
          }}
          grid={true}
          readonly={bannerFormReadOnly}
        >
          <ProFormTextArea
            colProps={{ span: 16 }}
            label={"Video url"}
            readonly
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
                <Button icon={<UploadOutlined />}>Click to Update Video</Button>
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
    return (
      <EditableProTable
        rowKey="_id"
        editable={{
          type: "single",
          onSave: async (key, record, originRow, newLineConfig) => {
            console.log("record", record);
            if (record.isCreate) {
              await _createCategory({
                name: record.name,
              });
            } else {
              await _updateCategory({
                _id: record._id,
                name: record.name,
                isDisplay: record.isDisplay,
              });
            }
            return true;
          },
        }}
        recordCreatorProps={{
          creatorButtonText: "Create",
          record: (Index) => ({
            _id: Index,
            isCreate: true,
            name: "default name",
            isDisplay: true,
          }),
        }}
        request={async () => {
          const res = await _getCategory();
          return { data: res.data, success: true };
        }}
        columns={[
          {
            title: "Category name",
            dataIndex: "name",
          },
          {
            title: "IsDisplay",
            dataIndex: "isDisplay",
            valueEnum: {
              true: "Show",
              false: "Hidden",
            },
          },
          {
            title: "Action",
            valueType: "option",
            width: 200,
            render: (text, record, _, action) => [
              <a
                key="editable"
                onClick={() => {
                  action?.startEditable?.(record._id, record);
                }}
              >
                Edit
              </a>,
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
          submitFun={actionRef.current?.reload}
          inputProps={{
            value: searchKey,
            onChange: ({ currentTarget: { value } }) => setSearchKey(value),
          }}
        />
        <BaseTable<any>
          searchKey={searchKey}
          props={{
            headerTitle: "Privacy policy List",
            actionRef: actionRef,
            optionsRender(props, defaultDom) {
              const createFaq = (
                <BaseModel<API_Setting.CreatePrivacyPolicy>
                  allowUpdate={false}
                  readOnly={false}
                  modalFormProps={{
                    onFinish: async (value) => {
                      try {
                        await _postPrivacyPolicy({ context: value.context });
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
                        resetText: "Cancel",
                        submitText: "Confirm",
                      },
                    },
                  }}
                  title="New Part"
                >
                  <ProFormTextArea
                    colProps={{ span: 18 }}
                    label="Context"
                    name="context"
                  />
                </BaseModel>
              );
              return [createFaq, ...defaultDom];
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
                title: "Context",
                dataIndex: "context",
                align: "center",
                copyable: true,
                width: "80%",
                valueType: "textarea",
                ellipsis: true,
              },
              {
                title: "Actions",
                dataIndex: "action",
                key: "action",
                render: (_, record) => (
                  <span>
                    <BaseModel<API_Setting.UpdatePrivacyPolicy>
                      allowUpdate={false}
                      readOnly={false}
                      modalFormProps={{
                        onFinish: async (value) => {
                          try {
                            await _putPrivacyPolicy({
                              part: value.part,
                              context: value.context,
                            });
                            message.success("Create faq success");
                          } catch (error) {
                            message.error("Create faq failed");
                          } finally {
                            actionRef.current?.reload();
                            return true;
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
                      title="New Part"
                    >
                      <ProFormText
                        colProps={{ span: 18 }}
                        label="Part"
                        name="part"
                        readonly={true}
                        initialValue={record.part}
                      />
                      <ProFormTextArea
                        colProps={{ span: 18 }}
                        label="Context"
                        initialValue={record.context}
                        name="context"
                      />
                    </BaseModel>
                  </span>
                ),
                align: "center",
              },
            ],
            request: async () => {
              const dataSource = await _getPrivacyPolicy().then(({ data }) => {
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
      </div>
    );
  };
  const TermsConditionElement = () => {
    return (
      <div>
        <BaseSearch
          title="Search bar"
          submitFun={termsConditionActionRef.current?.reload}
          inputProps={{
            value: termsConditionSearchKey,
            onChange: ({ currentTarget: { value } }) =>
              setTermsConditionSearchKey(value),
          }}
        />
        <BaseTable<any>
          searchKey={termsConditionSearchKey}
          props={{
            headerTitle: "Terms & Conditions List",
            actionRef: termsConditionActionRef,
            optionsRender(props, defaultDom) {
              const createTermsCondition = (
                <BaseModel<API_Setting.CreateTermsCondition>
                  allowUpdate={false}
                  readOnly={false}
                  modalFormProps={{
                    onFinish: async (value) => {
                      try {
                        await _postTermsCondition({ context: value.context });
                        message.success("Create faq success");
                      } catch (error) {
                        message.error("Create faq failed");
                      } finally {
                        termsConditionActionRef.current?.reload();
                        return true;
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
                  <ProFormTextArea
                    colProps={{ span: 18 }}
                    label="Context"
                    name="context"
                  />
                </BaseModel>
              );
              return [createTermsCondition, ...defaultDom];
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
                title: "Context",
                dataIndex: "context",
                align: "center",
                copyable: true,
                width: "80%",
                valueType: "textarea",
                ellipsis: true,
              },
              {
                title: "Actions",
                dataIndex: "action",
                key: "action",
                render: (_, record) => (
                  <span>
                    <BaseModel<API_Setting.UpdateTermsCondition>
                      allowUpdate={false}
                      readOnly={false}
                      modalFormProps={{
                        onFinish: async (value) => {
                          try {
                            await _putTermsCondition({
                              part: value.part,
                              context: value.context,
                            });
                            message.success("Create faq success");
                          } catch (error) {
                            message.error("Create faq failed");
                          } finally {
                            termsConditionActionRef.current?.reload();
                            return true;
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
                      title="New Part"
                    >
                      <ProFormText
                        colProps={{ span: 18 }}
                        label="Part"
                        name="part"
                        readonly={true}
                        initialValue={record.part}
                      />
                      <ProFormTextArea
                        colProps={{ span: 18 }}
                        label="Context"
                        initialValue={record.context}
                        name="context"
                      />
                    </BaseModel>
                  </span>
                ),
                align: "center",
              },
            ],
            request: async () => {
              const dataSource = await _getTermsCondition().then(({ data }) => {
                return {
                  success: true,
                  data: data,
                };
              });
              if (termsConditionSearchKey) {
                dataSource.data = Helper<Page_org.mainTable>({
                  dataSource: dataSource.data,
                  keyWord: termsConditionSearchKey,
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
              label: `Banner video`,
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
