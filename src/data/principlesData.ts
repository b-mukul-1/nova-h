import type { Principle } from '../types';

export const principlesData: Principle[] = [
  {
    id: 'understanding-requirements',
    title: 'Understanding requirements before writing code',
    summary: 'Clear requirements eliminate speculative engineering and ensure effort directly serves organizational objectives.',
    details: 'Software projects fail most often not from technical deficiency, but from building the wrong things. We invest the effort upfront to understand your business model, customer workflows, and operational bottlenecks before writing a single line of production code.',
    tag: 'Foundation'
  },
  {
    id: 'choosing-appropriate-tech',
    title: 'Choosing appropriate, boring technology',
    summary: 'Proven technologies provide predictable reliability, ample talent pools, and lower maintenance burdens.',
    details: 'We deliberately resist chasing hype cycles. Instead, we select battle-tested stacks that deliver great performance, rich documentation, strong community support, and straightforward maintenance for your future internal team.',
    tag: 'Pragmatism'
  },
  {
    id: 'building-for-usability',
    title: 'Building for usability and clarity',
    summary: 'Great software feels effortless because every interaction, state, and edge case is considered.',
    details: 'Usability is not merely visual styling. It is how fast a user completes a task, how clearly system errors are communicated, how responsive interfaces feel on mobile, and how intuitively workflows guide decisions.',
    tag: 'Experience'
  },
  {
    id: 'considering-maintainability',
    title: 'Considering maintainability from day one',
    summary: 'Software is read and maintained far more often than it is created. Clean code is an asset.',
    details: 'We write strict TypeScript, modular components, comprehensive documentation, and automated tests so your systems remain adaptable as your organization evolves. You will never be locked into proprietary, unreadable spaghetti code.',
    tag: 'Longevity'
  },
  {
    id: 'communicating-clearly',
    title: 'Communicating clearly and transparently',
    summary: 'No jargon, no surprises. Direct status visibility, realistic estimates, and open collaboration.',
    details: 'Engineering progress is demonstrated through working software, measurable milestones, and transparent updates. When trade-offs or technical hurdles arise, we present clear options with their respective business implications.',
    tag: 'Partnership'
  }
];
