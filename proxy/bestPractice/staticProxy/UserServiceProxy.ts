import { UserService } from "./UserService";
export class UserServiceProxy extends UserService {
  public login(username: string, password: string): boolean {
    const start = Date.now();
    const login = super.login(username, password);
    const end = Date.now();

    console.log(`login time: ${end - start}`);
    return login;
  }
  public async sign(): Promise<void> {
    const start = Date.now();
    await super.sign();
    const end = Date.now();

    console.log(`sign time: ${end - start}`);
  }
}
