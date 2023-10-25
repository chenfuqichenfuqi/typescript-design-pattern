import { TCustomer } from "../badSmell/otherCustomer";

export class Observer {
  constructor(public update: (customer: TCustomer) => void) {}
}
