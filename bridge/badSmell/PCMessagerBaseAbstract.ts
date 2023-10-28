import { MessagerAbstract } from "./MessagerAbstract";
export abstract class PCMessagerBaseAbstract extends MessagerAbstract {
  public playSound(): void {
    console.log("PCMessagerBaseAbstract playSound");
  }

  public drawShape(): void {
    console.log("PCMessagerBaseAbstract drawShape");
  }

  public writeText(): void {
    console.log("PCMessagerBaseAbstract writeText");
  }

  public connect(): void {
    console.log("PCMessagerBaseAbstract connect");
  }
}
