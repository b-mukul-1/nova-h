import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'normal' | 'large';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'normal', showTagline = false }) => {
  const isLight = variant === 'light';
  
  return (
    <Link 
      to="/" 
      className="inline-flex items-center gap-3 text-decoration-none group select-none"
      aria-label="NovaTech Solutions Home"
    >
      <div 
        style={{
          width: size === 'large' ? '46px' : '38px',
          height: size === 'large' ? '46px' : '38px',
          borderRadius: '12px',
          background: isLight 
            ? 'linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)' 
            : 'linear-gradient(135deg, #0B1F3A 0%, #1E3A8A 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isLight 
            ? '0 4px 12px rgba(255,255,255,0.15)' 
            : '0 4px 14px rgba(37,99,235,0.2)',
          border: isLight ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(37,99,235,0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          flexShrink: 0
        }}
        className="logo-mark"
      >
        <svg 
          viewBox="0 0 28 28" 
          width={size === 'large' ? '28' : '22'} 
          height={size === 'large' ? '28' : '22'} 
          fill="none"
        >
          <path 
            d="M6 8L14 3L22 8V20L14 25L6 20V8Z" 
            stroke="#60A5FA" 
            strokeWidth="2" 
            strokeLinejoin="round" 
          />
          <path 
            d="M14 9L19 12V18L14 21L9 18V12L14 9Z" 
            fill="#2563EB" 
            fillOpacity="0.7" 
            stroke="#93C5FD" 
            strokeWidth="1.5" 
          />
          <circle cx="14" cy="15" r="2.5" fill="#FFFFFF" />
          <line x1="14" y1="3" x2="14" y2="9" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="22" y1="20" x2="19" y2="18" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="6" y1="20" x2="9" y2="18" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
          <span style={{ 
            fontFamily: '"Plus Jakarta Sans", sans-serif', 
            fontWeight: 800, 
            fontSize: size === 'large' ? '1.45rem' : '1.25rem',
            letterSpacing: '-0.03em',
            color: isLight ? '#FFFFFF' : '#0B1F3A' 
          }}>
            Nova<span style={{ color: '#2563EB' }}>Tech</span>
          </span>
        </div>
        {showTagline && (
          <span style={{ 
            fontSize: '0.68rem', 
            fontWeight: 600, 
            letterSpacing: '0.08em', 
            textTransform: 'uppercase',
            color: isLight ? '#93C5FD' : '#64748B',
            marginTop: '2px'
          }}>
            Solutions
          </span>
        )}
      </div>
    </Link>
  );
};
