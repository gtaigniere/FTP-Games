export interface Game {
  id: number;
  title: string;
  thumbnail?: string;
  short_description?: string;
  description?: string;
  genre?: string;
  platform?: string;
  developer?: string;
  releaseDate?: Date;
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
}

export const createGame = (data: any) => ({
  id: data.id,
  title: data.title,
  thumbnail: data.thumbnail,
  short_description: data.short_description,
  description: data.description,
  genre: data.genre,
  platform: data.platform,
  developer: data.developer,
  releaseDate: new Date(data.release_date),
  MinSystemReq: data.minimum_system_requirements,
  screenshots: data.screenshots
} as Game);
