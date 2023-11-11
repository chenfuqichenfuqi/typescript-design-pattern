import { Button } from "./Button";
import { Input } from "./Input";

export abstract class IVisitor {
  public abstract visitButton(button: Button): void;
  public abstract visitInput(input: Input): void;
}
