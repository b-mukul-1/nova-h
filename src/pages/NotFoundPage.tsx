import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <SeoHead 
        title="404 — Page Not Found" 
        description="The requested page could not be located." 
      />

      <section className="section-padding text-center">
        <div className="site-container site-container--narrow">
          <div className="not-found-icon-bubble">
            <Compass size={48} className="text-blue-600" />
          </div>

          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-desc">
            The page you are looking for may have been moved, renamed, or is unavailable in this concept build.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn--primary">
              <Home size={16} />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/services" className="btn btn--secondary">
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
