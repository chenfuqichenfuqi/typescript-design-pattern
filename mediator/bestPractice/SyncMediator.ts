import { MediatorAbstract } from "./MediatorAbstract";

export class SyncMediator extends MediatorAbstract {
  sync(databaseName: "mysql" | "redis" | "es", data: string): void {
    switch (databaseName) {
      case "mysql":
        this.redisDatabase.syncData(data);
        this.esDatabase.syncData(data);
        break;
      case "redis":
        break;
      case "es":
        this.mysqlDatabase.syncData(data);
        break;
      default:
        throw new Error("Unknown database name");
    }
  }
}
