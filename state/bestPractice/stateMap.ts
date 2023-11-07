import { PauseState } from "./PauseState";
import { PlayState } from "./PlayState";
import { StopState } from "./StopState";

export const stateMap = {
  stop: StopState,
  play: PlayState,
  pause: PauseState,
};
