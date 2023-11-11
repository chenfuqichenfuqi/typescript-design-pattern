import { IVisitor } from "./IVisitor";

export abstract class IComponent {
  public abstract accept(visitor: IVisitor): void;
}
