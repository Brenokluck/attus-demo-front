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
  title: string;
  description: string;
  launch_date: string | Date;
  update_date?: string | Date;
  views: number;
  review_stars: number;
  duration: number;
}

export interface MoviesInteractedInterface extends PaginatedInterface<unknown> {
  black_list: boolean;
  favorite: boolean;
  watched: boolean;
  movie_id: MoviesInterface;
}
