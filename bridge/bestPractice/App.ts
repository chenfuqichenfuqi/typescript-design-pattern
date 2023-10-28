import { MessagerLite } from "./MessagerLite";
import { MessagerPerfect } from "./MessagerPerfect";
import { MobileMessagerImpl } from "./MobileMessagerImpl";
import { PCMessagerImpl } from "./PCMessagerImpl";

const main = () => {
  const mobileMessagerImpl = new MobileMessagerImpl();
  const pcMessagerImpl = new PCMessagerImpl();

  const pcMessagerLite = new MessagerLite(pcMessagerImpl);
  const pcMessagerPerfect = new MessagerPerfect(pcMessagerImpl);

  const mobileMessagerLite = new MessagerLite(mobileMessagerImpl);
  const mobileMessagerPerfect = new MessagerPerfect(mobileMessagerImpl);

  [
    pcMessagerLite,
    pcMessagerPerfect,
    mobileMessagerLite,
    mobileMessagerPerfect,
  ].forEach((messager) => {
    messager.login();
    messager.sendMessage();
    messager.sendPicture();
    console.log("-------------------------");
  });
};
main();
