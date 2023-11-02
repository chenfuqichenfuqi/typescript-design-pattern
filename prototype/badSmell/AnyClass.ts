import { NestedComponent } from "./NestedComponent";

export class AnyClass {
  public object: Record<string, any> = { one: 1 };
  public val: number;
  public nestedComponent: NestedComponent;
  private privateKey: string;

  public setPrivateKey(value: string) {
    this.privateKey = value;
  }
}
