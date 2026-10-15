import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe2, 
  Code2, 
  GitMerge, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Users,
  Clock,
  ArrowUpRight
} from 'lucide-react';

interface Scenario {
  id: string;
  serviceId: string;
  icon: React.ReactNode;
  prompt: string;
  subtitle: string;
  recommendedService: string;
  firstStep: string;
  teamSetup: string;
  estimatedTimeline: string;
  keyOutcomes: string[];
}

export const ServiceDiscoveryWizard: React.FC = () => {
  const navigate = useNavigate();

  const scenarios: Scenario[] = [
    {
      id: 'presence',
      serviceId: 'digital-experiences',
      icon: <Globe2 size={24} className="text-blue-600" />,
      prompt: 'Need a modern digital presence?',
      subtitle: 'For businesses seeking high-converting websites, accessible design systems, and responsive customer portals.',
      recommendedService: 'Digital Experiences',
      firstStep: 'User Journey Mapping & UI Component Architecture',
      teamSetup: 'Design Lead, Frontend Architect, Accessibility Specialist',
      estimatedTimeline: '4–8 Weeks',
      keyOutcomes: [
        'Sub-second page load times with zero layout shift',
        'WCAG 2.1 AA compliant design system and token library',
        'Conversion-optimized user flows and interactive forms'
      ]
    },
    {
      id: 'custom-solution',
      serviceId: 'web-software-development',
      icon: <Code2 size={24} className="text-blue-600" />,
      prompt: 'Need a custom software solution?',
      subtitle: 'For teams outgrowing manual spreadsheets or off-the-shelf tools that lack critical workflow flexibility.',
      recommendedService: 'Web and Software Development',
      firstStep: 'Domain Modeling & API Contract Blueprint',
      teamSetup: 'Technical Architect, Full-Stack Engineers, QA Engineer',
      estimatedTimeline: '8–14 Weeks',
      keyOutcomes: [
        'Modular full-stack codebase with strict TypeScript safety',
        'Scalable relational database schema and optimized query tier',
        'Continuous integration pipeline with automated unit tests'
      ]
    },
    {
      id: 'integrations',
      serviceId: 'technology-integration',
      icon: <GitMerge size={24} className="text-blue-600" />,
      prompt: 'Need to connect existing systems?',
      subtitle: 'For organizations struggling with fragmented data silos across CRM, ERP, billing, and internal databases.',
      recommendedService: 'Technology Integration',
      firstStep: 'Data Schema Audit & Idempotency Specification',
      teamSetup: 'Integration Architect, Backend Engineer, DevOps Specialist',
      estimatedTimeline: '6–10 Weeks',
      keyOutcomes: [
        'Fault-tolerant event middleware with automatic retry queues',
        'Bi-directional synchronization eliminating manual data reentry',
        'Centralized audit logging and real-time error telemetry'
      ]
    },
    {
      id: 'direction',
      serviceId: 'technology-consulting',
      icon: <Compass size={24} className="text-blue-600" />,
      prompt: 'Need help defining technology direction?',
      subtitle: 'For founders and leadership evaluating technical feasibility, architectural trade-offs, and modernization roadmaps.',
      recommendedService: 'Technology Consulting',
      firstStep: 'Discovery Interviews & Current Stack Assessment',
      teamSetup: 'Principal Consultant, Enterprise Cloud Architect',
      estimatedTimeline: '2–4 Weeks',
      keyOutcomes: [
        'Objective technical trade-off matrix with TCO analysis',
        'Step-by-step phased roadmap aligned with business milestones',
        'Risk mitigation register and cloud infrastructure cost projection'
      ]
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>(scenarios[0].id);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleStartEngagement = () => {
    navigate(`/contact?service=${activeScenario.serviceId}`);
  };

  const handleViewService = () => {
    navigate(`/services/${activeScenario.serviceId}`);
  };

  return (
    <section className="section-padding service-discovery-section" aria-labelledby="discovery-heading">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">GUIDED ENGAGEMENT</div>
          <h2 id="discovery-heading" className="section-title">
            Find the Right Engagement for Your Team
          </h2>
          <p className="section-subtitle">
            Not sure where to begin? Select the challenge that closest mirrors your current operational priority to see our recommended approach.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="discovery-layout">
          
          {/* Left: Interactive Scenario Selector Buttons */}
          <div className="discovery-options-list" role="tablist" aria-label="Engagement Scenarios">
            {scenarios.map((scenario) => {
              const isSelected = scenario.id === activeScenarioId;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  className={`discovery-scenario-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveScenarioId(scenario.id)}
                  role="tab"
                  aria-selected={isSelected}
                  id={`tab-${scenario.id}`}
                  aria-controls={`panel-${scenario.id}`}
                >
                  <div className="scenario-card-header">
                    <div className="scenario-icon-wrapper">
                      {scenario.icon}
                    </div>
                    <div className="scenario-title-area">
                      <span className="scenario-prompt">{scenario.prompt}</span>
                      <span className="scenario-recommended-tag">
                        Matches: {scenario.recommendedService}
                      </span>
                    </div>
                  </div>
                  <p className="scenario-subtitle">{scenario.subtitle}</p>
                  <div className="scenario-card-arrow">
                    <ArrowRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Recommendation Preview Panel */}
          <div 
            className="discovery-result-panel"
            role="tabpanel"
            id={`panel-${activeScenario.id}`}
            aria-labelledby={`tab-${activeScenario.id}`}
          >
            <div className="panel-badge-row">
              <span className="panel-badge">
                <Sparkles size={14} className="text-blue-500" />
                <span>Recommended Engagement Blueprint</span>
              </span>
              <span className="provisional-pill">Provisional Estimate</span>
            </div>

            <h3 className="panel-service-title">{activeScenario.recommendedService}</h3>
            
            <div className="panel-meta-grid">
              <div className="panel-meta-item">
                <div className="panel-meta-icon"><Clock size={16} className="text-blue-600" /></div>
                <div>
                  <span className="panel-meta-label">Estimated Horizon</span>
                  <span className="panel-meta-val">{activeScenario.estimatedTimeline}</span>
                </div>
              </div>
              <div className="panel-meta-item">
                <div className="panel-meta-icon"><Users size={16} className="text-blue-600" /></div>
                <div>
                  <span className="panel-meta-label">Team Configuration</span>
                  <span className="panel-meta-val">{activeScenario.teamSetup}</span>
                </div>
              </div>
            </div>

            <div className="panel-content-block">
              <h4 className="panel-block-heading">Recommended First Phase</h4>
              <p className="panel-first-step-box">
                {activeScenario.firstStep}
              </p>
            </div>

            <div className="panel-content-block">
              <h4 className="panel-block-heading">Key Value Outcomes</h4>
              <ul className="panel-outcomes-list">
                {activeScenario.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="panel-outcome-item">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel-actions-group">
              <button 
                type="button" 
                onClick={handleStartEngagement}
                className="btn btn--primary btn--full-width"
              >
                <span>Discuss {activeScenario.recommendedService}</span>
                <ArrowRight size={16} />
              </button>
              
              <button 
                type="button" 
                onClick={handleViewService}
                className="btn btn--secondary btn--full-width"
              >
                <span>Read Full Service Specification</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="panel-footer-note">
              <span>* Configurable demonstration scenario. Final scope is structured around your team's specific requirements.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
