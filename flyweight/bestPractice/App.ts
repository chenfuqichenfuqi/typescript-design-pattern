import { FontFactory } from "./FontFactory";

const main = () => {
  const Heiti = FontFactory.getFont("Heiti");
  const Microsoft = FontFactory.getFont("Microsoft");
  const Serif = FontFactory.getFont("Serif");
  console.log(Heiti.getType());
  console.log(Microsoft.getType());
  console.log(Serif.getType());
};
main();
