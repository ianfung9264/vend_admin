import { ReactElement } from "react";

export default function BaseIndex({
  title,
  children,
}: {
  title: string;
  children: ReactElement[] | ReactElement;
}) {
  /**********************************狀態管理**********************************/
  /**********************************狀態管理**********************************/
  /**********************************組件初始化**********************************/
  /**********************************組件初始化**********************************/
  /**********************************異步函數**********************************/
  /**********************************異步函數**********************************/
  return (
    <div className="min-h-screen min-w">
      <div className="w-[100%] h-[80px] bg-[#FAFAFA] text-[18px] flex items-center pl-[24px] font-[400]">
        {title}
      </div>
      <div className=" min-h-[auto] m-[24px] flex flex-col gap-[24px]">
        {children}
      </div>
    </div>
  );
}
