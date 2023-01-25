import {Injectable} from '@angular/core';
import {User, users} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getByEmail(email: string): User|null {
    for (let u of users) {
      if (u.email === email) {
        const user: User = {
          nickname: '',
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

  exists(user: User): boolean {
    return users.some(u => u.email === user.email && u.password === user.password);
  }

}
