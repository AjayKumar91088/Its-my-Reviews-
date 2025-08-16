import React, { useState } from 'react';

interface UserStarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const Star: React.FC<{
    filled: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}> = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
    <button
        type="button"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className="bg-transparent border-none p-0 cursor-pointer"
        aria-label="Rate this star"
    >
        <svg className={`w-6 h-6 transition-colors duration-200 ${filled ? 'text-yellow-400' : 'text-gray-600 hover:text-yellow-400'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    </button>
);

const UserStarRating: React.FC<UserStarRatingProps> = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            filled={starValue <= (hoverRating || rating)}
            onClick={() => onRatingChange(starValue)}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
          />
        );
      })}
    </div>
  );
};

export default UserStarRating;
