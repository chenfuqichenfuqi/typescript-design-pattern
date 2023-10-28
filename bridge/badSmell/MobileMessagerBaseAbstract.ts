import { MessagerAbstract } from "./MessagerAbstract";

export abstract class MobileMessagerBaseAbstract extends MessagerAbstract {
  public playSound(): void {
    console.log("MobileMessagerBaseAbstract playSound");
  }

  public drawShape(): void {
    console.log("MobileMessagerBaseAbstract drawShape");
  }

  public writeText(): void {
    console.log("MobileMessagerBaseAbstract writeText");
  }

  public connect(): void {
    console.log("MobileMessagerBaseAbstract connect");
  }
}
