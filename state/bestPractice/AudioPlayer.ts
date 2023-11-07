import { AudioStateAbstract } from "./AudioStateAbstract";
import { stateMap } from "./stateMap";

export class AudioPlayer {
  currentState: AudioStateAbstract;
  constructor() {
    this.currentState = new stateMap.stop(this);
  }

  public setState(state: AudioStateAbstract): void {
    this.currentState = state;
  }

  public play(): void {
    this.currentState.play();
  }

  public pause(): void {
    this.currentState.pause();
  }

  public stop(): void {
    this.currentState.stop();
  }
}
