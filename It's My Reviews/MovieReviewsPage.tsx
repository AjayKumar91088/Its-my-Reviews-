import React from 'react';
import { MOVIES } from '../constants';
import ReviewCard from './ReviewCard';
import type { MovieDetails } from '../types';

interface MovieReviewsPageProps {
  onSelectMovie: (id: number) => void;
}

const MovieReviewsPage: React.FC<MovieReviewsPageProps> = ({ onSelectMovie }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-brand-light mb-6">All Movies</h1>
      <div className="space-y-6">
        {MOVIES.map((movie) => (
          <ReviewCard 
            key={movie.id} 
            movie={movie} 
            onClick={() => onSelectMovie(movie.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default MovieReviewsPage;