import { MessagerPlatformImplAbstract } from "./MessagerPlatformImplAbstract";

export class PCMessagerImpl extends MessagerPlatformImplAbstract {
  public playSound(): void {
    console.log("PCMessagerImpl->playSound");
  }

  public drawShape(): void {
    console.log("PCMessagerImpl->drawShape");
  }

  public writeText(): void {
    console.log("PCMessagerImpl->writeText");
  }

  public connect(): void {
    console.log("PCMessagerImpl->connect");
  }
}
