import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  // return this.httpClient.get(this.baseURL + 'users/' + userName + '/repos', { 'headers': headers })
  getById(id: string): Observable<Game> {
    //return this.httpClient.get<Game>(`${this.API_URL}/game?id=${id}`, {'headers': headers});
    return this.httpClient.get<Game>(`${this.API_URL}/game?id=${id}`);
  }

  getAll(): Observable<Game[]> {
    let bucket = ''; // {bucket} est équivalent à {'bucket': bucket}
    return this.httpClient.get<Game[]>(`${this.API_URL}/games`, {'headers': this.headers});
    // return this.httpClient.get<Game[]>(`${this.API_URL}/games`);
  }

}
