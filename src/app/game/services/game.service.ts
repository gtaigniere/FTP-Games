import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API_URL: string = 'https://free-to-play-games-database.p.rapidapi.com/api';

  headers = {
    'X-RapidAPI-Key': '33d4c5ab85msh1d803df4c05e054p19715ejsnd04087f5e3d4',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getById(id: number): Observable<Game> {
    return this.httpClient.get<Game>(`${this.API_URL}/game?id=${id}`, {'headers': this.headers})
      .pipe(map(data => ({
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        description: data.description,
        genre: data.genre,
        platform: data.platform,
        developer: data.developer,
        release_date: data.releaseDate,
        minimum_system_requirements: data.MinSystemReq,
        screenshots: data.screenshots
      } as Game))
    );
  }

  getAll(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(`${this.API_URL}/games`, {'headers': this.headers});
  }

}
