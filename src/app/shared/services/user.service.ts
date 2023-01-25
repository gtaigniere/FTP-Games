import {Injectable} from '@angular/core';
import {User, users} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getByEmail(email: string): User|null {
    for (let u of users) {
      if (u.email === email) {
        const user: User = {
          email: u.email,
          password: u.password
        }
        return user;
      }
    }
    return null;
  }

  getAll(): User[] {
    return users;
  }

  verifPwd(currentUser: User, user: User): boolean {
    if (currentUser.password === user.password) {
      return true;
    }
    return false;
  }

}
