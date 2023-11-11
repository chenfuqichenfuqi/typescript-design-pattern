import { Developer } from "./Developer";
import { Requirement } from "./Requirement";

export class TechnicalManager {
  private _developer: Developer;

  constructor(private _name: string) {}

  public setDeveloper(developer: Developer): void {
    this._developer = developer;
  }

  public getName(): string {
    return this._name;
  }

  public action(requirement: Requirement, type: "develop" | "suspend"): void {
    if (type === "develop") this._developer.develop(requirement);
    else if (type === "suspend") this._developer.suspend(requirement);
  }
}
