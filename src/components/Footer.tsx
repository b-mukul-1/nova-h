import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ArrowUpRight, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        {/* Top summary row */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <Logo variant="light" size="large" showTagline={true} />
            <p className="footer-description">
              NovaTech Solutions is an engineering-driven technology consultancy delivering resilient architectures, intuitive web systems, and high-impact digital experiences.
            </p>
            <div className="footer-badge-pill">
              <span className="footer-badge-dot"></span>
              <span>Accepting New Project Inquiries for Q1–Q2 {CURRENT_YEAR}</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services Overview</Link></li>
              <li><Link to="/case-study/omniflow-concept">Showcase Concept</Link></li>
              <li><Link to="/contact">Discuss a Project</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h3 className="footer-heading">Capabilities</h3>
            <ul className="footer-links-list">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-action-col">
            <h3 className="footer-heading">Project Discussion</h3>
            <p className="footer-action-text">
              Have a complex technical requirement or upcoming software initiative? Let's analyze your options.
            </p>
            <Link to="/contact" className="btn btn--accent btn--full-width">
              <span>Start a Conversation</span>
              <ArrowUpRight size={16} />
            </Link>
            <div className="footer-guarantees">
              <div className="footer-guarantee-item">
                <CheckCircle2 size={14} className="text-blue-400" />
                <span>NDA & Confidentiality</span>
              </div>
              <div className="footer-guarantee-item">
                <CheckCircle2 size={14} className="text-blue-400" />
                <span>No Jargon Consultations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Concept Disclaimer Banner */}
        <div className="footer-disclaimer-box">
          <div className="footer-disclaimer-content">
            <ShieldCheck size={18} className="footer-disclaimer-icon" />
            <p>
              <strong>Concept Demonstration Notice:</strong> This website represents a modern corporate web design concept for NovaTech Solutions. Business offerings, case studies, and architecture diagrams represent illustrative sample content and technical demonstrations.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {CURRENT_YEAR} NovaTech Solutions. All rights reserved. Built with modern React, TypeScript, and clean CSS architecture.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer-separator">•</span>
            <Link to="/contact">Inquiries & Contact</Link>
            <span className="footer-separator">•</span>
            <span className="footer-system-tag">
              <Terminal size={12} />
              <span>v2.4 Production Blueprint</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
