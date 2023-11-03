export class DatabaseSingleton {
  private static instance: DatabaseSingleton;

  private constructor() {
    this.connect();
  }

  static getInstance(): DatabaseSingleton {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
    }

    return DatabaseSingleton.instance;
  }

  private connect() {
    console.log("Database connected");
  }

  insert(data: string) {
    console.log(`Data inserted->${data}`);
  }
}
