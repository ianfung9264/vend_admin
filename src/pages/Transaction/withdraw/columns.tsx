import { ProColumns } from "@ant-design/pro-components";

export function WithdrawalTableColumns({
	mainTableReload,
}: {
	mainTableReload: (() => Promise<void>) | undefined;
}): ProColumns<any>[] {
	// console.log("mainTableReload", mainTableReload);
	// const [tableReload, setTableReload] = useState(() => mainTableReload);

	// useEffect(() => {
	//   setTableReload(() => mainTableReload);
	// }, [mainTableReload]);
	return [
		{
			title: "Landowner email",
			dataIndex: "landowner",
			key: "landowner",
			render: (_, record) => {
				return record.landowner?.email || "-";
			},
			align: "center",
		},

		{
			title: "Currency",
			dataIndex: "currency",
			key: "currency",
			align: "center",
		},
		{
			title: "Progress",
			dataIndex: "progress",
			key: "progress",
			align: "center",
		},

		{
			title: "_id",
			dataIndex: "event_idCount",
			key: "_id",
			align: "center",
			hidden: true,
		},
	];
}
