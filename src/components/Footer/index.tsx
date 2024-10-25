import { GithubOutlined } from "@ant-design/icons";
import { DefaultFooter } from "@ant-design/pro-components";
import React from "react";

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      className="fixed bottom-0 z-50  w-full"
      style={{
        background: "none",
      }}
      links={[
        {
          key: "Ant Design",
          title: "Vend popups",
          href: "https://ant.design",
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
