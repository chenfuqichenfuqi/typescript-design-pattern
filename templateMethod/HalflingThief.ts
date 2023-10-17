import { StealingMethodAbstract } from "./StealingMethodAbstract";

export class HalflingThief {
  private method: StealingMethodAbstract;

  constructor(method: StealingMethodAbstract) {
    this.method = method;
  }

  public steal(): void {
    this.method.steal();
  }

  public changeMethod(method: StealingMethodAbstract): void {
    this.method = method;
  }
}
