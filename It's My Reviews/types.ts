export enum Page {
  Home = 'HOME',
  NewMovies = 'NEW_MOVIES',
  AllMovies = 'ALL_MOVIES',
}

export interface MovieDetails {
  id: number;
  title: string;
  posterUrl: string;
  // Pre-written review details (optional)
  rating?: number;
  reviewText?: string;
}