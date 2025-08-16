import React from 'react';
import type { MovieDetails } from '../types';
import { Page } from '../types';
import StarRating from './StarRating';

interface MovieDetailsPageProps {
  movie: MovieDetails;
  onBack: () => void;
  sourcePage: Page;
}

const BookingLink: React.FC<{ href: string; label: string; logo: string }> = ({ href, label, logo }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
  >
    <img src={logo} alt={`${label} logo`} className="h-6 mr-3 rounded-sm" />
    <span className="text-brand-light font-medium">{label}</span>
  </a>
);

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = ({ movie, onBack, sourcePage }) => {
  const backButtonText = sourcePage === Page.NewMovies ? 'Back to New Movies' : 'Back to All Movies';
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <button
          onClick={onBack}
          className="mb-4 text-brand-secondary hover:text-brand-light transition-colors duration-200 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>{backButtonText}</span>
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
            <img src={movie.posterUrl} alt={movie.title} className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl font-bold text-brand-light">{movie.title}</h1>
            {movie.reviewText && typeof movie.rating !== 'undefined' ? (
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-brand-primary mb-2">Our Review</h2>
                <div className="flex items-center space-x-2 mb-3">
                  <StarRating rating={movie.rating} />
                  <span className="text-brand-secondary text-sm">{movie.rating.toFixed(1)}/5.0</span>
                </div>
                <p className="text-brand-secondary leading-relaxed">{movie.reviewText}</p>
              </div>
            ) : (
               <div className="mt-4">
                <h2 className="text-2xl font-semibold text-brand-primary mb-2">Review</h2>
                <p className="text-brand-secondary leading-relaxed">No review available yet for this movie.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Booking Section */}
      <div className="bg-brand-surface p-6 rounded-lg">
         <h2 className="text-2xl font-semibold text-brand-light mb-4">Book Your Tickets</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           <BookingLink href="https://in.bookmyshow.com/" label="BookMyShow" logo="https://bookmyshow.com/favicon.ico" />
           <BookingLink href="https://paytm.com/movies" label="Paytm" logo="https://paytm.com/favicon.ico" />
           <BookingLink href="https://www.ticketnew.com/" label="TicketNew" logo="https://www.ticketnew.com/favicon.ico" />
           <BookingLink href="https://www.amazon.in/movie-tickets/all" label="Amazon Pay" logo="https://www.amazon.in/favicon.ico" />
         </div>
      </div>

    </div>
  );
};

export default MovieDetailsPage;