import { AppController } from "./AppController";
import { Application } from "./Application";
import { OtherApplication } from "./OtherApplication";
const main = () => {
  const app = new AppController(new Application());

  app.run();

  console.log("---------------");
  app.changeApp(new OtherApplication());

  app.run();
};

main();
