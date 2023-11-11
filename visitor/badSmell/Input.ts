import { IComponent } from "./IComponent";

export class Input extends IComponent {
  public addStyle(): void {
    console.log("Input: addStyle");
  }
  public addEvent(): void {
    console.log("Input: addEvent");
  }
}
