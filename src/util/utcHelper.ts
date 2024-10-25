import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc); // 启用 UTC 插件

export function utcToLocal(time: string, format: string) {
  const localTime = dayjs.utc(time).local().format(format);
  return localTime;
}

export function localToUtc(time: string, format: string) {
  const utcTime = dayjs(time).utc().format(format);
  return utcTime;
}

export function localRangeToUtcRange(
  format: string,
  range: number,
  time?: string
) {
  if (!time) {
    time = dayjs().toString();
  }
  const start = dayjs(time).subtract(range, "day").format(format);
  const end = dayjs(time).format(format);
  return { start, end };
}
