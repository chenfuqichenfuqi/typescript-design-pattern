import { LibraryAbstract } from "./LibraryAbstract";

export class OtherApplication extends LibraryAbstract {
  protected step2(): boolean {
    console.log("OtherApplication->Step2");
    return true;
  }

  protected step4(): void {
    console.log("OtherApplication->Step4");
  }
}
