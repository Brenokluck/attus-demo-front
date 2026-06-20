export interface PaginatedInterface<T> {
  content: [T];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface MoviesInterface {
  id?: string;
  Title: string;
  Plot: string;
  Released: string | Date;
  BoxOffice: string;
  imdbRating: number;
  Runtime: number;
}

export interface MoviesInteractedInterface extends PaginatedInterface<unknown> {
  black_list: boolean;
  favorite: boolean;
  watched: boolean;
  movie_id: MoviesInterface;
}
