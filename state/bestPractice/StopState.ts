import { AudioStateAbstract } from "./AudioStateAbstract";
import { stateMap } from "./stateMap";

export class StopState extends AudioStateAbstract {
  public play(): void {
    console.log("play");
    this.audioPlayer.setState(new stateMap.play(this.audioPlayer));
  }

  public pause(): void {
    console.log("has stopped and cannot be paused");
  }

  public stop(): void {
    console.log("has stopped ");
  }
}
