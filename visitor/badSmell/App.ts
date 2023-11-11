import { Button } from "./Button";
import { Input } from "./Input";

const main = () => {
  const button = new Button();
  button.addStyle();
  button.addEvent();

  const input = new Input();
  input.addStyle();
  input.addEvent();
};
main();
