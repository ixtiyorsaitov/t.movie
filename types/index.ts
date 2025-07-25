export enum FilmType {
  SERIES = "series",
  MOVIE = "movie",
}

export interface IFilm {
  _id: string;
  title: string;
  description: string;
  type: FilmType;
  rating: {
    avarage: number;
    total: number;
    count: number;
  };
  meta: {
    likes: number;
    watchList: number;
  };
  slug: string;
  published: boolean;
  image: string;
  additionImages?: string[];
  backgroundImage: string;
  genres: IGenres[];
}

export interface IUser {
  name: string;
  meta: {
    watchedList: string;
  };
}

export interface INotification {
  _id: string;
  film: IFilm;
  episode: number;
  season: number;
  read: boolean;
}

export interface IGenres {
  id: number;
  name: string;
  slug: string;
}
