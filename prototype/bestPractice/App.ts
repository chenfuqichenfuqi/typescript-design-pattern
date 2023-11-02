import { Prototype } from "./Prototype";
import { NestedComponent } from "./NestedComponent";
const main = () => {
  const prototype = new Prototype();
  prototype.val = 2;
  prototype.object = { one: 2 };
  prototype.nestedComponent = new NestedComponent(prototype);
  prototype.setPrivateKey("privateKey");

  const clone = prototype.clone();

  console.log(prototype, "prototype");
  console.log("-------------------");
  console.log(clone, "clone");
};
main();
