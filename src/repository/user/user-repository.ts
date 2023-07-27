import { readFileConverter } from "@/utils/files/readFileConvertesr";

class UserRepository {
  public getAllUsers() {
    return readFileConverter("./db/user.json") as User[];
  }
  public getFirstUser() {
    return this.getAllUsers()[0];
  }
}

export const userRepository = new UserRepository();
