import { ICompany } from "./ICompany";

export class HumanResourceDepartment extends ICompany {
  constructor(private _name: string) {
    super();
  }
  public addOrg(company: ICompany): void {}

  public removeOrg(company: ICompany): void {}

  public showOrg(): void {
    console.log(`\n${this._name}`);
  }
}
