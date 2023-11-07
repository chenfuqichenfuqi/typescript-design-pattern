export abstract class IDatabase {
  abstract addData(data: string): void;
  abstract syncData(data: string): void;
}
