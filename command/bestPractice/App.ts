import { DevelopCommand } from "./DevelopCommand";
import { Developer } from "./Developer";
import { Requirement } from "./Requirement";
import { SuspendCommand } from "./SuspendCommand";
import { TechnicalManager } from "./TechnicalManager";

const main = () => {
  const developer = new Developer("John");
  const developCommand = new DevelopCommand(developer);
  const suspendCommand = new SuspendCommand(developer);
  const requirement = new Requirement("add page");
  const technicalManager = new TechnicalManager("Fuck TechnicalManager");

  technicalManager.setCommand(developCommand);
  technicalManager.action(requirement);
  technicalManager.undo(requirement);

  technicalManager.setCommand(suspendCommand);
  technicalManager.action(requirement);
  technicalManager.undo(requirement);
};
main();
