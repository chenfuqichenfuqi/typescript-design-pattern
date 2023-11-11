import { Developer } from "./Developer";
import { Requirement } from "./Requirement";

export abstract class Command {
  constructor(protected _developer: Developer) {}
  public abstract execute(requirement: Requirement): void;
  public abstract undo(requirement: Requirement): void;
}
