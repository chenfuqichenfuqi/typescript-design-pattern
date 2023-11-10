import { FinalPassHandler } from "./FinalPassHandler";
import { FirstPassHandler } from "./FirstPassHandler";
import { SecondPassHandler } from "./SecondPassHandler";

const main = () => {
  const firstPassHandler = new FirstPassHandler();
  const secondPassHandler = new SecondPassHandler();
  const thirdPassHandler = new FinalPassHandler();

  firstPassHandler.setNext(secondPassHandler);
  secondPassHandler.setNext(thirdPassHandler);

  firstPassHandler.handler();
};

main();
