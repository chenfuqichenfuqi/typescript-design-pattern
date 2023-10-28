import { MessagerAbstract } from "./MessagerAbstract";

export class MessagerPerfect extends MessagerAbstract {
  public login(): void {
    console.log("MessagerPerfect->login");
    this.messagerPlatformImpl.playSound();
    this.messagerPlatformImpl.connect();
  }

  public sendMessage(): void {
    console.log("MessagerPerfect->sendMessage");
    this.messagerPlatformImpl.playSound();
    this.messagerPlatformImpl.writeText();
  }

  public sendPicture(): void {
    console.log("MessagerPerfect->sendPicture");
    this.messagerPlatformImpl.playSound();
    this.messagerPlatformImpl.drawShape();
  }
}
