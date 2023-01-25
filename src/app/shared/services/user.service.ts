import {Injectable} from '@angular/core';
import {User, users} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getByEmail(email: string): User {
    return users.find(user => user.email === email) as User;
  }

  getAll(): User[] {
    return users;
  }

  exists(user: User): boolean {
    return users.some(u => u.email === user.email && u.password === user.password);
  }

}
