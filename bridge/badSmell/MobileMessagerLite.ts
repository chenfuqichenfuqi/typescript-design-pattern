import { MobileMessagerBaseAbstract } from "./MobileMessagerBaseAbstract";

export class MobileMessagerLite extends MobileMessagerBaseAbstract {
  public login(): void {
    console.log("MobileMessagerLite Login");
    this.connect();
  }
  public sendMessage(): void {
    console.log("MobileMessagerLite SendMessage");
    this.writeText();
  }

  public sendPicture(): void {
    console.log("MobileMessagerLite SendPicture");
    this.drawShape();
  }
}
