import { Command } from "./Command";
import { Requirement } from "./Requirement";
export class DevelopCommand extends Command {
  public execute(requirement: Requirement): void {
    console.log(
      `${this._developer.getName()} is developing ${requirement.getName()}`
    );
  }

  public undo(requirement: Requirement): void {
    console.log(
      `${this._developer.getName()} is undo develop ${requirement.getName()}`
    );
  }
}
