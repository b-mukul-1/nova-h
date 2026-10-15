import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title: string;
  description?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ 
  title, 
  description = 'NovaTech Solutions delivers intelligent enterprise architecture, high-performance web systems, and dependable digital integrations.' 
}) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = `${title} | NovaTech Solutions`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Scroll to top on route change unless hash is present
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [title, description, location]);

  return null;
};
