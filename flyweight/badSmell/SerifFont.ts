export class SerifFont {
  private _type = "Serif" as const;

  public getType() {
    return this._type;
  }
}
