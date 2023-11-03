export class Database {
  constructor() {
    this.connect();
  }

  private connect() {
    console.log("Database connected");
  }

  insert(data: string) {
    console.log(`Data inserted->${data}`);
  }
}
