export default function Helper<T>({
  dataSource,
  keyWord,
}: {
  dataSource: Record<string, any>[];
  keyWord: string | number;
}): Record<string, any>[] {
  const judgeReturn = (value: string, keyWordString: string) => {
    return value.toLowerCase().includes(keyWordString.toLowerCase());
  };

  return dataSource.filter((item) => {
    const keyList = Object.keys(item);
    const judgeResout = keyList.map((key) => {
      if (
        item[key] &&
        typeof item[key] == "string" &&
        typeof keyWord == "string"
      ) {
        return judgeReturn(item[key] as string, keyWord);
      } else if (
        item[key] &&
        typeof item[key] == "number" &&
        typeof keyWord == "number"
      ) {
        const valueString = item[key].toString();
        const keyWordString = keyWord.toString();
        return judgeReturn(valueString, keyWordString);
      } else if (
        item[key] &&
        typeof item[key] == "string" &&
        typeof keyWord == "number"
      ) {
        const keyWordString = keyWord.toString();
        return judgeReturn(item[key] as string, keyWordString);
      } else if (
        item[key] &&
        typeof item[key] == "number" &&
        typeof keyWord == "string"
      ) {
        const valueString = item[key].toString();
        return judgeReturn(valueString, keyWord);
      }
    });
    return judgeResout.includes(true);
  });
}
