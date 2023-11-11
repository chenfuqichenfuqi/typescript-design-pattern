import { Button } from "./Button";
import { EventVisitor } from "./EventVisitor";
import { Input } from "./Input";
import { StyleVisitor } from "./StyleVisitor";

const main = () => {
  const button = new Button();
  const input = new Input();
  const styleVisitor = new StyleVisitor();
  const eventVisitor = new EventVisitor();

  button.accept(styleVisitor);
  button.accept(eventVisitor);
  input.accept(styleVisitor);
  input.accept(eventVisitor);
};
main();
