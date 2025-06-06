import Helper from "@/util/searchHelper";
import { ProTable, ProTableProps } from "@ant-design/pro-components";

export default function BaseTable<U>({
  props,
  requestFun,
  searchKey,
}: {
  props: ProTableProps<any, any>;
  requestFun?: () => Promise<{ detail: U[] }>;
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
      <ProTable<any>
        search={false}
        pagination={{
          pageSize: 8,
        }}
        request={async (params, sort, filter) => {
          // Determine which request function to use
          let rawData: any[] = [];

          if (requestFun) {
            // Preferred: use the provided requestFun which should return { detail }
            try {
              const res = await requestFun();
              rawData = res?.detail ?? [];
            } catch (error) {
              console.error("BaseTable requestFun error:", error);
            }
          } else if (props.request) {
            // Fallback: use request defined inside props
            try {
              const res: any = await props.request(params, sort, filter);
              // Ant Design ProTable expects the function to return { data, success }
              if (res && res.success) {
                return res;
              }
              rawData = res?.data ?? [];
            } catch (error) {
              console.error("BaseTable props.request error:", error);
            }
          }

          let filteredData = rawData;
          if (searchKey) {
            filteredData = Helper({ dataSource: rawData, keyWord: searchKey });
          }

          return {
            success: true,
            data: filteredData,
            total: filteredData.length,
          };
        }}
        {...(props as any)}
      ></ProTable>
    </div>
  );
}
