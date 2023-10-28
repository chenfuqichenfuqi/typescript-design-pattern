import { PCMessagerBaseAbstract } from "./PCMessagerBaseAbstract";

export class PCMessagerLite extends PCMessagerBaseAbstract {
  public login(): void {
    console.log("PCMessagerLite Login");
    this.connect();
  }
  public sendMessage(): void {
    console.log("PCMessagerLite SendMessage");
    this.writeText();
  }

  public sendPicture(): void {
    console.log("PCMessagerLite SendPicture");
    this.drawShape();
  }
}
