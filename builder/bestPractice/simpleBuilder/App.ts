import { ComputerBuilder } from "./ComputerBuilder";

const main = () => {
  const window = new ComputerBuilder("intel", "samsung")
    .setDisplay("window display")
    .setKeyboard("window keyboard")
    .setUsbCount(2)
    .build();

  const mac = new ComputerBuilder("apple", "samsung")
    .setDisplay("mac display")
    .setKeyboard("mac keyboard")
    .setUsbCount(2)
    .build();

  console.log(window);
  console.log("-----------------------");
  console.log(mac);
};
main();
