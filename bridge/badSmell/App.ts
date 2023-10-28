import { MobileMessagerLite } from "./MobileMessagerLite";
import { MobileMessagerPerfect } from "./MobileMessagerPerfect";
import { PCMessagerLite } from "./PCMessagerLite";
import { PCMessagerPerfect } from "./PCMessagerPerfect";

const main = () => {
  const mobileMessagerLite = new MobileMessagerLite();
  const mobileMessagerPerfect = new MobileMessagerPerfect();
  const pcMessagerLite = new PCMessagerLite();
  const pcMessagerPerfect = new PCMessagerPerfect();
  [
    mobileMessagerLite,
    mobileMessagerPerfect,
    pcMessagerLite,
    pcMessagerPerfect,
  ].forEach((messager) => {
    messager.login();
    messager.sendMessage();
    messager.sendPicture();
    console.log("----------------------------------");
  });
};

main();
