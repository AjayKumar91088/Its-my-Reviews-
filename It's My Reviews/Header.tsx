import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Logo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center overflow-hidden">
      <svg className="w-6 h-6 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4" />
      </svg>
    </div>
    <span className="text-xl font-bold tracking-wider text-brand-light">It's My Reviews</span>
  </div>
);

const NavItem: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-light'
    }`}
  >
    {label}
  </button>
);

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  return (
    <header className="bg-brand-surface shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex items-center space-x-1">
            <NavItem label="Home" isActive={activePage === Page.Home} onClick={() => setActivePage(Page.Home)} />
            <NavItem label="New Movies" isActive={activePage === Page.NewMovies} onClick={() => setActivePage(Page.NewMovies)} />
            <NavItem label="All Movies" isActive={activePage === Page.AllMovies} onClick={() => setActivePage(Page.AllMovies)} />
            <a
              href="https://in.bookmyshow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-brand-light bg-brand-primary hover:bg-red-700 transition-colors duration-200"
            >
              Book Tickets
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;