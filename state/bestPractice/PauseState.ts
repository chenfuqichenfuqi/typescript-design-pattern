import { AudioStateAbstract } from "./AudioStateAbstract";
import { stateMap } from "./stateMap";

export class PauseState extends AudioStateAbstract {
  public play(): void {
    console.log("play");
    this.audioPlayer.setState(new stateMap.play(this.audioPlayer));
  }

  public pause(): void {
    console.log("has paused");
  }

  public stop(): void {
    console.log("stop");
    this.audioPlayer.setState(new stateMap.stop(this.audioPlayer));
  }
}
