import React, { useState } from 'react';
import { Page, MovieDetails } from './types';
import { MOVIES } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import NewMoviesPage from './components/NewMoviesPage';
import MovieReviewsPage from './components/MovieReviewsPage';
import MovieDetailsPage from './components/MovieDetailsPage';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [sourcePage, setSourcePage] = useState<Page>(Page.NewMovies);

  const handleSelectMovie = (movieId: number) => {
    setSourcePage(activePage);
    const movie = MOVIES.find(m => m.id === movieId);
    if (movie) {
      setSelectedMovie(movie);
    }
  };
  
  const handleBack = () => {
    setSelectedMovie(null);
    setActivePage(sourcePage); 
  };
  
  const handleNav = (page: Page) => {
    setSelectedMovie(null); // Clear selected movie when navigating via header
    setActivePage(page);
  }

  const renderContent = () => {
    if (selectedMovie) {
      return <MovieDetailsPage movie={selectedMovie} onBack={handleBack} sourcePage={sourcePage} />;
    }

    switch (activePage) {
      case Page.Home:
        return <HomePage />;
      case Page.NewMovies:
        return <NewMoviesPage onSelectMovie={handleSelectMovie} />;
      case Page.AllMovies:
        return <MovieReviewsPage onSelectMovie={handleSelectMovie} />;
      default:
        return <HomePage />;
    }
  };
  
  const currentPage = selectedMovie ? sourcePage : activePage;

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg font-sans">
      <Header activePage={currentPage} setActivePage={handleNav} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;