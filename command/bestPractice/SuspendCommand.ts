import { Command } from "./Command";
import { Requirement } from "./Requirement";

export class SuspendCommand extends Command {
  public execute(requirement: Requirement): void {
    console.log(
      `${this._developer.getName()} is suspended ${requirement.getName()}`
    );
  }

  public undo(requirement: Requirement): void {
    console.log(
      `${this._developer.getName()} is undo suspend ${requirement.getName()}`
    );
  }
}
