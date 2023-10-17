import { HalflingThief } from "./HalflingThief";
import { HitAndRunMethod } from "./HitAndRunMethod";
import { SubtleMethod } from "./SubtleMethod";

const run = () => {
  const thief = new HalflingThief(new HitAndRunMethod());
  thief.steal();
  thief.changeMethod(new SubtleMethod());
  thief.steal();
};
run();
