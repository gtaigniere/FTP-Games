import {Injectable} from '@angular/core';
import {User} from "../../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'https://free-to-play-games-database.p.rapidapi.com/api';

  constructor(
  ) {
  }

  login(user: User) {
    localStorage.setItem('email', user.email);
    localStorage.setItem('pwd', user.password);
    console.log('Bonjour');
  }

  logout() {
    localStorage.clear();
    console.log('A bientôt');
  }

  isAuth(): boolean {
    if (localStorage.getItem('email') && localStorage.getItem('pwd')) {
        return true;
    }
    return false;
  }

}
