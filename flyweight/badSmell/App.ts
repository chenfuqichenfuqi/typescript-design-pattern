import { HeitiFont } from "./HeitiFont";
import { MicrosoftFont } from "./MicrosoftFont";
import { SerifFont } from "./SerifFont";

const main = () => {
  const heitiFont = new HeitiFont().getType();
  const microsoftFont = new MicrosoftFont().getType();
  const serifFont = new SerifFont().getType();
  console.log(heitiFont);
  console.log(microsoftFont);
  console.log(serifFont);
};
main();
