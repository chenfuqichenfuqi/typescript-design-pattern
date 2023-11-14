const main = () => {
  const add = (_sum: string) => {
    const tokens = _sum.split("+");
    let result: number = 0;
    for (let i = 0; i < tokens.length; i++) {
      result += Number(tokens[i]);
    }
    return result;
  };

  const addResult = add("1+2+3");
  console.log(addResult);

  const addAndSubtract = (_sum: string) => {
    const parts = _sum.split("+");
    let result: number = 0;
    for (let i = 0; i < parts.length; i++) {
      const subParts = parts[i].split("-");
      let subResult = Number(subParts[0]);
      for (let j = 1; j < subParts.length; j++) {
        subResult -= Number(subParts[j]);
      }
      result += subResult;
    }
    return result;
  };

  const addAndSubtractResult = addAndSubtract("1+2+3-4");
  console.log(addAndSubtractResult);
};

main();
