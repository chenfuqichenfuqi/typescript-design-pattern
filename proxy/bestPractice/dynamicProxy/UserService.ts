export class UserService {
  public login(username: string, password: string): boolean {
    console.log(username + "->username");
    console.log(password + "->password");
    return true;
  }

  public async sign(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("sign");
        resolve();
      }, 50);
    });
  }
}
