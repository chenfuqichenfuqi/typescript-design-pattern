export class MicrosoftFont {
  private _type = "Microsoft" as const;

  public getType() {
    return this._type;
  }
}
