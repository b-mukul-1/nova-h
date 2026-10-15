import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  Server,
  Network
} from 'lucide-react';

export const BentoHero: React.FC = () => {
  const [activeMetricTab, setActiveMetricTab] = useState<'resilience' | 'speed' | 'security'>('resilience');

  // Dynamic values for interactive radial gauge
  const metricData = {
    resilience: {
      percentage: 99.98,
      label: 'System Uptime Target',
      sublabel: 'Zero single points of failure in topology',
      strokeOffset: 25, // SVG stroke dashoffset calculation
      icon: <Activity size={18} className="text-blue-500" />
    },
    speed: {
      percentage: 99.4,
      label: 'Sub-40ms Query P95',
      sublabel: 'Optimized cache tiers & edge routing',
      strokeOffset: 32,
      icon: <Zap size={18} className="text-amber-500" />
    },
    security: {
      percentage: 100,
      label: 'Zero-Trust Verification',
      sublabel: 'Role-based access & encrypted pipelines',
      strokeOffset: 0,
      icon: <ShieldCheck size={18} className="text-emerald-500" />
    }
  };

  const currentMetric = metricData[activeMetricTab];

  return (
    <section className="bento-hero-section" aria-label="Hero Overview">
      <div className="hero-container">
        
        {/* Top Organic Banner Capsule - Deep Navy Hero */}
        <div className="hero-dark-capsule">
          <div className="hero-dark-capsule-glow"></div>
          
          <div className="hero-capsule-header">
            <div className="hero-eyebrow-badge">
              <span className="hero-eyebrow-dot"></span>
              <span className="hero-eyebrow-text">SMARTER TECHNOLOGY. CLEARER POSSIBILITIES.</span>
            </div>
            
            <div className="hero-status-pills">
              <span className="hero-pill-tag">
                <span className="pulse-dot"></span> Architecture Ready
              </span>
              <span className="hero-pill-tag">Strict TypeScript</span>
              <span className="hero-pill-tag">99.98% Reliability</span>
            </div>
          </div>

          <div className="hero-capsule-body">
            <h1 className="hero-title">
              Your Business Has Goals. <br />
              <span className="hero-title-accent">Let's Build the Technology Behind Them.</span>
            </h1>

            <p className="hero-paragraph">
              Explore practical technology solutions designed to help businesses address challenges, 
              improve workflows, and create better digital experiences.
            </p>

            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn--primary-glow btn--lg">
                <span>Discuss Your Project</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="btn btn--secondary-glass btn--lg">
                <span>Explore Solutions</span>
                <Layers size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bento Grid Visual Presentation - Inspired directly by reference composition */}
        <div className="bento-grid-cluster">
          
          {/* Card 1: Main Wide Bento Card (Tech Architecture Image + Integrated White Card) */}
          <div className="bento-card bento-card--featured">
            <div className="bento-featured-media">
              <img 
                src="/images/hero_tower_mist.jpg" 
                alt="Intelligent technological monolith architecture" 
                className="bento-featured-img"
                loading="eager"
              />
              <div className="bento-media-overlay"></div>
              <div className="bento-media-badge">
                <Sparkles size={14} className="text-blue-300" />
                <span>Enterprise Architecture Blueprint</span>
              </div>
            </div>

            <div className="bento-featured-content">
              <div className="bento-category-tag">SYSTEM STRATEGY</div>
              <h2 className="bento-content-title">Engineering Intelligent Architecture</h2>
              <p className="bento-content-desc">
                Structured cloud systems, resilient API layers, and maintainable software stacks designed for long-term scalability and business agility.
              </p>
              
              <div className="bento-content-actions">
                <Link to="/case-study/omniflow-concept" className="btn btn--outline-dark btn--sm">
                  <span>View Case Concept</span>
                  <ArrowUpRight size={14} />
                </Link>
                <div className="bento-mini-stats">
                  <div className="bento-mini-stat">
                    <CheckCircle2 size={13} className="text-blue-600" />
                    <span>Zero Data Silos</span>
                  </div>
                  <div className="bento-mini-stat">
                    <CheckCircle2 size={13} className="text-blue-600" />
                    <span>Audit Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Vertical Monolith Card */}
          <div className="bento-card bento-card--vertical">
            <div className="bento-vertical-media">
              <img 
                src="/images/tech_engineering.jpg" 
                alt="Modern technology infrastructure" 
                className="bento-vertical-img"
              />
              <div className="bento-vertical-overlay"></div>
            </div>
            <div className="bento-vertical-badge">
              <span className="pulse-indicator"></span>
              <span>Resilience Verified</span>
            </div>
            <div className="bento-vertical-footer">
              <span className="vertical-label">System Topology</span>
              <span className="vertical-title">Unified Nodes</span>
            </div>
          </div>

          {/* Card 3: Interactive Radial Metric Card */}
          <div className="bento-card bento-card--metric">
            <div className="metric-header">
              <span className="metric-title">Performance Index</span>
              <div className="metric-tabs" role="tablist">
                <button 
                  type="button"
                  className={`metric-tab-btn ${activeMetricTab === 'resilience' ? 'active' : ''}`}
                  onClick={() => setActiveMetricTab('resilience')}
                  role="tab"
                  aria-selected={activeMetricTab === 'resilience'}
                >
                  Resilience
                </button>
                <button 
                  type="button"
                  className={`metric-tab-btn ${activeMetricTab === 'speed' ? 'active' : ''}`}
                  onClick={() => setActiveMetricTab('speed')}
                  role="tab"
                  aria-selected={activeMetricTab === 'speed'}
                >
                  Speed
                </button>
                <button 
                  type="button"
                  className={`metric-tab-btn ${activeMetricTab === 'security' ? 'active' : ''}`}
                  onClick={() => setActiveMetricTab('security')}
                  role="tab"
                  aria-selected={activeMetricTab === 'security'}
                >
                  Security
                </button>
              </div>
            </div>

            <div className="metric-gauge-wrapper">
              <div className="radial-svg-container">
                <svg viewBox="0 0 100 100" className="radial-svg">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    className="radial-bg-ring" 
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    className="radial-progress-ring"
                    style={{
                      strokeDasharray: '251.2',
                      strokeDashoffset: currentMetric.strokeOffset,
                      transition: 'stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </svg>
                <div className="radial-center-text">
                  <span className="radial-value">{currentMetric.percentage}%</span>
                  <span className="radial-tag">Target</span>
                </div>
              </div>

              <div className="metric-details">
                <div className="metric-status-row">
                  {currentMetric.icon}
                  <span className="metric-label">{currentMetric.label}</span>
                </div>
                <p className="metric-sublabel">{currentMetric.sublabel}</p>
              </div>
            </div>
          </div>

          {/* Card 4: Modular Server & Hardware Hardware Bento */}
          <div className="bento-card bento-card--hardware">
            <div className="hardware-image-container">
              <img 
                src="/images/modular_server.jpg" 
                alt="Modular technology hardware infrastructure" 
                className="hardware-img"
              />
              <div className="hardware-pill">
                <Server size={14} className="text-blue-600" />
                <span>Modular Node</span>
              </div>
            </div>
            <div className="hardware-content">
              <span className="hardware-title">Infrastructure Design</span>
              <p className="hardware-desc">High-density containerization & isolated network environments.</p>
            </div>
          </div>

          {/* Card 5: Client Engagement Process Card */}
          <div className="bento-card bento-card--process-pill">
            <div className="process-pill-header">
              <span className="process-pill-label">Client Engagement</span>
              <span className="process-pill-count">4 Stages</span>
            </div>
            <div className="process-steps-mini">
              <span className="step-badge active">Discover</span>
              <span className="step-arrow">→</span>
              <span className="step-badge">Define</span>
              <span className="step-arrow">→</span>
              <span className="step-badge">Develop</span>
              <span className="step-arrow">→</span>
              <span className="step-badge">Deliver</span>
            </div>
            <div className="process-pill-footer">
              <span className="text-xs text-muted">Iterative two-week sprints with demonstrable software</span>
            </div>
          </div>

          {/* Card 6: Infrastructure Scalability Card */}
          <div className="bento-card bento-card--scalability">
            <div className="scalability-header">
              <div className="scalability-icon-box">
                <Network size={20} className="text-blue-600" />
              </div>
              <span className="scalability-tag">Cloud Native</span>
            </div>
            <h3 className="scalability-title">Elastic Scale</h3>
            <p className="scalability-desc">Distributed architecture capable of adapting to enterprise load shifts.</p>
          </div>

          {/* Card 7: Simpler, faster, reliable summary */}
          <div className="bento-card bento-card--summary">
            <div className="summary-left">
              <h3 className="summary-heading">
                Simpler, faster, and reliable technology solutions.
              </h3>
              <p className="summary-body">
                We remove unnecessary friction from software delivery. From initial strategic consulting to production-grade integrations, every component is built for clarity and maintainability.
              </p>
            </div>
            <div className="summary-right">
              <Link to="/about" className="btn btn--subtle-navy">
                <span>Our Philosophy</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
