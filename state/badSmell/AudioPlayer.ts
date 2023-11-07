export class AudioPlayer {
  currentState: "stop" | "play" | "pause";
  constructor() {
    this.currentState = "stop";
  }
  public play(): void {
    if (this.currentState === "stop") {
      console.log("play");
      this.currentState = "play";
    } else if (this.currentState === "pause") {
      console.log("play");
      this.currentState = "play";
    } else if (this.currentState === "play") {
      console.log("has playing");
    }
  }

  public pause(): void {
    if (this.currentState === "stop") {
      console.log("has stopped and cannot be paused");
    } else if (this.currentState === "pause") {
      console.log("has paused");
    } else if (this.currentState === "play") {
      console.log("pause");
      this.currentState = "pause";
    }
  }

  public stop(): void {
    if (this.currentState === "stop") {
      console.log("has stopped ");
    } else if (this.currentState === "pause") {
      console.log("stop");
      this.currentState = "stop";
    } else if (this.currentState === "play") {
      console.log("stop");
      this.currentState = "stop";
    }
  }
}
