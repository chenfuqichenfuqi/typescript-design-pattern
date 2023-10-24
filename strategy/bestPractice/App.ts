import { UIComponentMap } from "./UIComponentMap";
import { UIComponentRenderer } from "./UIComponentRenderer";

const main = () => {
  const renderer = new UIComponentRenderer();

  renderer.setStrategy(UIComponentMap.get("button")!);
  renderer.render();

  renderer.setStrategy(UIComponentMap.get("input")!);
  renderer.render();

  renderer.setStrategy(UIComponentMap.get("select")!);
  renderer.render();
};
main();
