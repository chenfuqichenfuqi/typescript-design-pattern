import { MobileMessagerBaseAbstract } from "./MobileMessagerBaseAbstract";

export class MobileMessagerPerfect extends MobileMessagerBaseAbstract {
  public login(): void {
    console.log("MobileMessagerPerfect Login");
    this.playSound();
    this.connect();
  }
  public sendMessage(): void {
    console.log("MobileMessagerPerfect SendMessage");
    this.playSound();
    this.writeText();
  }

  public sendPicture(): void {
    console.log("MobileMessagerPerfect SendPicture");
    this.playSound();
    this.drawShape();
  }
}
