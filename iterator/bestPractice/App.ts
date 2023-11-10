import { arr } from "./arr";
import { map } from "./map";
import { ArrIterator } from "./ArrIterator";
import { MapIterator } from "./MapIterator";

const main = () => {
  const arrIterator = new ArrIterator(arr);
  const mapIterator = new MapIterator(map);

  for (const arr of arrIterator) {
    console.log("arr---", arr);
  }

  for (const map of mapIterator) {
    console.log("map---", map);
  }
};
main();
