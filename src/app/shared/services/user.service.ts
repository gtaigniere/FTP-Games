import {Injectable} from '@angular/core';
import {User, users} from "../models/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
  ) { }

  getAll(): Observable<User[]> {
    return of(users);
  }

  getByEmail(email: string): Observable<User> {
    return of(users.find(user => user.email === email)) as Observable<User>;
  }

  getUserRole(): string {
    return localStorage.getItem('role') as string;
  }

  isUserInRole(role: string): boolean {
    return role === this.getUserRole();
  }

}
