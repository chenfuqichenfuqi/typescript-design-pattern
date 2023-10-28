import { PCMessagerBaseAbstract } from "./PCMessagerBaseAbstract";

export class PCMessagerPerfect extends PCMessagerBaseAbstract {
  public login(): void {
    console.log("PCMessagerPerfect Login");
    this.playSound();
    this.connect();
  }
  public sendMessage(): void {
    console.log("PCMessagerPerfect SendMessage");
    this.playSound();
    this.writeText();
  }

  public sendPicture(): void {
    console.log("PCMessagerPerfect SendPicture");
    this.playSound();
    this.drawShape();
  }
}
