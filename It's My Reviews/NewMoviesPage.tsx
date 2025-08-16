import React from 'react';
import { MOVIES } from '../constants';
import type { MovieDetails } from '../types';

interface MovieListItemProps {
  movie: MovieDetails;
  onClick: () => void;
}

// A sub-component for displaying a movie in the list format.
// This layout is similar to the ReviewCard for visual consistency.
const MovieListItem: React.FC<MovieListItemProps> = ({ movie, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left bg-brand-surface rounded-lg shadow-md overflow-hidden flex flex-row hover:bg-gray-800 transition-colors duration-200 group"
  >
    <div className="w-32 flex-shrink-0">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 flex flex-col justify-center">
      <h2 className="text-xl font-bold text-brand-light group-hover:text-brand-primary transition-colors duration-200">{movie.title}</h2>
      <p className="text-brand-secondary text-sm font-medium mt-1">
        Click to see details & booking options
      </p>
    </div>
  </button>
);

interface NewMoviesPageProps {
  onSelectMovie: (id: number) => void;
}

const NewMoviesPage: React.FC<NewMoviesPageProps> = ({ onSelectMovie }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-brand-light mb-6">New Movies</h1>
      <div className="space-y-6">
        {MOVIES.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} onClick={() => onSelectMovie(movie.id)} />
        ))}
      </div>
    </div>
  );
};

export default NewMoviesPage;