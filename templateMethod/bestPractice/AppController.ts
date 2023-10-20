import { LibraryAbstract } from "./LibraryAbstract";

export class AppController {
  private _app: LibraryAbstract;
  constructor(app: LibraryAbstract) {
    this._app = app;
  }

  public run() {
    this._app.run();
  }

  public changeApp(app: LibraryAbstract) {
    this._app = app;
  }
}
