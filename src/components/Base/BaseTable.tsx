import Helper from "@/util/searchHelper";
import { ProTable, ProTableProps } from "@ant-design/pro-components";

export default function BaseTable<U>({
  props,
  requestFun,
  searchKey,
}: {
  props: ProTableProps<U, any>;
  requestFun?: () => Promise<CommonResponse<U[]>>;
  searchKey?: string;
}) {
  /**********************************狀態管理**********************************/
  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  /**********************************異步函數**********************************/
  return (
    <div className="rounded-[4px] bg-white">
      <ProTable
        search={false}
        pagination={{
          pageSize: 8,
        }}
        request={async () => {
          const dataSource = await requestFun().then(({ detail }) => {
            console.log("detail", detail);
            return {
              success: true,
              data: detail,
            };
          });
          if (searchKey) {
            console.log("searchKey", searchKey);
            dataSource.data = Helper({
              dataSource: dataSource.data,
              keyWord: searchKey,
            });
            return dataSource;
          } else {
            return dataSource;
          }
        }}
        {...props}
      ></ProTable>
    </div>
  );
}
