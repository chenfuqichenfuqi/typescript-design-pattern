import { Button } from "./Button";
import { IVisitor } from "./IVisitor";
import { Input } from "./Input";

export class EventVisitor extends IVisitor {
  public visitButton(button: Button): void {
    console.log("Button: addEvent");
  }

  public visitInput(input: Input): void {
    console.log("Input: addEvent");
  }
}
