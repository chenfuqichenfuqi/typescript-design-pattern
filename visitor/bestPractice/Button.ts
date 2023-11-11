import { IComponent } from "./IComponent";
import { IVisitor } from "./IVisitor";

export class Button extends IComponent {
  public accept(visitor: IVisitor): void {
    visitor.visitButton(this);
  }
}
