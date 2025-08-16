import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="text-center py-16">
      <div 
        className="relative rounded-lg overflow-hidden bg-cover bg-center py-20 px-6"
        style={{ backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.7)), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1975&auto=format&fit=crop')` }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-light">
          Your Ultimate Movie Hub
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-secondary">
          Discover the latest Telugu movies, read honest reviews, and book your tickets all in one place.
          Your next cinematic adventure starts here.
        </p>
      </div>
    </div>
  );
};

export default HomePage;