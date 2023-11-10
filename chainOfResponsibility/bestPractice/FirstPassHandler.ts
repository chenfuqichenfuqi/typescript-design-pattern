import { HandlerAbstract } from "./HandlerAbstract";

export class FirstPassHandler extends HandlerAbstract {
  protected play(): string {
    return "PASS";
  }

  public handler(): void {
    console.log("FirstPassHandler");

    const pass = this.play();
    if (pass === "PASS") {
      if (this.nextHandler != null) {
        return this.nextHandler.handler();
      } else {
        console.log("You have passed all the passes");
      }
    }
  }
}
