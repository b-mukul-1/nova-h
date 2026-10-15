import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="final-cta-section" aria-labelledby="final-cta-heading">
      <div className="site-container">
        
        {/* Navy-to-Blue Visual Treatment Banner */}
        <div className="final-cta-box">
          <div className="final-cta-glow-1"></div>
          <div className="final-cta-glow-2"></div>

          <div className="final-cta-inner">
            <div className="final-cta-badge">
              <Sparkles size={14} className="text-blue-300" />
              <span>PROJECT INITIATION</span>
            </div>

            <h2 id="final-cta-heading" className="final-cta-headline">
              Let's Turn Your Next Idea Into a Clear Plan.
            </h2>

            <p className="final-cta-subtext">
              Tell us what you're trying to achieve and start a conversation about the right approach.
            </p>

            <div className="final-cta-buttons">
              <Link to="/contact" className="btn btn--accent-large">
                <span>Start a Conversation</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="btn btn--secondary-glass">
                <span>Review Capabilities</span>
              </Link>
            </div>

            <div className="final-cta-commitments">
              <div className="cta-commitment-item">
                <CheckCircle2 size={16} className="text-blue-300" />
                <span>Structured Technical Scoping</span>
              </div>
              <div className="cta-commitment-item">
                <CheckCircle2 size={16} className="text-blue-300" />
                <span>Transparent Feasibility Feedback</span>
              </div>
              <div className="cta-commitment-item">
                <CheckCircle2 size={16} className="text-blue-300" />
                <span>Direct Access to Senior Engineers</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
