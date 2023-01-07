export interface Game {
  id: number;
  title: string;
  thumbmail?: string;
  description?: string;
  gameUrl?: string;
  genre?: string;
  platform?: string;
  developer?: string;
  releaseDate?: Date;
}
