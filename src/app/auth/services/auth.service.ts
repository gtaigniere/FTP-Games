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
    localStorage.setItem('nickname', user.nickname);
    console.log('Bonjour');
  }

  logout() {
    localStorage.clear();
    console.log('A bientôt');
  }

  isAuth(): boolean {
    if (localStorage.getItem('nickname')) {
        return true;
    }
    return false;
  }

}
