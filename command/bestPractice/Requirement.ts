export class Requirement {
  constructor(private _name: string) {}

  getName(): string {
    return this._name;
  }
}
