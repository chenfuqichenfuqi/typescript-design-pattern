import { ComputerDirector } from "./ComputerDirector";
import { MacComputerBuilder } from "./MacComputerBuilder";

const main = () => {
  const director = new ComputerDirector();
  const windowBuilder = new MacComputerBuilder("intel", "samsung");
  director.makeComputer(windowBuilder);
  const windowComputer = windowBuilder.getComputer();

  console.log(windowComputer);

  console.log("-----------------------");

  const macBuilder = new MacComputerBuilder("apple", "samsung");
  director.makeComputer(macBuilder);
  const macComputer = macBuilder.getComputer();

  console.log(macComputer);
};
main();
