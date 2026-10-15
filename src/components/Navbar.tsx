import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Compass, Layout, Code2, Cpu, ChevronDown } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Reset menus when pathname changes
  const [lastPath, setLastPath] = useState(location.pathname);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'technology-consulting': return <Compass size={16} className="text-blue-600" />;
      case 'digital-experiences': return <Layout size={16} className="text-blue-600" />;
      case 'web-software-development': return <Code2 size={16} className="text-blue-600" />;
      case 'technology-integration': return <Cpu size={16} className="text-blue-600" />;
      default: return null;
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
        role="banner"
      >
        <div className="header-container">
          <Logo showTagline={true} />

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                >
                  About
                </NavLink>
              </li>
              
              {/* Services with Dropdown */}
              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => `nav-link nav-link--with-dropdown ${isActive ? 'nav-link--active' : ''}`}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown size={14} className={`dropdown-chevron ${servicesDropdownOpen ? 'rotated' : ''}`} />
                </NavLink>

                {servicesDropdownOpen && (
                  <div className="services-dropdown-menu" role="menu">
                    <div className="dropdown-header">
                      <span className="dropdown-label">Core Capabilities</span>
                      <Link to="/services" className="dropdown-all-link">
                        View Hub <ArrowUpRight size={12} />
                      </Link>
                    </div>
                    <div className="dropdown-items-grid">
                      {servicesData.map((service) => (
                        <Link 
                          key={service.id} 
                          to={`/services/${service.id}`}
                          className="dropdown-item"
                          role="menuitem"
                        >
                          <div className="dropdown-item-icon">
                            {getServiceIcon(service.id)}
                          </div>
                          <div>
                            <span className="dropdown-item-title">{service.title}</span>
                            <span className="dropdown-item-desc">{service.shortDesc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <NavLink 
                  to="/case-study/omniflow-concept" 
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                >
                  Showcase Concept
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <Link to="/contact" className="btn btn--primary btn--nav header-cta-desktop">
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button 
              type="button" 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Rendered outside header to escape backdrop-filter & height clipping) */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-overlay" 
          onClick={closeMobileMenu}
          aria-hidden={!mobileMenuOpen}
        >
          <aside 
            className="mobile-drawer" 
            role="dialog" 
            aria-modal="true" 
            aria-label="Mobile Navigation"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top Header with Logo and Close Button */}
            <div className="mobile-drawer-top">
              <Logo showTagline={true} />
              <button 
                type="button" 
                className="mobile-drawer-close-btn"
                onClick={closeMobileMenu}
                aria-label="Close Navigation Menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="mobile-drawer-body">
              <nav className="mobile-nav" aria-label="Mobile Menu">
                <ul className="mobile-nav-list">
                  <li>
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                      end
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      About NovaTech
                    </NavLink>
                  </li>

                  {/* Services Submenu on Mobile */}
                  <li className="mobile-services-group">
                    <div className="mobile-section-header">Services & Capabilities</div>
                    <ul className="mobile-subnav-list">
                      <li>
                        <NavLink 
                          to="/services" 
                          className="mobile-subnav-link"
                          onClick={closeMobileMenu}
                          end
                        >
                          <span className="mobile-subnav-dot"></span>
                          <span>All Services Overview</span>
                        </NavLink>
                      </li>
                      {servicesData.map((service) => (
                        <li key={service.id}>
                          <NavLink 
                            to={`/services/${service.id}`} 
                            className="mobile-subnav-link"
                            onClick={closeMobileMenu}
                          >
                            <span className="mobile-subnav-icon">{getServiceIcon(service.id)}</span>
                            <span>{service.title}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li>
                    <NavLink 
                      to="/case-study/omniflow-concept" 
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      Concept Case Study
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      Contact & Inquiry
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/privacy" 
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="mobile-drawer-footer">
              <Link 
                to="/contact" 
                className="btn btn--primary btn--full-width"
                onClick={closeMobileMenu}
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
