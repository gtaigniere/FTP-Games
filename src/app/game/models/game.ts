export interface Game {
  id: number;
  title: string;
  thumbnail?: string;
  description?: string;
  genre?: string;
  platform?: string;
  developer?: string;
  releaseDate?: Date;
  MinSystemReq?: string[];
  screenshots?: string[];
}
