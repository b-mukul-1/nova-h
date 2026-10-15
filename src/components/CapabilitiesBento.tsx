import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Layout, Code2, Cpu, ArrowUpRight, Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const CapabilitiesBento: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'technology-consulting':
        return <Compass size={24} className="text-blue-600" />;
      case 'digital-experiences':
        return <Layout size={24} className="text-blue-600" />;
      case 'web-software-development':
        return <Code2 size={24} className="text-blue-600" />;
      case 'technology-integration':
        return <Cpu size={24} className="text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <section className="section-padding capabilities-section" aria-labelledby="capabilities-heading">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">CORE EXPERTISE</div>
          <h2 id="capabilities-heading" className="section-title">
            Tailored Capabilities for Modern Technology Challenges
          </h2>
          <p className="section-subtitle">
            Every engagement is engineered to solve specific operational constraints, 
            built upon proven engineering standards and transparent collaboration.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="capabilities-bento-grid">
          {servicesData.map((service, index) => {
            const isWide = index === 0 || index === 3;
            
            return (
              <div 
                key={service.id} 
                className={`capability-card ${isWide ? 'capability-card--wide' : ''}`}
              >
                <div className="capability-card-inner">
                  <div className="capability-card-top">
                    <div className="capability-icon-badge">
                      {getIcon(service.id)}
                    </div>
                    <span className="capability-index">0{index + 1}</span>
                  </div>

                  <div className="capability-card-body">
                    <h3 className="capability-title">
                      <Link to={`/services/${service.id}`} className="capability-title-link">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="capability-desc">{service.shortDesc}</p>

                    <div className="capability-deliverables">
                      <span className="deliverables-heading">Key Deliverables:</span>
                      <ul className="deliverables-list">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="deliverable-item">
                            <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="capability-tech-tags">
                      {service.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="capability-card-footer">
                    <Link 
                      to={`/services/${service.id}`} 
                      className="capability-link"
                      aria-label={`Explore details of ${service.title}`}
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                {isWide && (
                  <div className="capability-preview-media">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="capability-img"
                      loading="lazy"
                    />
                    <div className="capability-media-overlay"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Hub Link */}
        <div className="capabilities-bottom-action">
          <Link to="/services" className="btn btn--secondary">
            <span>View Complete Service Matrix</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
