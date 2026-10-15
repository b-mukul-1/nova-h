import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { BentoHero } from '../components/BentoHero';
import { CapabilitiesBento } from '../components/CapabilitiesBento';
import { ServiceDiscoveryWizard } from '../components/ServiceDiscoveryWizard';
import { InteractiveProcess } from '../components/InteractiveProcess';
import { ConceptCaseStudySection } from '../components/ConceptCaseStudySection';
import { WorkingPrinciples } from '../components/WorkingPrinciples';
import { FaqAccordion } from '../components/FaqAccordion';
import { FinalCtaSection } from '../components/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <SeoHead 
        title="Smarter Technology. Clearer Possibilities." 
        description="NovaTech Solutions designs intelligent enterprise architecture, modern digital experiences, and scalable web software systems."
      />

      {/* 1. Signature Bento Hero */}
      <BentoHero />

      {/* 2. Capability Overview Bento */}
      <CapabilitiesBento />

      {/* 3. Interactive Service Discovery Wizard */}
      <ServiceDiscoveryWizard />

      {/* 4. 4-Stage Delivery Process */}
      <InteractiveProcess />

      {/* 5. Concept Demonstration Case Study */}
      <ConceptCaseStudySection />

      {/* 6. Working Principles */}
      <WorkingPrinciples />

      {/* 7. Comprehensive FAQ Accordion */}
      <FaqAccordion />

      {/* 8. Conversion Closing Section */}
      <FinalCtaSection />
    </div>
  );
};
