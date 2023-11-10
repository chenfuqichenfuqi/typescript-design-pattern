import { FinalPassHandler } from "./FinalpassHandle";
import { FirstPassHandler } from "./FirstPassHandler";
import { SecondPassHandler } from "./SecondPassHandler";

const main = () => {
  const firstPassHandler = new FirstPassHandler();
  const secondPassHandler = new SecondPassHandler();
  const thirdPassHandler = new FinalPassHandler();
  if (firstPassHandler.handle() === "pass") {
    if (secondPassHandler.handle() === "pass") {
      if (thirdPassHandler.handle() === "pass") {
        console.log("You have passed all the passes");
      }
    }
  }
};
main();
