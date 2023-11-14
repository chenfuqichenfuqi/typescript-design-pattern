import { AddExpression } from "./AddExpression";
import { IExpression } from "./IExpression";
import { NumberExpression } from "./NumberExpression";
import { SubtractExpression } from "./SubtractExpression";

export class ExpressionParser {
  parse(parse: string): IExpression {
    const tokens = parse.split("");
    let currentExpression: IExpression;

    for (let i = 0; i < tokens.length; i++) {
      if (!isNaN(Number(tokens[i]))) {
        currentExpression = new NumberExpression(Number(tokens[i]));
      } else if (tokens[i] === "+") {
        const rightExpression = new NumberExpression(Number(tokens[++i]));
        currentExpression = new AddExpression(
          currentExpression!,
          rightExpression
        );
      } else if (tokens[i] === "-") {
        const rightExpression = new NumberExpression(Number(tokens[++i]));
        currentExpression = new SubtractExpression(
          currentExpression!,
          rightExpression
        );
      }
    }

    return currentExpression!;
  }
}
