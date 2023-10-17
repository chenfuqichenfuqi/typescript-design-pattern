import { StealingMethodAbstract } from "./StealingMethodAbstract";

export class SubtleMethod extends StealingMethodAbstract {
  protected pickTarget(): ReturnType<StealingMethodAbstract["pickTarget"]> {
    return "shop keeper";
  }

  protected confuseTarget(target: string): void {
    console.log(`Approach the ${target} with tears running and hug him!`);
  }

  protected stealTheItem(target: string): void {
    console.log(`While in close contact grab the ${target}'s wallet.`);
  }
}
