import React from 'react';
import type { MovieDetails } from '../types';
import StarRating from './StarRating';

interface ReviewCardProps {
  movie: MovieDetails;
  onClick?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ movie, onClick }) => {
  const { rating, reviewText, posterUrl, title } = movie;
  const hasReview = typeof rating !== 'undefined' && reviewText;

  const cardContent = (
    <>
      <div className="md:w-48 flex-shrink-0">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-center flex-grow">
        <h2 className="text-xl font-bold text-brand-light group-hover:text-brand-primary transition-colors duration-200">{title}</h2>
        {hasReview ? (
          <>
            <div className="flex items-center space-x-2 my-2">
                <StarRating rating={rating!} />
                <span className="text-brand-secondary text-sm">{rating!.toFixed(1)}/5.0</span>
            </div>
            <p className="text-brand-secondary text-sm leading-relaxed">
              {reviewText}
            </p>
          </>
        ) : (
          <p className="text-brand-secondary text-sm font-medium mt-1">
            Click to see details & booking options
          </p>
        )}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="w-full text-left bg-brand-surface rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:bg-gray-800 transition-colors duration-200 group"
      >
        {cardContent}
      </button>
    );
  }

  return (
    <div className="bg-brand-surface rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      {cardContent}
    </div>
  );
};

export default ReviewCard;