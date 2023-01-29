import {Injectable} from '@angular/core';
import {LoginRequestPayload} from "../models/login-request-payload";
import {users} from "../../shared/models/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'https://free-to-play-games-database.p.rapidapi.com/api';

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
    return of(true);
  }

  logout() {
    localStorage.clear();
    console.log('A bientôt');
  }

  isLogged(): boolean {
    if (localStorage.getItem('username')) {
      return true;
    }
    return false;
  }

}
