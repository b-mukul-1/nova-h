import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { conceptCaseStudy } from '../data/caseStudyData';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Database, 
  ShieldCheck 
} from 'lucide-react';

export const ConceptCaseStudySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'value'>('overview');

  return (
    <section className="section-padding case-study-section" aria-labelledby="showcase-heading">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">CONCEPT SHOWCASE</div>
          <h2 id="showcase-heading" className="section-title">
            Architectural Demonstration Blueprint
          </h2>
          <p className="section-subtitle">
            An illustrative technical blueprint demonstrating how we analyze enterprise requirements, 
            structure system boundaries, and engineer scalable digital solutions.
          </p>
        </div>

        {/* Case Study Card Container */}
        <div className="case-study-showcase-box">
          
          {/* Top Banner Notice */}
          <div className="case-study-disclaimer-pill">
            <Sparkles size={14} className="text-blue-500" />
            <span>Fictional Demonstration Concept — Illustrative Reference Architecture</span>
          </div>

          <div className="case-study-grid">
            
            {/* Visual Column */}
            <div className="case-study-visual-col">
              <div className="case-study-media-wrapper">
                <img 
                  src={conceptCaseStudy.image} 
                  alt="Enterprise Architecture Blueprint Mockup" 
                  className="case-study-image"
                  loading="lazy"
                />
                <div className="case-study-media-tag">
                  <Cpu size={14} className="text-blue-400" />
                  <span>OmniFlow Architecture v2.4</span>
                </div>
              </div>

              {/* Mini Architecture Stack Nodes */}
              <div className="architecture-nodes-cluster">
                <div className="arch-node-item">
                  <Database size={16} className="text-blue-600" />
                  <div>
                    <span className="arch-node-title">PostgreSQL + Prisma</span>
                    <span className="arch-node-desc">Relational State of Truth</span>
                  </div>
                </div>
                <div className="arch-node-item">
                  <Layers size={16} className="text-blue-600" />
                  <div>
                    <span className="arch-node-title">Redis Event Queue</span>
                    <span className="arch-node-desc">Idempotent Sync Bus</span>
                  </div>
                </div>
                <div className="arch-node-item">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <div>
                    <span className="arch-node-title">Zero-Trust Auth</span>
                    <span className="arch-node-desc">RBAC & OpenID Connect</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="case-study-content-col">
              <div className="case-study-heading-area">
                <span className="case-study-title-pill">{conceptCaseStudy.badge}</span>
                <h3 className="case-study-project-title">{conceptCaseStudy.title}</h3>
                <p className="case-study-project-subtitle">{conceptCaseStudy.subtitle}</p>
              </div>

              {/* Interactive Tabs */}
              <div className="case-study-tabs-nav" role="tablist">
                <button
                  type="button"
                  className={`case-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                  role="tab"
                  aria-selected={activeTab === 'overview'}
                >
                  Overview & Challenge
                </button>
                <button
                  type="button"
                  className={`case-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
                  onClick={() => setActiveTab('architecture')}
                  role="tab"
                  aria-selected={activeTab === 'architecture'}
                >
                  Implementation Approach
                </button>
                <button
                  type="button"
                  className={`case-tab-btn ${activeTab === 'value' ? 'active' : ''}`}
                  onClick={() => setActiveTab('value')}
                  role="tab"
                  aria-selected={activeTab === 'value'}
                >
                  Projected Value
                </button>
              </div>

              {/* Tab Contents */}
              <div className="case-study-tab-content">
                {activeTab === 'overview' && (
                  <div className="tab-pane active" role="tabpanel">
                    <div className="challenge-block">
                      <span className="block-label">The Operational Challenge:</span>
                      <p className="block-text">{conceptCaseStudy.challenge}</p>
                    </div>
                    <div className="solution-block">
                      <span className="block-label">The Proposed Solution:</span>
                      <p className="block-text">{conceptCaseStudy.solution}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="tab-pane active" role="tabpanel">
                    <span className="block-label">Technical Implementation Pillars:</span>
                    <ul className="case-bullets-list">
                      {conceptCaseStudy.implementation.map((item, idx) => (
                        <li key={idx} className="case-bullet-item">
                          <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'value' && (
                  <div className="tab-pane active" role="tabpanel">
                    <span className="block-label">Intended Organizational Outcomes:</span>
                    <ul className="case-bullets-list">
                      {conceptCaseStudy.projectedOutcomes.map((item, idx) => (
                        <li key={idx} className="case-bullet-item">
                          <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technology Badges */}
              <div className="case-tech-footer">
                <span className="tech-footer-label">Concept Stack:</span>
                <div className="tech-tags-wrap">
                  {conceptCaseStudy.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag-sm">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Link to Full Page */}
              <div className="case-actions-row">
                <Link to="/case-study/omniflow-concept" className="btn btn--primary">
                  <span>Explore Full Blueprint Specification</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn--secondary">
                  <span>Discuss Similar Concept</span>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
