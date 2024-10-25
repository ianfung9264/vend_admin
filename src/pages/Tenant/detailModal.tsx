import BaseModel from "@/components/Base/BaseModel";
import { _getOrgById } from "@/services/org/info";
import {
  ProDescriptions,
  ProForm,
  ProFormField,
  ProFormGroup,
  ProFormInstance,
  ProFormRate,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProList,
  ProTable,
} from "@ant-design/pro-components";
import { Divider, Image, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { Line } from "@ant-design/charts";
import { _getTenantById } from "@/services/tenant/info";

export default function DetailModal({
  initData,
  mainTableReload,
}: {
  mainTableReload: (() => Promise<void>) | undefined;

  initData?: Page_tenant.mainTable;
}) {
  /**********************************狀態管理**********************************/
  const formRef = useRef<ProFormInstance>();
  const [tenant, setTenant] = useState<Record<string, any>>();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<string, any>[]
  >([]);
  const leftFile = { span: 8, offset: 0 };
  const rightFile = { span: 8, offset: 6 };
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
    <BaseModel<Page_tenant.mainTable>
      modalFormProps={{
        formRef: { ...formRef },

        clearOnDestroy: true,
        onInit: async (values, form) => {
          if (initData?._id) {
            const res = await _getTenantById(initData._id);
            // res.data.beFollowedCount = res.data.beFollowedCount.length;
            console.log("res.data", res.data);
            setTenant(res.data);
            const rating_distribution = Object.keys(
              res.data.rating_distribution
            ).map((key) => {
              return { star: key, count: res.data.rating_distribution[key] };
            });
            setRatingDistribution(rating_distribution);
            form.setFieldsValue(res.data);
          }
        },
      }}
      allowUpdate={false}
      readOnly={true}
      initData={tenant}
      title="Account Details"
    >
      <Divider
        children="Basic Information"
        orientation="left"
        orientationMargin={20}
      />
      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormText label={"Id"} name="_id" colProps={leftFile} readonly />
        <ProFormText
          label={"Be followed count"}
          name="first_name"
          colProps={rightFile}
          fieldProps={{
            value: tenant?.firstname + " " + tenant?.lastname,
          }}
          readonly
        />
        <ProFormField label={"Icon"} name="icon_url" colProps={leftFile}>
          <Image src={tenant && tenant?.icon_url.url} width={100} />
        </ProFormField>

        <ProFormText
          label={"Be followed count"}
          name="be_followed_count"
          colProps={rightFile}
          readonly
        />

        <ProFormText
          label={"Email"}
          name="email"
          colProps={leftFile}
          readonly
        />

        <ProFormText
          label={"Joined Event count"}
          proFieldProps={{
            render: () => {
              return <div>{tenant?.joined_events.length}</div>;
            },
          }}
          colProps={rightFile}
          readonly
        />
      </ProForm.Group>
      <>
        <Divider
          children="Bank info"
          orientation="left"
          orientationMargin={20}
        />

        <ProForm.Group style={{ ...groupStyle }}>
          <ProFormField colProps={{ span: 24 }}>
            <ProTable
              search={false}
              toolBarRender={false}
              pagination={false}
              columns={[
                { title: "Card name", dataIndex: "card_type" },
                { title: "Card info", dataIndex: "card_info" },
                { title: "Card cvv code", dataIndex: "cvv_code" },
                { title: "Card expiration date", dataIndex: "expire_date" },
              ]}
              dataSource={tenant?.bank_info}
            />
          </ProFormField>
        </ProForm.Group>
      </>
      <>
        <Divider
          children="Product info"
          orientation="left"
          orientationMargin={20}
        />

        <ProForm.Group style={{ ...groupStyle }}>
          <ProFormField colProps={{ span: 24 }}>
            <ProTable
              search={false}
              toolBarRender={false}
              pagination={false}
              columns={[
                { title: "Product name", dataIndex: "name" },
                { title: "Price", dataIndex: "price" },
                {
                  title: "Product photo example",
                  dataIndex: "pictures.url",
                  valueType: "image",
                  render: (_, record) => {
                    return (
                      <div style={{ display: "flex", gap: "8px" }}>
                        {record.pictures.map((_record: any, index: number) => {
                          if (index < 3)
                            return (
                              <Image
                                src={_record.url}
                                width={50}
                                height={50}
                                key={_record.url}
                              />
                            );
                        })}
                      </div>
                    );
                  },
                },
                { title: "Create time", dataIndex: "createdAt" },
              ]}
              dataSource={tenant?.products}
            />
          </ProFormField>
        </ProForm.Group>
      </>

      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormText
          label={"Business name"}
          name="business_name"
          colProps={leftFile}
        />

        <ProFormText
          label={"Business url"}
          name="business_url"
          colProps={rightFile}
        />

        <ProFormText
          fieldProps={{
            type: "url",
          }}
          label={"Facebook url"}
          name="facebook_url"
          colProps={leftFile}
        />
        <ProFormText
          label={"Instagram url"}
          name="ins_url"
          colProps={rightFile}
        />
        <ProFormText label={"X url"} name="x_url" colProps={leftFile} />
      </ProForm.Group>
      <>
        <Divider
          children="Business address info"
          orientation="left"
          orientationMargin={20}
        />
        <ProForm.Group style={{ ...groupStyle }}>
          <ProFormText
            colProps={{ span: 8, offset: 0 }}
            label={"Country"}
            fieldProps={{
              value: tenant?.business_address.country,
            }}
          />
          <ProFormText
            label={"City"}
            colProps={{ span: 8, offset: 6 }}
            fieldProps={{
              value: tenant?.business_address.city,
            }}
          />
          <ProFormText
            label={"Address"}
            colProps={{ span: 24, offset: 0 }}
            fieldProps={{
              value: tenant?.business_address.address,
            }}
          />
          <ProFormField
            label={"Shoot photo"}
            name="shoot_photo"
            colProps={{ span: 24, offset: 0 }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              {tenant?.shoot_pictures.map((pic: any) => (
                <Image src={pic.url} width={100} height={100} />
              ))}
            </div>
          </ProFormField>
        </ProForm.Group>
      </>
      <Divider children="Others" orientation="left" orientationMargin={20} />

      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormText
          label={"Stripe customer id"}
          name="stripe_customer_id"
          colProps={leftFile}
        />
        <ProFormTextArea
          label={"Rating average"}
          name="rating_average"
          colProps={rightFile}
        />

        <ProFormTextArea label={"Bio"} name="blurb" colProps={{ span: 24 }} />

        <ProFormField label={"Rating average"}>
          <Line
            data={ratingDistribution}
            height={200}
            width={700}
            xField="star"
            yField="count"
          />
        </ProFormField>
      </ProForm.Group>
    </BaseModel>
  );
}
