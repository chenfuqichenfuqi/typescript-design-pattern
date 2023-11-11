import { Developer } from "./Developer";
import { Requirement } from "./Requirement";
import { TechnicalManager } from "./TechnicalManager";

const main = () => {
  const developer = new Developer("John");
  const requirement = new Requirement("add page");
  const technicalManager = new TechnicalManager("Fuck TechnicalManager");

  technicalManager.setDeveloper(developer);
  technicalManager.action(requirement, "develop");
  technicalManager.action(requirement, "suspend");
};
main();
