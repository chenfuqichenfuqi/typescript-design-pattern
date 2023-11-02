import { IPrototype } from "./IPrototype";
import { NestedComponent } from "./NestedComponent";

export class Prototype extends IPrototype {
  public object: Record<string, any> = { one: 1 };
  public val: number;
  public nestedComponent: NestedComponent;
  private privateKey: string;

  public setPrivateKey(value: string) {
    this.privateKey = value;
  }

  public clone(): this {
    return this.MockDeepClone(this);
    // const clone = Object.create(this);
    // clone.val = this.val;
    // clone.object = Object.create(this.object);
    // clone.nestedComponent = {
    //   ...Object.create(this.nestedComponent),
    //   prototype: clone,
    // };
    // return clone;
  }

  private MockDeepClone<T>(arg: T): T {
    return arg;
  }
}
