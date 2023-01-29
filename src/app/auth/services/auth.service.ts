import {Injectable} from '@angular/core';
import {LoginRequestPayload} from "../models/login-request-payload";
import {User, users} from "../../shared/models/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'https://free-to-play-games-database.p.rapidapi.com/api';

  user: User = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
  ) {
  }

  login(requestPayLoad: LoginRequestPayload): Observable<boolean> {
    const userFind = users.find(
      user => user.email === requestPayLoad.email
        && user.password === requestPayLoad.password
    );
    if (!userFind) {
      console.log('userFind is false');
      return of(false);
    }
    console.log('userFind is true');
    this.user = userFind;
    localStorage.setItem('username', this.user.username);
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
