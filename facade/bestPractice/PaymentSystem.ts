import { OrderSystem } from "./OrderSystem";

export class PaymentSystem {
  constructor(private orderSystem: OrderSystem) {}
  public getOrderAccount() {
    console.log("get order account");
    return 100;
  }
}
