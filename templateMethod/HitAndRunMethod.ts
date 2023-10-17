import { StealingMethodAbstract } from "./StealingMethodAbstract";

export class HitAndRunMethod extends StealingMethodAbstract {
  protected pickTarget(): ReturnType<StealingMethodAbstract["pickTarget"]> {
    return "old goblin woman";
  }

  protected confuseTarget(target: string): void {
    console.log(`Approach the ${target} from behind.`);
  }

  protected stealTheItem(target: string): void {
    console.log(`Grab the handbag and run away fast!`);
  }
}
