export class ArrIterator<T> {
  private _index = 0;
  constructor(private readonly _arr: T[]) {}

  [Symbol.iterator](): Iterator<T> {
    return {
      next: () => {
        if (this._index < this._arr.length) {
          return {
            done: false,
            value: this._arr[this._index++],
          };
        } else {
          return {
            done: true,
            value: null,
          };
        }
      },
    };
  }
}
