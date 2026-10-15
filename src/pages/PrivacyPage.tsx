import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, ArrowUpRight } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const PrivacyPage: React.FC = () => {

  return (
    <div className="privacy-page">
      <SeoHead 
        title="Privacy Policy & Terms" 
        description="Privacy policy and data protection principles for NovaTech Solutions website concept."
      />

      <section className="page-header-section">
        <div className="site-container site-container--narrow">
          <div className="service-breadcrumbs">
            <Link to="/" className="breadcrumb-link">
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </div>

          <div className="page-header-content text-left">
            <div className="section-eyebrow">LEGAL & COMPLIANCE</div>
            <h1 className="page-title">Privacy Policy</h1>
            <p className="page-subtitle">
              Last updated: October {CURRENT_YEAR}. This policy outlines our commitment to data integrity and privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding privacy-content-section">
        <div className="site-container site-container--narrow">
          <div className="privacy-article">
            
            <div className="privacy-callout-box">
              <ShieldCheck size={20} className="text-blue-600 shrink-0" />
              <div>
                <strong>Demonstration Concept Environment:</strong>
                <p>
                  This website is an interactive technology showcase for NovaTech Solutions. 
                  Any project inquiry data submitted through client-side forms is processed locally 
                  within the browser session for demonstration purposes and is not transmitted to external third-party advertisers.
                </p>
              </div>
            </div>

            <h2>1. Information We Collect</h2>
            <p>
              When visitors interact with our demonstration forms or service wizards, we may temporarily process:
            </p>
            <ul>
              <li>Contact details such as your name and business email address</li>
              <li>Organizational identifiers such as company name</li>
              <li>Project scope specifications and estimated timelines you choose to provide</li>
              <li>Anonymous technical telemetry including viewport dimensions, browser type, and navigation paths to ensure responsive performance</li>
            </ul>

            <h2>2. Purpose of Information Use</h2>
            <p>
              In a production engagement, collected information is strictly used to:
            </p>
            <ul>
              <li>Evaluate project requirements and schedule technical discovery sessions</li>
              <li>Formulate accurate architectural proposals and delivery estimates</li>
              <li>Maintain ongoing communication during active consulting or development sprints</li>
              <li>Comply with regulatory and legal audit obligations</li>
            </ul>

            <h2>3. Non-Disclosure & Confidentiality</h2>
            <p>
              NovaTech Solutions treats client technical discussions with the highest degree of confidentiality. 
              We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to reviewing proprietary system code, 
              database architectures, or internal business metrics.
            </p>

            <h2>4. Cookies and Local Storage</h2>
            <p>
              Our application uses minimal session tokens to maintain theme preferences and form state during active navigation. 
              We do not utilize intrusive third-party cross-site advertising trackers.
            </p>

            <h2>5. Your Rights and Inquiries</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information you provide. 
              If you have questions regarding this policy or wish to discuss an NDA before sharing project specifications, 
              please reach out through our contact page.
            </p>

            <div className="privacy-cta-box">
              <Link to="/contact" className="btn btn--primary">
                <span>Contact Our Privacy Team</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
