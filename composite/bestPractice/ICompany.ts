export abstract class ICompany {
  public abstract addOrg(company: ICompany): void;
  public abstract removeOrg(company: ICompany): void;
  public abstract showOrg(): void;
}
