import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { WorkingPrinciples } from '../components/WorkingPrinciples';
import { InteractiveProcess } from '../components/InteractiveProcess';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { 
  CheckCircle2, 
  Terminal, 
  Target, 
  Zap,
  Sparkles 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <SeoHead 
        title="About Our Engineering Philosophy" 
        description="Learn about NovaTech Solutions: our technology principles, delivery discipline, and commitment to clear, maintainable software."
      />

      {/* About Hero Header */}
      <section className="page-header-section">
        <div className="site-container">
          <div className="page-header-content text-center">
            <div className="section-eyebrow">ABOUT NOVATECH SOLUTIONS</div>
            <h1 className="page-title">
              Engineering Disciplined Technology for Ambitious Organizations
            </h1>
            <p className="page-subtitle">
              We bridge high-level business strategy with resilient frontend systems, reliable API integrations, 
              and pragmatic cloud architectures.
            </p>
          </div>

          {/* Visual Showcase Card */}
          <div className="about-hero-card">
            <div className="about-hero-media">
              <img 
                src="/images/about_mission_philosophy.jpg" 
                alt="Technology architecture and engineering discipline" 
                className="about-hero-img"
              />
              <div className="about-hero-overlay"></div>
              <div className="about-hero-badge">
                <Sparkles size={14} className="text-blue-400" />
                <span>Pragmatic Systems Engineering</span>
              </div>
            </div>

            <div className="about-hero-text-block">
              <span className="about-tag">OUR IDENTITY</span>
              <h2>A Technology Partner Focused on Substance Over Hype</h2>
              <p>
                In a technology landscape often dominated by transient trends and overcomplicated stacks, 
                NovaTech Solutions provides clear-headed, production-proven engineering. We focus on solving 
                real operational constraints through thoughtful software design, strict type safety, and 
                transparent milestone-based execution.
              </p>
              <div className="about-key-tenets">
                <div className="about-tenet">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span>No proprietary lock-in</span>
                </div>
                <div className="about-tenet">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span>Transparent sprint demonstrations</span>
                </div>
                <div className="about-tenet">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span>Accessible WCAG AA standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars Section */}
      <section className="section-padding philosophy-section">
        <div className="site-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">OUR BUSINESS PHILOSOPHY</div>
            <h2 className="section-title">How We Think About Modern Software</h2>
            <p className="section-subtitle">
              Three fundamental pillars govern our engineering choices from day one.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Target size={24} className="text-blue-600" />
              </div>
              <h3 className="philosophy-card-title">1. Business Goals Dictate Technology</h3>
              <p className="philosophy-card-desc">
                We never pick a framework simply because it is trending. Every database choice, hosting model, 
                and library must justify its existence through measurable business value, team maintainability, 
                and operational longevity.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Terminal size={24} className="text-blue-600" />
              </div>
              <h3 className="philosophy-card-title">2. Type Safety and Maintainability</h3>
              <p className="philosophy-card-desc">
                Software is an asset that must evolve with your team. We write strict TypeScript, modular components, 
                thorough docstrings, and comprehensive test suites so any future engineer can read and extend 
                the codebase with total confidence.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Zap size={24} className="text-blue-600" />
              </div>
              <h3 className="philosophy-card-title">3. Usability and Human Experience</h3>
              <p className="philosophy-card-desc">
                Complex systems should feel remarkably simple to use. We prioritize sub-second interface responses, 
                intuitive interaction states, zero layout shifts, and inclusive accessibility so every user feels 
                empowered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Working Principles */}
      <WorkingPrinciples />

      {/* Delivery Process */}
      <InteractiveProcess />

      {/* Closing CTA */}
      <FinalCtaSection />
    </div>
  );
};
