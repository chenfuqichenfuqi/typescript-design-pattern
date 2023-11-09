import { IDepartment } from "./IDepartment";
import { IOrganization } from "./IOrganization";

export class Headquarters extends IOrganization {
  private _departments: IDepartment[] = [];
  private _name: string = "Headquarters";
  public addOrg(department: IDepartment): void {
    this._departments.push(department);
  }

  public removeOrg(department: IDepartment): void {
    this._departments = this._departments.filter((d) => d !== department);
  }

  public getName(): string {
    return this._name;
  }

  public showOrg(): void {
    this._departments.forEach((department) =>
      console.log(department.getName())
    );
  }

  public displayDuty(): void {
    this._departments.forEach((department) => department.duty());
  }
}
