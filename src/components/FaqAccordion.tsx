import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding faq-section" aria-labelledby="faq-heading">
      <div className="site-container site-container--narrow">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">FREQUENT QUESTIONS</div>
          <h2 id="faq-heading" className="section-title">
            Answers Regarding Scope, Timelines & Collaboration
          </h2>
          <p className="section-subtitle">
            Clear expectations eliminate uncertainty. Here is how we structure engagements, 
            determine architectural suitability, and support your team.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-wrapper" role="region" aria-label="Frequently Asked Questions">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const itemId = `faq-item-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div 
                key={index} 
                className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
              >
                <h3>
                  <button
                    type="button"
                    className="faq-accordion-trigger"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={itemId}
                    id={headerId}
                  >
                    <div className="faq-trigger-content">
                      <span className="faq-category-badge">{item.category}</span>
                      <span className="faq-question-text">{item.question}</span>
                    </div>
                    <div className="faq-trigger-icon">
                      <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                    </div>
                  </button>
                </h3>

                <div
                  id={itemId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`faq-accordion-panel ${isOpen ? 'open' : ''}`}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="faq-support-callout">
          <div className="faq-callout-icon">
            <MessageSquare size={20} className="text-blue-600" />
          </div>
          <div className="faq-callout-text">
            <h4>Have a specific architectural question not answered here?</h4>
            <p>We are glad to discuss your technical constraints and system goals directly.</p>
          </div>
          <Link to="/contact" className="btn btn--outline-dark btn--sm">
            <span>Ask a Question</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
