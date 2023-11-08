import { Memento } from "./Memento";

export class Caretaker {
  private _memento: Memento;

  public getMemento(): Memento {
    return this._memento;
  }
  public setMemento(memento: Memento): void {
    this._memento = memento;
  }
}
