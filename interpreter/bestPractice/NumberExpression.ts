import { IExpression } from "./IExpression";

export class NumberExpression extends IExpression {
  constructor(private _number: number) {
    super();
  }

  public interpret(): number {
    return this._number;
  }
}
