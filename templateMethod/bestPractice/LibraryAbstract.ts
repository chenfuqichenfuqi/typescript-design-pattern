export abstract class LibraryAbstract {
  public run(): void {
    this._step1();

    if (this.step2()) {
      this._step3();
    }

    this.step4();
    this._step5();
  }

  private _step1(): void {
    console.log("LibraryAbstract->step1");
  }

  private _step3(): void {
    console.log("LibraryAbstract->step3");
  }

  private _step5(): void {
    console.log("LibraryAbstract->step5");
  }

  protected abstract step2(): boolean;

  protected abstract step4(): void;
}
