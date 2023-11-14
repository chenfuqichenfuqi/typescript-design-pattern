import { IExpression } from "./IExpression";

export class AddExpression extends IExpression {
  constructor(private _left: IExpression, private _right: IExpression) {
    super();
  }

  public interpret(): number {
    return this._left.interpret() + this._right.interpret();
  }
}
