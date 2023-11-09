import { IDepartment } from "./IDepartment";

export abstract class IOrganization {
  public abstract addOrg(department: IDepartment): void;
  public abstract removeOrg(department: IDepartment): void;
  public abstract getName(): string;
  public abstract showOrg(): void;
  public abstract displayDuty(): void;
}
