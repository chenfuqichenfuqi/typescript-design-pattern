import { AudioStateAbstract } from "./AudioStateAbstract";
import { stateMap } from "./stateMap";

export class PlayState extends AudioStateAbstract {
  public play(): void {
    console.log("has playing");
  }

  public pause(): void {
    console.log("pause");
    this.audioPlayer.setState(new stateMap.pause(this.audioPlayer));
  }

  public stop(): void {
    console.log("stop");
    this.audioPlayer.setState(new stateMap.stop(this.audioPlayer));
  }
}
