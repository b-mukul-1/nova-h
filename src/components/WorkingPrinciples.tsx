import React from 'react';
import { principlesData } from '../data/principlesData';
import { 
  FileSearch, 
  Cpu, 
  Sparkles, 
  Wrench, 
  MessageSquareCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const WorkingPrinciples: React.FC = () => {
  const getPrincipleIcon = (index: number) => {
    switch (index) {
      case 0: return <FileSearch size={22} className="text-blue-600" />;
      case 1: return <Cpu size={22} className="text-blue-600" />;
      case 2: return <Sparkles size={22} className="text-blue-600" />;
      case 3: return <Wrench size={22} className="text-blue-600" />;
      case 4: return <MessageSquareCheck size={22} className="text-blue-600" />;
      default: return <FileSearch size={22} className="text-blue-600" />;
    }
  };

  return (
    <section className="section-padding principles-section" aria-labelledby="principles-heading">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">ENGINEERING PHILOSOPHY</div>
          <h2 id="principles-heading" className="section-title">
            Working Principles That Guide Every Engagement
          </h2>
          <p className="section-subtitle">
            Reliable software is not born from trend-chasing. It stems from disciplined principles, 
            thoughtful architectural choices, and transparent communication.
          </p>
        </div>

        {/* Principles Grid with Asymmetric Composition */}
        <div className="principles-mosaic-grid">
          {principlesData.map((principle, index) => {
            const isHighlight = index === 0 || index === 4;
            return (
              <div 
                key={principle.id} 
                className={`principle-card ${isHighlight ? 'principle-card--highlight' : ''}`}
              >
                <div className="principle-card-top">
                  <div className="principle-icon-wrapper">
                    {getPrincipleIcon(index)}
                  </div>
                  <span className="principle-tag-pill">{principle.tag}</span>
                </div>

                <div className="principle-card-body">
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-summary">{principle.summary}</p>
                  <p className="principle-details">{principle.details}</p>
                </div>

                <div className="principle-card-footer">
                  <span className="principle-index">Principle 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="principles-cta-banner">
          <div className="principles-cta-text">
            <h4>Curious how these principles translate into your project timeline?</h4>
            <p>We review every proposal through this exact pragmatic lens.</p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            <span>Discuss Your Requirements</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};
