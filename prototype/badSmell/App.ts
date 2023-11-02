import { AnyClass } from "./AnyClass";
import { NestedComponent } from "./NestedComponent";

const main = () => {
  const anyClass = new AnyClass();
  anyClass.object.one = 2;
  anyClass.val = 2;
  anyClass.nestedComponent = new NestedComponent(anyClass);
  anyClass.setPrivateKey("privateKey");

  const clone = new AnyClass();
  clone.object.one = 2;
  clone.val = 2;
  clone.nestedComponent = new NestedComponent(anyClass);
  clone.setPrivateKey("privateKey");

  console.log(anyClass, "anyClass");
  console.log("-------------------");
  console.log(clone, "clone");
};
main();
