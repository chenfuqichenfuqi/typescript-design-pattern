export enum PickTargeEnum {
  shopKeeper = "shop keeper",
  oldGoblinWoman = "old goblin woman",
}

export type IPickTarget = `${PickTargeEnum}`;

export abstract class StealingMethodAbstract {
  protected abstract pickTarget(): IPickTarget;

  protected abstract confuseTarget(target: string): void;

  protected abstract stealTheItem(target: string): void;

  public steal(): void {
    const target = this.pickTarget();
    console.log(`The target has been chosen as ${target}.`);

    this.confuseTarget(target);
    this.stealTheItem(target);
  }
}
