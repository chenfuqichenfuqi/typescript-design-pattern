import { IDepartment } from "./IDepartment";

export class HumanResourceDepartment extends IDepartment {
  private _name: string = "Human Resource Department";

  public getName(): string {
    return this._name;
  }

  public duty(): void {
    console.log("Human Resource Department: Manage the employees");
  }
}
