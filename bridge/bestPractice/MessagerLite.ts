import { MessagerAbstract } from "./MessagerAbstract";

export class MessagerLite extends MessagerAbstract {
  public login(): void {
    console.log("MessagerLite->login");

    this.messagerPlatformImpl.connect();
  }

  public sendMessage(): void {
    console.log("MessagerLite->sendMessage");
    this.messagerPlatformImpl.writeText();
  }

  public sendPicture(): void {
    console.log("MessagerLite->sendPicture");
    this.messagerPlatformImpl.drawShape();
  }
}
