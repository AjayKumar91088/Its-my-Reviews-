import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-surface border-t border-gray-800 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-brand-secondary">
          <p className="font-semibold text-brand-light">Contact: support@itsmyreviews.com</p>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} It's My Reviews. A Minor Project for Elewayte.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;