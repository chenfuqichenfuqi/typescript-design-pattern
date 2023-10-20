import { Application } from "./Application";
import { OtherApplication } from "./OtherApplication";
import { Library } from "./Library";

const main = () => {
  const library = new Library();
  const application = new Application();

  library.step1();
  if (application.step2()) {
    library.step3();
  }

  application.step4();
  library.step5();

  console.log("---------------");
  const otherApplication = new OtherApplication();

  library.step1();
  if (otherApplication.step2()) {
    library.step3();
  }
  otherApplication.step4();
  library.step5();
};

main();
