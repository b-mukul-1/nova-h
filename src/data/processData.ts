import type { ProcessStage } from '../types';

export const processStages: ProcessStage[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We unpack business goals, technical constraints, user workflows, and operational requirements through structured dialogue.',
    focusArea: 'Alignment & Context',
    durationEstimate: '1–2 Weeks',
    deliverables: [
      'Stakeholder discovery workshops & interview findings',
      'Current state architecture audit & dependency mapping',
      'Core constraint, compliance, and security criteria definition',
      'High-level project scope & risk mitigation register'
    ]
  },
  {
    step: '02',
    title: 'Define',
    description: 'We formalize specifications, system architecture, data models, interaction blueprints, and phased delivery milestones.',
    focusArea: 'Blueprint & Strategy',
    durationEstimate: '2–3 Weeks',
    deliverables: [
      'Technical architecture blueprint & system boundary diagrams',
      'Interactive UI wireframes & user experience prototypes',
      'Database schema & API contract specifications',
      'Sprint backlog with estimated engineering effort & timeline'
    ]
  },
  {
    step: '03',
    title: 'Develop',
    description: 'We engineer solutions through disciplined sprints with clean type safety, automated tests, and regular working demonstrations.',
    focusArea: 'Engineering & Craftsmanship',
    durationEstimate: '4–12 Weeks',
    deliverables: [
      'Production-grade modular codebase with strict type definitions',
      'Continuous Integration pipeline with automated test suites',
      'Staging environment builds for stakeholder testing & feedback',
      'Bi-weekly live software demonstrations and sprint reviews'
    ]
  },
  {
    step: '04',
    title: 'Deliver and refine',
    description: 'We orchestrate zero-downtime deployment, provide thorough documentation, verify performance, and fine-tune based on usage.',
    focusArea: 'Launch & Optimization',
    durationEstimate: 'Ongoing Support',
    deliverables: [
      'Zero-downtime production deployment & infrastructure handover',
      'System documentation, operational runbooks, and API catalogs',
      'Synthetic load testing and Web Vitals performance tuning',
      '30-day post-launch hypercare and ongoing enhancement planning'
    ]
  }
];
