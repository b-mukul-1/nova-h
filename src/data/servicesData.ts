import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    shortDesc: 'Strategic architecture, roadmap planning, and technology evaluation tailored to organizational goals.',
    tagline: 'Aligning business priorities with dependable technical foundations.',
    overview: 'Technology consulting provides structured analysis and strategic guidance before significant development commitments are made. We help leadership teams evaluate architectures, assess feasibility, choose appropriate stacks, and avoid costly missteps.',
    iconName: 'Compass',
    accentColor: '#2563EB',
    image: '/images/hero_tower_mist.jpg',
    deliverables: [
      'Comprehensive Architecture Blueprint & Technical Roadmap',
      'System Feasibility & Technology Stack Evaluation',
      'Infrastructure Cost & Scalability Projections',
      'Security Posture & Compliance Preparedness Assessment',
      'Modernization Migration Strategy'
    ],
    useCases: [
      'Evaluating whether to rebuild or incrementally modernize legacy systems',
      'Planning technical requirements before hiring or raising capital',
      'Selecting between cloud services, serverless, and containerized architectures',
      'Conducting technical due diligence and code quality audits'
    ],
    technologies: ['Cloud Architecture', 'Distributed Systems', 'API Governance', 'Microservices', 'Zero-Trust Security'],
    approach: [
      'Discovery interviews with business, product, and engineering stakeholders',
      'Deep-dive audit into current systems, bottlenecks, and data flows',
      'Objective technology trade-off matrix with total cost of ownership models',
      'Pragmatic step-by-step phased execution roadmap'
    ]
  },
  {
    id: 'digital-experiences',
    title: 'Digital Experiences',
    shortDesc: 'Modern, high-performance web applications and brand interfaces designed for engagement and clarity.',
    tagline: 'Elevating touchpoints through thoughtful interaction design and performance.',
    overview: 'Digital experiences encompass customer-facing portals, brand websites, and interactive product interfaces. We combine crisp typography, responsive design systems, accessible interactions, and fast load times to build credibility.',
    iconName: 'Layout',
    accentColor: '#0B1F3A',
    image: '/images/services_modular_architecture.jpg',
    deliverables: [
      'High-Fidelity Interactive Design System & UI Component Library',
      'Responsive Web Application Frontend with Sub-Second Page Loads',
      'WCAG 2.1 AA Accessibility Compliant Interfaces',
      'Conversion-Optimized User Flows & Micro-Interactions',
      'Search Engine Optimization (SEO) & OpenGraph Infrastructure'
    ],
    useCases: [
      'Transforming a complex product workflow into an intuitive web interface',
      'Building responsive customer portals with multi-tenant user roles',
      'Developing marketing websites with interactive product demonstration tools',
      'Establishing a unified design token system across multiple product lines'
    ],
    technologies: ['React', 'TypeScript', 'Modern CSS / Design Tokens', 'Vite', 'Accessible WAI-ARIA', 'SVG Micro-Animations'],
    approach: [
      'User journey mapping and information architecture planning',
      'Iterative wireframing and interactive design prototyping',
      'Component-driven frontend engineering with strict type safety',
      'Cross-browser, multi-device, and screen-reader verification'
    ]
  },
  {
    id: 'web-software-development',
    title: 'Web and Software Development',
    shortDesc: 'Custom software applications built with robust backend systems, resilient APIs, and maintainable code.',
    tagline: 'Engineered for reliability, maintainability, and clean code standards.',
    overview: 'Custom software development addresses business challenges that off-the-shelf tools cannot solve. We architect and implement reliable web applications, administrative dashboards, transactional systems, and cloud-native services with long-term maintainability in mind.',
    iconName: 'Code2',
    accentColor: '#1D4ED8',
    image: '/images/tech_engineering.jpg',
    deliverables: [
      'Production-Ready Full-Stack Web Application Codebase',
      'RESTful & GraphQL API Specifications with Interactive Documentation',
      'Database Schema Design & Optimized Query Layer',
      'Automated Test Suites (Unit, Integration, and End-to-End)',
      'CI/CD Deployment Pipelines & Environment Configuration'
    ],
    useCases: [
      'Building bespoke internal operational tools to automate manual team tasks',
      'Creating scalable SaaS application backends with role-based access control',
      'Developing real-time notification and data streaming services',
      'Replacing vulnerable spreadsheet-based tracking with secure database web applications'
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL / REST'],
    approach: [
      'Domain modeling and detailed API contract definition',
      'Iterative milestone-based sprints with demonstrable software builds',
      'Strict automated testing, linting, and security vulnerability scanning',
      'Comprehensive documentation and developer handover sessions'
    ]
  },
  {
    id: 'technology-integration',
    title: 'Technology Integration',
    shortDesc: 'Connecting disparate platforms, enterprise APIs, data pipelines, and workflow automation systems.',
    tagline: 'Unifying fragmented systems into a coherent, automated data ecosystem.',
    overview: 'Modern organizations frequently operate dozens of specialized software tools. Technology integration connects CRMs, ERPs, payment processors, customer communication services, and internal databases into synchronized, automated workflows that eliminate data silos.',
    iconName: 'Cpu',
    accentColor: '#0284C7',
    image: '/images/systems_architecture.jpg',
    deliverables: [
      'Fault-Tolerant Event-Driven Integration Middleware',
      'Bidirectional Data Synchronization Pipelines with Retry Logic',
      'Third-Party API Connector Ecosystem (CRM, ERP, Payment, Billing)',
      'Centralized Audit Logging & Error Telemetry Dashboard',
      'Data Transformation & Normalization Schema Maps'
    ],
    useCases: [
      'Automating bi-directional synchronization between CRM records and billing systems',
      'Ingesting partner data feeds into centralized operational analytics stores',
      'Orchestrating multi-step automated approval and fulfillment workflows',
      'Bridging legacy on-premise systems with modern cloud SaaS platforms'
    ],
    technologies: ['Event Bus / Kafka / RabbitMQ', 'Webhooks', 'OAuth2 / mTLS', 'Serverless Functions', 'OpenAPI'],
    approach: [
      'Mapping data schemas and identifying master records of truth',
      'Designing idempotent webhook listeners and resilient queueing architectures',
      'Implementing comprehensive error handling, dead-letter queues, and recovery paths',
      'Staging integration testing with synthetic transactional loads'
    ]
  }
];
