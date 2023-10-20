import { LibraryAbstract } from "./LibraryAbstract";

export class Application extends LibraryAbstract {
  protected step2(): boolean {
    console.log("Application->Step2");
    return true;
  }

  protected step4(): void {
    console.log("Application->Step4");
  }
}
