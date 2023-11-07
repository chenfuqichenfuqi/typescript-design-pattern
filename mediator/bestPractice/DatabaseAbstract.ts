export abstract class DatabaseAbstract {
  constructor(protected mediator: any) {}
  abstract addData(data: string): void;
  abstract syncData(data: string): void;
}
