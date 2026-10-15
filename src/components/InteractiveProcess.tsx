import React, { useState } from 'react';
import { processStages } from '../data/processData';
import { CheckCircle2, Clock, Target } from 'lucide-react';

export const InteractiveProcess: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const currentStage = processStages[selectedStageIndex];

  return (
    <section className="section-padding process-section" aria-labelledby="process-heading">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">HOW WE WORK</div>
          <h2 id="process-heading" className="section-title">
            A Disciplined, Four-Stage Delivery Framework
          </h2>
          <p className="section-subtitle">
            From initial discovery to post-launch optimization, our engineering process prioritizes clarity, 
            tangible milestones, and predictable execution.
          </p>
        </div>

        {/* Process Timeline Bar */}
        <div className="process-timeline-bar" role="tablist" aria-label="Process Stages">
          {processStages.map((stage, index) => {
            const isSelected = index === selectedStageIndex;
            return (
              <button
                key={stage.step}
                type="button"
                className={`timeline-step-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedStageIndex(index)}
                role="tab"
                aria-selected={isSelected}
                id={`process-tab-${index}`}
                aria-controls={`process-panel-${index}`}
              >
                <div className="step-circle">
                  <span>{stage.step}</span>
                </div>
                <div className="step-label-group">
                  <span className="step-name">{stage.title}</span>
                  <span className="step-focus">{stage.focusArea}</span>
                </div>
                <div className="step-active-indicator" />
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div 
          className="stage-detail-card"
          role="tabpanel"
          id={`process-panel-${selectedStageIndex}`}
          aria-labelledby={`process-tab-${selectedStageIndex}`}
        >
          <div className="stage-detail-header">
            <div className="stage-number-badge">
              <span>STAGE {currentStage.step}</span>
            </div>
            
            <div className="stage-meta-badges">
              <span className="stage-meta-pill">
                <Target size={14} className="text-blue-600" />
                <span>Focus: {currentStage.focusArea}</span>
              </span>
              <span className="stage-meta-pill">
                <Clock size={14} className="text-blue-600" />
                <span>Duration: {currentStage.durationEstimate}</span>
              </span>
            </div>
          </div>

          <div className="stage-detail-body">
            <div className="stage-overview-col">
              <h3 className="stage-title">{currentStage.title}</h3>
              <p className="stage-description">{currentStage.description}</p>
              
              <div className="stage-navigation-arrows">
                <button
                  type="button"
                  className="stage-nav-btn"
                  onClick={() => setSelectedStageIndex((prev) => (prev > 0 ? prev - 1 : processStages.length - 1))}
                  aria-label="Previous process stage"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  className="stage-nav-btn active"
                  onClick={() => setSelectedStageIndex((prev) => (prev < processStages.length - 1 ? prev + 1 : 0))}
                  aria-label="Next process stage"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            <div className="stage-deliverables-col">
              <h4 className="stage-deliverables-heading">Tangible Stage Deliverables</h4>
              <ul className="stage-deliverables-list">
                {currentStage.deliverables.map((item, idx) => (
                  <li key={idx} className="stage-deliverable-item">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
