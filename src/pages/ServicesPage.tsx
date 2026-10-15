import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { servicesData } from '../data/servicesData';
import { ServiceDiscoveryWizard } from '../components/ServiceDiscoveryWizard';
import { InteractiveProcess } from '../components/InteractiveProcess';
import { FaqAccordion } from '../components/FaqAccordion';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Layout, 
  Code2, 
  Cpu, 
  ArrowUpRight, 
  CheckCircle2, 
  Check
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'technology-consulting': return <Compass size={28} className="text-blue-600" />;
      case 'digital-experiences': return <Layout size={28} className="text-blue-600" />;
      case 'web-software-development': return <Code2 size={28} className="text-blue-600" />;
      case 'technology-integration': return <Cpu size={28} className="text-blue-600" />;
      default: return null;
    }
  };

  return (
    <div className="services-page">
      <SeoHead 
        title="Engineering Services & Solutions" 
        description="Explore NovaTech Solutions' capabilities: Technology Consulting, Digital Experiences, Custom Software Development, and Technology Integrations."
      />

      {/* Services Hero Header */}
      <section className="page-header-section">
        <div className="site-container">
          <div className="page-header-content text-center">
            <div className="section-eyebrow">CAPABILITIES OVERVIEW</div>
            <h1 className="page-title">
              Pragmatic Engineering Services for Every Growth Stage
            </h1>
            <p className="page-subtitle">
              From evaluating high-level architecture trade-offs to delivering complete full-stack web platforms, 
              we build resilient systems tailored to your organizational goals.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Modules */}
      <section className="section-padding services-list-section">
        <div className="site-container">
          <div className="services-detailed-list">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id} 
                className={`service-module-block ${index % 2 === 1 ? 'service-module-block--reverse' : ''}`}
              >
                <div className="service-module-media">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-module-img"
                    loading="lazy"
                  />
                  <div className="service-module-overlay"></div>
                  <div className="service-module-tag">
                    <span>Capability 0{index + 1}</span>
                  </div>
                </div>

                <div className="service-module-content">
                  <div className="service-module-header">
                    <div className="service-module-icon">
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <span className="service-tagline">{service.tagline}</span>
                      <h2 className="service-module-title">{service.title}</h2>
                    </div>
                  </div>

                  <p className="service-module-overview">{service.overview}</p>

                  {/* Practical Use Cases */}
                  <div className="service-section-box">
                    <h3 className="service-box-heading">Practical Use Cases</h3>
                    <ul className="service-bullets-list">
                      {service.useCases.slice(0, 3).map((useCase, idx) => (
                        <li key={idx} className="service-bullet-item">
                          <CheckCircle2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Deliverables */}
                  <div className="service-section-box">
                    <h3 className="service-box-heading">Typical Deliverables</h3>
                    <ul className="service-bullets-list">
                      {service.deliverables.slice(0, 3).map((del, idx) => (
                        <li key={idx} className="service-bullet-item">
                          <Check size={15} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="service-tech-pills">
                    {service.technologies.map((t, idx) => (
                      <span key={idx} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="service-module-actions">
                    <Link to={`/services/${service.id}`} className="btn btn--primary">
                      <span>Detailed Specification & Approach</span>
                      <ArrowUpRight size={16} />
                    </Link>
                    <Link to={`/contact?service=${service.id}`} className="btn btn--secondary">
                      <span>Inquire About This Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Discovery Wizard */}
      <ServiceDiscoveryWizard />

      {/* 4-Stage Process */}
      <InteractiveProcess />

      {/* FAQ */}
      <FaqAccordion />

      {/* CTA */}
      <FinalCtaSection />
    </div>
  );
};
