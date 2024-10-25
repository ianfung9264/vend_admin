export function getLogStr(recordBody: Record<string, any>) {
  let log = "";
  Object.keys(recordBody).map((pre) => {
    console.log("log", log);
    log = log + `將${pre}修改成${recordBody[pre]}\n `;
  });
  return log;
}
