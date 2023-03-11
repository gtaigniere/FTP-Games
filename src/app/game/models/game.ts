export class Game {
  id: number;
  title: string;
  thumbnail: string;
  description?: string;
  genre?: string;
  platform?: string;
  developer?: string;
  releaseDate: Date;
  MinSystemReq?: {
    os?: string,
    processor?: string,
    memory?: string,
    graphics?: string,
    storage?: string
  };
  screenshots?: {
    id?: number,
    image?: string
  }[];

  constructor(
    id: number,
    title: string,
    thumbnail: string,
    release_date: string
  ) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.releaseDate = new Date(release_date);
  }
}

export const createGame = (data: any) => ({
  id: data.id,
  title: data.title,
  thumbnail: data.thumbnail,
  description: data.description,
  genre: data.genre,
  platform: data.platform,
  developer: data.developer,
  releaseDate: new Date(data.release_date),
  MinSystemReq: data.minimum_system_requirements,
  screenshots: data.screenshots
} as Game);

export const createGameForList = (data: any) => ({
  id: data.id,
  title: data.title,
  thumbnail: data.thumbnail,
  releaseDate: new Date(data.release_date)
} as Game);
