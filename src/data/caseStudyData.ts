import type { CaseStudyData } from '../types';

export const conceptCaseStudy: CaseStudyData = {
  id: 'omniflow-concept',
  badge: 'Demonstration Concept Blueprint',
  title: 'OmniFlow: Unified Operational Architecture',
  subtitle: 'A modular enterprise workflow portal designed to consolidate fragmented legacy tools and synchronize cross-departmental operations.',
  challenge: 'Growing multi-facility enterprises often rely on disconnected tools—separate legacy inventory databases, external billing portals, customer ticket tools, and manual spreadsheets. This fragmentation creates delayed data reconciliation, inconsistent reporting, and operational friction across teams.',
  solution: 'The OmniFlow blueprint proposes a centralized, event-driven web application with a unified design system, role-based operational dashboards, and automated bi-directional API synchronizations across existing enterprise systems.',
  implementation: [
    'Event-driven micro-services architecture to prevent tight coupling to legacy databases',
    'Real-time data synchronization engine utilizing idempotent webhooks and dead-letter queue recovery',
    'Role-gated administrative interface built with strict TypeScript and accessible design tokens',
    'Observability pipeline providing live telemetry on sync latency and data integrity checks'
  ],
  deliverables: [
    'Architecture Blueprint & Service Interaction Diagrams',
    'Component-Driven Design System & Interactive Operational Portal Mockup',
    'Enterprise Data Mapping & Normalization Specification',
    'Automated Integration Test Harness with Synthetic Load Simulation'
  ],
  projectedOutcomes: [
    'Single source of truth eliminating multi-system manual data reentry',
    'Sub-second query response times for operational status dashboards',
    'Auditable event trails providing comprehensive operational compliance',
    'Flexible modular architecture enabling incremental system replacement without downtime'
  ],
  technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis Queue', 'Docker', 'OpenAPI'],
  image: '/images/case_study_integration.jpg'
};
