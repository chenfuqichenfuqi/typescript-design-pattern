import { Memento } from "./Memento";

export class Boy {
  private _state: string;

  public changeState(): void {
    this.setState("bad");
  }

  public getState(): string {
    return this._state;
  }

  public setState(state: string): void {
    this._state = state;
  }

  public createMemento(): Memento {
    return new Memento(this._state);
  }

  public restoreMemento(memento: Memento): void {
    this._state = memento.getState();
  }
}
