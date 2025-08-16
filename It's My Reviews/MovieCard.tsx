import React from 'react';
import type { MovieDetails } from '../types';

interface MovieCardProps {
  movie: MovieDetails;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group bg-brand-surface rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 text-left w-full"
    >
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-auto object-cover aspect-[2/3]"
      />
      <div className="p-3">
        <h3 className="text-md font-semibold text-brand-light truncate group-hover:text-brand-primary">
          {movie.title}
        </h3>
      </div>
    </button>
  );
};

export default MovieCard;
