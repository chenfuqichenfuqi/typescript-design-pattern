import { IDepartment } from "./IDepartment";

export class FinanceDepartment extends IDepartment {
  private _name: string = "Finance Department";

  public getName(): string {
    return this._name;
  }

  public duty(): void {
    console.log("Finance Department: Manage the money");
  }
}
