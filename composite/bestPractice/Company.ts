import { ICompany } from "./ICompany";

export class Company extends ICompany {
  private _companies = new Array<ICompany>();
  constructor(private _name: string) {
    super();
  }

  public addOrg(company: ICompany): void {
    this._companies.push(company);
  }

  public removeOrg(company: ICompany): void {
    const index = this._companies.indexOf(company);
    this._companies.splice(index, 1);
  }

  public showOrg(): void {
    console.log(`\n${this._name}`);
    this._companies.forEach((company) => company.showOrg());
  }
}
