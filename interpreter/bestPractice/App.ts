import { ExpressionParser } from "./ExpressionParser";

const main = () => {
  const expression = new ExpressionParser().parse("5+3-2");
  const result = expression.interpret();
  console.log(result);
};
main();
