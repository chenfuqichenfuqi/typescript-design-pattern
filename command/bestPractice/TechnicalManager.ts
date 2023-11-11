import { Command } from "./Command";
import { Requirement } from "./Requirement";

export class TechnicalManager {
  private _command: Command;

  constructor(private _name: string) {}

  public action(requirement: Requirement): void {
    this._command.execute(requirement);
  }

  public setCommand(command: Command): void {
    this._command = command;
  }

  public undo(requirement: Requirement): void {
    this._command.undo(requirement);
  }
}
