import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {createGame, createGameForList, Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API_URL: string = 'https://free-to-play-games-database.p.rapidapi.com/api';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getById(id: number): Observable<Game> {
    return this.httpClient.get<any>(`${this.API_URL}/game?id=${id}`)
      .pipe(map(data => createGame(data))
    );
  }

  getAll(): Observable<Game[]> {
    // return this.httpClient.get<Game[]>(`${this.API_URL}/games`);
    const gamesObs = this.httpClient.get<any[]>(`${this.API_URL}/games`);
    gamesObs.forEach(game => game.map(data => {
      const currentGame = createGameForList(data);
      console.log(currentGame.releaseDate + ': in getAll');
      return currentGame;
    }));
    return gamesObs;
  }
}

//   const currentGame = new Game(
//     data.id,
//     data.title,
//     data.thumbnail,
//     data.release_date
//   );
