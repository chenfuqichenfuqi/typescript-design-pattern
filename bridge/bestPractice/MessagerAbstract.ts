import { MessagerPlatformImplAbstract } from "./MessagerPlatformImplAbstract";

export abstract class MessagerAbstract {
  constructor(protected messagerPlatformImpl: MessagerPlatformImplAbstract) {}
  public abstract login(): void;
  public abstract sendMessage(): void;
  public abstract sendPicture(): void;
}
