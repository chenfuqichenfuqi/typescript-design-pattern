export class DynamicProxy {
  public createLogProxy<T extends object>(target: T): T {
    const proxy = new Proxy(target, {
      get: (_target: any, property) => {
        const _val = _target[property];
        if (!this._isFunction(_val)) return Reflect.get(_target, property);

        if (this._isPromise(_val))
          return (...arg: any[]) =>
            this._timeLogAsync(
              property,
              async () => await _val.apply(this, arg)
            );

        return (...arg: any[]) =>
          this._timeLog(property, () => _val.apply(this, arg));
      },
    });
    return proxy;
  }

  private _isFunction(func: any): boolean {
    return typeof func === "function";
  }

  private _isPromise(func: Function): boolean {
    return Reflect.get(func, Symbol.toStringTag) == "AsyncFunction";
  }

  private async _timeLogAsync(
    key: string | symbol,
    fn: Function
  ): Promise<void> {
    return new Promise(async (resolve) => {
      const start = Date.now();
      await fn();
      const end = Date.now();
      console.log(`${String(key)} time: ${end - start}`);
      resolve();
    });
  }

  private _timeLog(key: string | symbol, fn: Function): void {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(`${String(key)} time: ${end - start}`);
  }
}
