import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function LogoutButton() {
	return (
		<Button
			className="mr-8"
			type="primary"
			danger
			icon={<LogoutOutlined />}
			onClick={() => {
				localStorage.removeItem("token");
				localStorage.removeItem("account");
				localStorage.removeItem("password");
				localStorage.removeItem("id");
				window.location.href = "/";
			}}
		>
			Logout
		</Button>
	);
}
