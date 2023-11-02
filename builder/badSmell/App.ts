import { Computer } from "./Computer";

const main = () => {
  const window = new Computer(
    "intel",
    "samsung",
    2,
    "window keyboard",
    "window display"
  );
  const mac = new Computer(
    "apple",
    "samsung",
    2,
    "mac keyboard",
    "mac display"
  );

  console.log(window);
  console.log("-----------------------");
  console.log(mac);
};
main();
