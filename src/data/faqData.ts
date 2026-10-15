import type { FaqItem } from '../types';

export const faqData: FaqItem[] = [
  {
    category: 'Project Scope',
    question: 'How do you determine the scope of a new technology engagement?',
    answer: 'Every engagement begins with an initial technical discovery session where we map your operational goals, existing architecture, and team capabilities. From there, we formulate a modular scope document outlining core milestones, technical dependencies, and recommended phases so you can prioritize high-value capabilities first.'
  },
  {
    category: 'Service Selection',
    question: 'How do we know which service or approach is right for our organization?',
    answer: 'If you already have clear specifications, we can jump directly into Web & Software Development or Technology Integration. If your objectives are established but the architectural path or tooling is uncertain, we recommend starting with a Technology Consulting blueprint to evaluate trade-offs before investing in development.'
  },
  {
    category: 'Timelines',
    question: 'What do typical project timelines look like from kickoff to launch?',
    answer: 'Timelines vary based on technical complexity and scope depth. Targeted consulting roadmaps and architecture audits typically take 2 to 4 weeks. Medium-scale digital experiences or custom integration pipelines typically span 6 to 12 weeks. We structure every project into two-week iterative sprints with demonstrable working software at each checkpoint.'
  },
  {
    category: 'Collaboration',
    question: 'How does your team collaborate with our internal team and leadership?',
    answer: 'We operate as an extension of your team rather than an isolated vendor. We maintain communication via dedicated messaging channels, shared documentation repositories, and scheduled weekly demonstration check-ins. You receive direct access to working staging environments and sprint progress tracking at all times.'
  },
  {
    category: 'Ongoing Support',
    question: 'What happens after our initial software deployment is complete?',
    answer: 'Following launch, we provide a structured hypercare period to monitor system performance, resolve any edge cases, and ensure smooth operational transition. We also offer flexible ongoing support retainers for infrastructure maintenance, dependency updates, and feature enhancements based on your team needs.'
  }
];
