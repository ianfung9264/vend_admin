import { FieldLabel, type ProLayoutProps } from "@ant-design/pro-components";

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: "light",
  colorPrimary: "#11B5D2",
  layout: "side",
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: false,
  pwa: true,
  logo: "/logo.png",
  token: {},
  title: "Vendpopups Admin",
  splitMenus: false,
  footerRender: false,
};

export default Settings;
