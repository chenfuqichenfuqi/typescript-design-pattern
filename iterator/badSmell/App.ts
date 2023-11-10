import { arr } from "./arr";
import { map } from "./map";

const main = () => {
  for (let i = 0; i < arr.length; i++) {
    console.log("arr---", arr[i]);
  }

  // 循环map
  for (const [key, value] of map) {
    console.log("map---", value);
  }
};

main();
