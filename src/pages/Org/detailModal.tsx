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
import { Divider, Image, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { Line } from "@ant-design/charts";

export default function DetailModal({
  initData,
  mainTableReload,
}: {
  mainTableReload: (() => Promise<void>) | undefined;

  initData?: Page_org.mainTable;
}) {
  /**********************************狀態管理**********************************/
  const formRef = useRef<ProFormInstance>();
  const [org, setOrg] = useState<Record<string, any>>();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<string, any>[]
  >([]);

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
    <BaseModel<Page_org.mainTable>
      modalFormProps={{
        formRef: { ...formRef },

        clearOnDestroy: true,
        onInit: async (values, form) => {
          if (initData?._id) {
            const res = await _getOrgById(initData._id);
            // res.data.beFollowedCount = res.data.beFollowedCount.length;
            console.log("res.data", res.data);
            setOrg(res.data);
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
      initData={org}
      title="Account Details"
    >
      <Divider
        children="Basic Information"
        orientation="left"
        orientationMargin={20}
      />
      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormText
          label={"Id"}
          name="_id"
          colProps={{ span: 8, offset: 0 }}
          readonly
        />
        <ProFormField
          label={"Icon"}
          name="icon_url"
          colProps={{ span: 8, offset: 6 }}
        >
          <Image src={org?.icon_url.url} width={100} />
        </ProFormField>

        <ProFormText
          label={"Followers Count"}
          name="be_followed_count"
          colProps={{ span: 8, offset: 0 }}
          readonly
        />

        <ProFormSelect
          label="Account type"
          name="advanced_status"
          fieldProps={{
            labelInValue: false,
          }}
          colProps={{ span: 8, offset: 6 }}
          valueEnum={{
            0: { text: "Unapproved", status: "Error" },
            1: { text: "Waiting", status: "Processing" },
            2: { text: "Approved", status: "Success" },
          }}
        />
        <ProFormField
          label={"Wallet Balance"}
          name="wallet"
          colProps={{ span: 8, offset: 0 }}
          valueType="money"
        />
        <ProFormText
          label={"Email"}
          name="email"
          colProps={{ span: 8, offset: 6 }}
          readonly
        />
        <ProFormText
          label={"Phone Prefix"}
          name="phone_pre"
          colProps={{ span: 8, offset: 0 }}
          readonly
        />

        <ProFormText
          label={"Phone Number"}
          name="phone"
          colProps={{ span: 8, offset: 6 }}
          readonly
        />

        <ProFormText
          label={"Organizer Event Count"}
          proFieldProps={{
            render: () => {
              return <div>{org?.events.length}</div>;
            },
          }}
          colProps={{ span: 8, offset: 0 }}
          readonly
        />
        <ProFormField
          label={"Event Operation License"}
          name="event_operation_license"
          colProps={{ span: 8, offset: 6 }}
        >
          <Image src={org?.event_operation_license.url} width={100} />
        </ProFormField>
      </ProForm.Group>

      <Divider
        children="Business Information"
        orientation="left"
        orientationMargin={20}
      />

      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormText
          label={"Business Name"}
          name="business_name"
          colProps={{ span: 8, offset: 0 }}
        />
        <ProFormText
          label={"Full Business Name"}
          name="business_full_name"
          colProps={{ span: 8, offset: 6 }}
        />
        <ProFormText
          label={"Business Website"}
          name="business_url"
          colProps={{ span: 8, offset: 0 }}
        />

        <ProFormText
          label={"Facebook URL"}
          name="facebook_url"
          colProps={{ span: 8, offset: 6 }}
        />
        <ProFormText
          label={"Instagram URL"}
          name="ins_url"
          colProps={{ span: 8, offset: 0 }}
        />
        <ProFormText
          label={"X URL"}
          name="x_url"
          colProps={{ span: 8, offset: 6 }}
        />
        <ProFormText
          label={"Legal Person Name"}
          fieldProps={{
            value:
              org?.legal_person_first_name + " " + org?.legal_person_last_name,
          }}
          colProps={{ span: 8, offset: 0 }}
        />
      </ProForm.Group>
      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormField colProps={{ span: 24 }}>
          <ProTable
            search={false}
            toolBarRender={false}
            pagination={false}
            columns={[
              { title: "Card Name", dataIndex: "card_type" },
              { title: "Card Info", dataIndex: "card_info" },
              { title: "Card CVV Code", dataIndex: "cvv_code" },
              { title: "Card Expiration Date", dataIndex: "expire_date" },
            ]}
            dataSource={org?.bank_info}
          />
        </ProFormField>
      </ProForm.Group>

      <Divider
        children="Business address info"
        orientation="left"
        orientationMargin={20}
      />
      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormText
          colProps={{ span: 4, offset: 0 }}
          label={"Country"}
          fieldProps={{
            value: org?.business_address.country,
          }}
        />
        <ProFormText
          label={"City"}
          colProps={{ span: 4, offset: 6 }}
          fieldProps={{
            value: org?.business_address.city,
          }}
        />
        <ProFormText
          label={"Address"}
          colProps={{ span: 4, offset: 6 }}
          fieldProps={{
            value: org?.business_address.address,
          }}
        />
        <ProFormField
          label={"Shoot photo"}
          name="shoot_photo"
          colProps={{ span: 8, offset: 0 }}
        >
          {org?.pictures.map((pic: any) => <Image src={pic.url} width={100} />)}
        </ProFormField>
      </ProForm.Group>
      <Divider children="Others" orientation="left" orientationMargin={20} />

      <ProForm.Group style={{ ...groupStyle }}>
        <ProFormTextArea label={"Bio"} name="blurb" colProps={{ span: 24 }} />
      </ProForm.Group>
    </BaseModel>
  );
}
