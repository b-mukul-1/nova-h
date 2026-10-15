import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { conceptCaseStudy } from '../data/caseStudyData';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Layers, 
  Network,
  Activity,
  Check
} from 'lucide-react';

export const CaseStudyPage: React.FC = () => {
  const [activeArchNode, setActiveArchNode] = useState<string>('gateway');

  const archNodes = {
    portal: {
      name: 'Client Interface Portal',
      tech: 'React 19 + TypeScript + Design Tokens',
      role: 'Sub-second client rendering with zero layout shift, role-based view permissions, and WCAG 2.1 AA accessible workflows.'
    },
    gateway: {
      name: 'Resilient API Gateway',
      tech: 'Node.js / Express + OpenAPI Contract',
      role: 'Centralized authentication, rate limiting, request validation, and payload schema normalization before backend dispatch.'
    },
    bus: {
      name: 'Event Sync Message Bus',
      tech: 'Redis BullMQ / Dead-Letter Queue',
      role: 'Asynchronous event distribution ensuring zero dropped updates, automatic retries with exponential backoff, and idempotency guarantees.'
    },
    database: {
      name: 'Normalized State of Truth',
      tech: 'PostgreSQL + Prisma ORM',
      role: 'Relational data integrity, optimized composite indices for P95 latency under 25ms, and point-in-time recovery.'
    },
    telemetry: {
      name: 'Live Observability & Audit',
      tech: 'Structured Logging + OpenTelemetry',
      role: 'Real-time telemetry, transaction tracing, and automated compliance logging for cross-system data synchronization.'
    }
  };

  return (
    <div className="case-study-page">
      <SeoHead 
        title="OmniFlow Concept Blueprint" 
        description="Explore the OmniFlow demonstration case study: an event-driven operational architecture blueprint designed for enterprise integration."
      />

      {/* Hero */}
      <section className="case-study-page-hero">
        <div className="site-container">
          <div className="service-breadcrumbs">
            <Link to="/" className="breadcrumb-link">
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Showcase Concept</span>
          </div>

          <div className="case-study-hero-badge">
            <Sparkles size={14} className="text-blue-400" />
            <span>Fictional Demonstration Concept Blueprint</span>
          </div>

          <h1 className="case-study-hero-title">{conceptCaseStudy.title}</h1>
          <p className="case-study-hero-subtitle">{conceptCaseStudy.subtitle}</p>

          <div className="case-study-meta-bar">
            <div className="meta-bar-item">
              <span className="meta-bar-label">Architecture Style</span>
              <span className="meta-bar-val">Event-Driven Microservices</span>
            </div>
            <div className="meta-bar-item">
              <span className="meta-bar-label">Primary Stack</span>
              <span className="meta-bar-val">React, Node.js, PostgreSQL, Redis</span>
            </div>
            <div className="meta-bar-item">
              <span className="meta-bar-label">Concept Purpose</span>
              <span className="meta-bar-val">System Modernization Reference</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding case-study-body-section">
        <div className="site-container">
          
          <div className="case-study-narrative-grid">
            
            {/* The Challenge */}
            <div className="narrative-card">
              <div className="narrative-tag">THE PROBLEM SPACE</div>
              <h2 className="narrative-title">Operational Friction from System Fragmentation</h2>
              <p className="narrative-text">{conceptCaseStudy.challenge}</p>
              
              <div className="narrative-callout">
                <h4>Core Bottlenecks Identified:</h4>
                <ul>
                  <li>Manual cross-entry of orders between inventory and invoicing</li>
                  <li>Over 3-hour lag in cross-facility status visibility</li>
                  <li>Inconsistent data schemas leading to reconciliation errors</li>
                </ul>
              </div>
            </div>

            {/* The Solution */}
            <div className="narrative-card">
              <div className="narrative-tag">THE ARCHITECTURAL SOLUTION</div>
              <h2 className="narrative-title">A Unified, Event-Driven Synchronization Hub</h2>
              <p className="narrative-text">{conceptCaseStudy.solution}</p>

              <div className="narrative-callout">
                <h4>Core Design Objectives:</h4>
                <ul>
                  <li>Zero disruption to existing legacy systems during rollout</li>
                  <li>Guaranteed at-least-once message delivery with idempotency</li>
                  <li>Instant feedback for operational personnel via modern web UI</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Interactive Topology Visualizer */}
          <div className="topology-visualizer-box">
            <div className="topology-header">
              <div>
                <span className="section-eyebrow">SYSTEM BLUEPRINT</span>
                <h3 className="topology-title">Interactive Component Topology</h3>
                <p className="topology-sub">Click any architectural node to inspect its technical role and stack:</p>
              </div>
              <div className="topology-badge">
                <Activity size={16} className="text-blue-500" />
                <span>Simulated Architecture Health: Optimal</span>
              </div>
            </div>

            {/* Interactive Node Buttons */}
            <div className="topology-nodes-track">
              {Object.entries(archNodes).map(([key, node]) => {
                const isSelected = key === activeArchNode;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`topology-node-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setActiveArchNode(key)}
                  >
                    <span className="node-btn-icon">
                      {key === 'portal' && <Cpu size={18} />}
                      {key === 'gateway' && <Network size={18} />}
                      {key === 'bus' && <Layers size={18} />}
                      {key === 'database' && <Database size={18} />}
                      {key === 'telemetry' && <Activity size={18} />}
                    </span>
                    <span className="node-btn-name">{node.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Details Box */}
            <div className="topology-detail-card">
              <div className="node-detail-header">
                <span className="node-detail-title">{archNodes[activeArchNode as keyof typeof archNodes].name}</span>
                <span className="node-detail-tech">{archNodes[activeArchNode as keyof typeof archNodes].tech}</span>
              </div>
              <p className="node-detail-role">
                {archNodes[activeArchNode as keyof typeof archNodes].role}
              </p>
            </div>
          </div>

          {/* Implementation & Outcomes Grid */}
          <div className="case-breakdown-twocol">
            
            <div className="breakdown-card">
              <h3 className="breakdown-title">Proposed Implementation Steps</h3>
              <ul className="breakdown-list">
                {conceptCaseStudy.implementation.map((step, idx) => (
                  <li key={idx} className="breakdown-list-item">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="breakdown-card">
              <h3 className="breakdown-title">Intended Business Value</h3>
              <ul className="breakdown-list">
                {conceptCaseStudy.projectedOutcomes.map((outcome, idx) => (
                  <li key={idx} className="breakdown-list-item">
                    <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Conversion Box */}
          <div className="case-study-bottom-cta">
            <div className="cta-box-text">
              <h3>Have an operational architecture challenge like OmniFlow?</h3>
              <p>Let's conduct a structured discovery session to evaluate your integration needs.</p>
            </div>
            <Link to="/contact?service=technology-integration" className="btn btn--primary btn--lg">
              <span>Discuss Your Integration Goals</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};
