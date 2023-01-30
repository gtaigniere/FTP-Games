import {Injectable} from '@angular/core';
import {LoginRequestPayload} from "../models/login-request-payload";
import {users} from "../../shared/models/user";
import {Observable, of, Subject, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'https://free-to-play-games-database.p.rapidapi.com/api';

  private loggedIn = false;
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
    this.loggedIn = true;
    this.logger.next(this.loggedIn);
    return of(true);
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
    console.log('A bientôt');
  }

  isLogged(): Observable<boolean> {
    return this.logger.asObservable();
  }

}
