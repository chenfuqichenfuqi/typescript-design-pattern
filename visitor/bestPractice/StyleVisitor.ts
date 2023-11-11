import { Button } from "./Button";
import { IVisitor } from "./IVisitor";
import { Input } from "./Input";

export class StyleVisitor extends IVisitor {
  public visitButton(button: Button): void {
    console.log("Button: addStyle");
  }

  public visitInput(input: Input): void {
    console.log("Input: addStyle");
  }
}
