export class Memento {
  constructor(private _state: string) {}

  public getState(): string {
    return this._state;
  }

  public setState(state: string): void {
    this._state = state;
  }
}
