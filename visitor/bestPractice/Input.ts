import { IComponent } from "./IComponent";
import { IVisitor } from "./IVisitor";

export class Input extends IComponent {
  public accept(visitor: IVisitor) {
    visitor.visitInput(this);
  }
}
