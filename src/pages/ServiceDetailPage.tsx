import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { SeoHead } from '../components/SeoHead';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Layout, 
  Code2, 
  Cpu, 
  Sparkles, 
  Check, 
  ShieldCheck 
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const getIcon = (id: string) => {
    switch (id) {
      case 'technology-consulting': return <Compass size={32} className="text-blue-600" />;
      case 'digital-experiences': return <Layout size={32} className="text-blue-600" />;
      case 'web-software-development': return <Code2 size={32} className="text-blue-600" />;
      case 'technology-integration': return <Cpu size={32} className="text-blue-600" />;
      default: return null;
    }
  };

  return (
    <div className="service-detail-page">
      <SeoHead 
        title={`${service.title} Specification`} 
        description={service.shortDesc}
      />

      {/* Header Banner */}
      <section className="service-detail-hero">
        <div className="site-container">
          <div className="service-breadcrumbs">
            <Link to="/services" className="breadcrumb-link">
              <ArrowLeft size={14} />
              <span>Back to Services Hub</span>
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </div>

          <div className="service-hero-layout">
            <div className="service-hero-info">
              <div className="service-hero-icon-pill">
                {getIcon(service.id)}
                <span>Capability Specification</span>
              </div>
              <h1 className="service-hero-title">{service.title}</h1>
              <p className="service-hero-tagline">{service.tagline}</p>
              <p className="service-hero-desc">{service.overview}</p>

              <div className="service-hero-cta-group">
                <Link to={`/contact?service=${service.id}`} className="btn btn--primary btn--lg">
                  <span>Start a Project in {service.title}</span>
                  <ArrowUpRight size={18} />
                </Link>
                <a href="#deliverables" className="btn btn--secondary btn--lg">
                  <span>View Deliverables</span>
                </a>
              </div>
            </div>

            <div className="service-hero-card-media">
              <img 
                src={service.image} 
                alt={service.title} 
                className="service-detail-img"
              />
              <div className="service-detail-media-overlay"></div>
              <div className="service-detail-card-badge">
                <Sparkles size={14} className="text-blue-300" />
                <span>Production Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Approach Grid */}
      <section id="deliverables" className="section-padding service-breakdown-section">
        <div className="site-container">
          
          <div className="service-breakdown-grid">
            
            {/* Left: Tangible Deliverables */}
            <div className="breakdown-card">
              <div className="breakdown-card-header">
                <div className="breakdown-icon-box">
                  <CheckCircle2 size={22} className="text-blue-600" />
                </div>
                <div>
                  <span className="breakdown-eyebrow">WHAT YOU RECEIVE</span>
                  <h2 className="breakdown-title">Tangible Deliverables</h2>
                </div>
              </div>
              <p className="breakdown-intro">
                We believe in verifiable outcomes over abstract claims. Every engagement phase produces documented, tested assets you own completely.
              </p>
              <ul className="breakdown-list">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="breakdown-list-item">
                    <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Engineering Approach & Methodology */}
            <div className="breakdown-card">
              <div className="breakdown-card-header">
                <div className="breakdown-icon-box">
                  <Layers size={22} className="text-blue-600" />
                </div>
                <div>
                  <span className="breakdown-eyebrow">OUR METHODOLOGY</span>
                  <h2 className="breakdown-title">Execution Approach</h2>
                </div>
              </div>
              <p className="breakdown-intro">
                A disciplined, milestone-driven workflow designed to avoid scope creep and ensure continuous progress visibility.
              </p>
              <ol className="breakdown-numbered-list">
                {service.approach.map((step, idx) => (
                  <li key={idx} className="breakdown-step-item">
                    <span className="step-num-pill">0{idx + 1}</span>
                    <p className="step-text">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

          </div>

          {/* Practical Scenarios & Recommended Stacks */}
          <div className="service-extended-grid">
            
            <div className="extended-card">
              <h3 className="extended-title">When to Choose This Service</h3>
              <p className="extended-sub">Ideal scenarios where this capability delivers immediate leverage:</p>
              <div className="use-cases-cluster">
                {service.useCases.map((uc, idx) => (
                  <div key={idx} className="use-case-tag-card">
                    <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="extended-card">
              <h3 className="extended-title">Technologies & Standards</h3>
              <p className="extended-sub">Battle-tested tools and frameworks utilized across this domain:</p>
              <div className="tech-pills-row">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge-large">{tech}</span>
                ))}
              </div>
              <div className="compliance-note">
                <ShieldCheck size={16} className="text-blue-600" />
                <span>Follows strict security, type-checking, and zero-drift CI/CD guidelines</span>
              </div>
            </div>

          </div>

          {/* Service Bottom CTA */}
          <div className="service-bottom-cta-banner">
            <div className="cta-banner-text">
              <h3>Ready to discuss your {service.title} requirements?</h3>
              <p>We'll structure a pragmatic scope proposal with clear milestones and deliverables.</p>
            </div>
            <Link to={`/contact?service=${service.id}`} className="btn btn--primary btn--lg">
              <span>Initiate Project Inquiry</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};
