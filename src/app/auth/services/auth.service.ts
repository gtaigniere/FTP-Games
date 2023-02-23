import {Injectable} from '@angular/core';
import {LoginRequestPayload} from "../models/login-request-payload";
import {users} from "../../shared/models/user";
import {Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'https://free-to-play-games-database.p.rapidapi.com/api';

  private logger = new Subject<boolean>();

  constructor(
  ) {
  }

  login(requestPayLoad: LoginRequestPayload): Observable<boolean> {
    const userFind = users.find(
      user => user.email === requestPayLoad.email
        && user.password === requestPayLoad.password
    );
    if (!userFind) {
      return of(false);
    }
    localStorage.setItem('username', userFind.username);
    localStorage.setItem('role', userFind.role);
    this.logger.next(true);
    return of(true);
  }

  logout() {
    localStorage.clear();
    this.logger.next(false);
    console.log('A bientôt');
  }

  isLogged(): boolean {
    return localStorage.getItem('username') !== null;
  }

  get loggedIn$(): Observable<boolean> {
    return this.logger.asObservable();
  }

  getUsername(): string {
    return localStorage.getItem('username') as string;
  }

}
