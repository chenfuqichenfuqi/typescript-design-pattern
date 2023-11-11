import { Requirement } from "./Requirement";

export class Developer {
  constructor(private _name: string) {}

  public develop(requirement: Requirement): void {
    console.log(`${this._name} is developing ${requirement.getName()}`);
  }

  public suspend(requirement: Requirement): void {
    console.log(`${this._name} is suspended ${requirement.getName()}`);
  }

  public getName(): string {
    return this._name;
  }
}
