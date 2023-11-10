export class MapIterator<T> {
  private _keys: readonly string[];
  private _index = 0;
  constructor(private readonly _map: Map<string, T>) {
    this._keys = [..._map.keys()];
  }

  [Symbol.iterator](): Iterator<T> {
    return {
      next: () => {
        if (this._index < this._keys.length) {
          const key = this._keys[this._index++];
          return {
            done: false,
            value: this._map.get(key)!,
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
