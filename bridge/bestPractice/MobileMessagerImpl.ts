import { MessagerPlatformImplAbstract } from "./MessagerPlatformImplAbstract";

export class MobileMessagerImpl extends MessagerPlatformImplAbstract {
  public playSound(): void {
    console.log("MobileMessagerImpl->playSound");
  }

  public drawShape(): void {
    console.log("MobileMessagerImpl->drawShape");
  }

  public writeText(): void {
    console.log("MobileMessagerImpl->writeText");
  }

  public connect(): void {
    console.log("MobileMessagerImpl->connect");
  }
}
