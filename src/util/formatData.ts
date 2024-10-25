import { utcToLocal } from "./utcHelper";

export function formatTimeData(data: any, key: string[], type: string): void {
  for (const prop in data) {
    if (typeof data[prop] === "object") {
      formatTimeData(data[prop], key, type); // 递归遍历嵌套对象
    } else if (key.includes(prop)) {
      // 格式化包含指定键的数据
      data[prop] = utcToLocal(data[prop], type); // 进行你的格式化操作
    }
  }
  return data;
}
