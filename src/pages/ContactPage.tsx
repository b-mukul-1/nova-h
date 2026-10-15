import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { servicesData } from '../data/servicesData';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Info, 
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import type { ContactFormData, FormErrors } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  // Initial form values
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    selectedService: serviceParam || 'technology-consulting',
    estimatedTimeline: 'within-1-month',
    projectRequirements: '',
    consentAgreed: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const [lastParam, setLastParam] = useState(serviceParam);
  if (serviceParam !== lastParam) {
    setLastParam(serviceParam);
    if (serviceParam && servicesData.some((s) => s.id === serviceParam)) {
      setFormData((prev) => ({ ...prev, selectedService: serviceParam }));
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Please provide your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address (e.g., name@company.com).';
    }

    if (!formData.selectedService) {
      newErrors.selectedService = 'Please select an area of service interest.';
    }

    if (!formData.projectRequirements.trim()) {
      newErrors.projectRequirements = 'Please share a brief summary of what you are seeking to build or solve.';
    } else if (formData.projectRequirements.trim().length < 15) {
      newErrors.projectRequirements = 'Please provide a bit more detail (at least 15 characters).';
    }

    if (!formData.consentAgreed) {
      newErrors.consentAgreed = 'You must acknowledge the terms to submit your project inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      
      // Log for developer demonstration verification
      console.log('Demonstration Form Submitted Successfully:', formData);
    }, 800);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      selectedService: 'technology-consulting',
      estimatedTimeline: 'within-1-month',
      projectRequirements: '',
      consentAgreed: false
    });
    setErrors({});
  };

  const getServiceName = (id: string) => {
    return servicesData.find((s) => s.id === id)?.title || id;
  };

  return (
    <div className="contact-page">
      <SeoHead 
        title="Start a Project Discussion" 
        description="Connect with NovaTech Solutions. Submit your project requirements to explore architectural direction, scope planning, and technical execution."
      />

      <section className="page-header-section">
        <div className="site-container site-container--narrow text-center">
          <div className="section-eyebrow">GET IN TOUCH</div>
          <h1 className="page-title">
            Let's Discuss Your Project Requirements
          </h1>
          <p className="page-subtitle">
            Share what you're trying to achieve. We will review your technical goals, 
            evaluate feasibility, and schedule a no-jargon technical discovery call.
          </p>
        </div>
      </section>

      <section className="section-padding contact-form-section">
        <div className="site-container">
          
          <div className="contact-layout-grid">
            
            {/* Left Column: Expectations & Guarantees */}
            <div className="contact-info-col">
              <div className="contact-info-card">
                <span className="info-card-eyebrow">WHAT TO EXPECT</span>
                <h2 className="info-card-title">A Direct, Structured Technical Consultation</h2>
                <p className="info-card-desc">
                  We respect your time. You will speak directly with senior engineers and architects, 
                  not aggressive sales representatives.
                </p>

                <div className="expectation-steps">
                  <div className="expectation-step">
                    <span className="expectation-num">1</span>
                    <div>
                      <h4>Initial Review Within 24 Business Hours</h4>
                      <p>We analyze your constraints and verify that our capabilities align with your needs.</p>
                    </div>
                  </div>

                  <div className="expectation-step">
                    <span className="expectation-num">2</span>
                    <div>
                      <h4>30-Minute Technical Discovery</h4>
                      <p>A focused dialogue to clarify system boundaries, user journeys, and technical dependencies.</p>
                    </div>
                  </div>

                  <div className="expectation-step">
                    <span className="expectation-num">3</span>
                    <div>
                      <h4>Pragmatic Engagement Plan</h4>
                      <p>A phased delivery proposal with transparent milestones, deliverables, and estimated timelines.</p>
                    </div>
                  </div>
                </div>

                <div className="contact-trust-badges">
                  <div className="trust-badge-item">
                    <ShieldCheck size={16} className="text-blue-600" />
                    <span>Mutual Non-Disclosure Agreement (NDA) supported</span>
                  </div>
                  <div className="trust-badge-item">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span>No obligation or speculative pressure</span>
                  </div>
                </div>
              </div>

              {/* Demo Architecture Note */}
              <div className="demo-notice-card">
                <div className="demo-notice-header">
                  <Info size={16} className="text-blue-600" />
                  <strong>Concept Environment Notice</strong>
                </div>
                <p>
                  This form features complete client-side validation and simulated submission handling. 
                  Submissions are captured in the browser console for integration into your production backend API.
                </p>
              </div>
            </div>

            {/* Right Column: Form or Success Card */}
            <div className="contact-form-col">
              
              {!isSubmitted ? (
                <div className="form-card-container">
                  <div className="form-card-header">
                    <h3 className="form-card-title">Project Inquiry Form</h3>
                    <p className="form-card-desc">Fields marked with an asterisk (*) are required.</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="project-inquiry-form">
                    
                    {/* Full Name */}
                    <div className="form-field-group">
                      <label htmlFor="fullName" className="form-label">
                        Your Full Name <span className="text-req">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`form-input ${errors.fullName ? 'form-input--error' : ''}`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <div id="fullName-error" className="form-error-msg" role="alert">
                          <AlertCircle size={14} />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    {/* Business Email & Company Grid */}
                    <div className="form-row-2col">
                      <div className="form-field-group">
                        <label htmlFor="businessEmail" className="form-label">
                          Work Email <span className="text-req">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="businessEmail" 
                          name="businessEmail"
                          value={formData.businessEmail}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className={`form-input ${errors.businessEmail ? 'form-input--error' : ''}`}
                          aria-invalid={!!errors.businessEmail}
                          aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
                        />
                        {errors.businessEmail && (
                          <div id="businessEmail-error" className="form-error-msg" role="alert">
                            <AlertCircle size={14} />
                            <span>{errors.businessEmail}</span>
                          </div>
                        )}
                      </div>

                      <div className="form-field-group">
                        <label htmlFor="companyName" className="form-label">
                          Company / Organization <span className="text-optional">(Optional)</span>
                        </label>
                        <input 
                          type="text" 
                          id="companyName" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Acme Health Corp"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Service Interest & Timeline */}
                    <div className="form-row-2col">
                      <div className="form-field-group">
                        <label htmlFor="selectedService" className="form-label">
                          Service Interest <span className="text-req">*</span>
                        </label>
                        <select 
                          id="selectedService" 
                          name="selectedService"
                          value={formData.selectedService}
                          onChange={handleChange}
                          className={`form-select ${errors.selectedService ? 'form-input--error' : ''}`}
                        >
                          {servicesData.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.title}
                            </option>
                          ))}
                          <option value="general-inquiry">General Architecture Inquiry</option>
                        </select>
                      </div>

                      <div className="form-field-group">
                        <label htmlFor="estimatedTimeline" className="form-label">
                          Estimated Timeline
                        </label>
                        <select 
                          id="estimatedTimeline" 
                          name="estimatedTimeline"
                          value={formData.estimatedTimeline}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="immediate">Immediate (Ready to start)</option>
                          <option value="within-1-month">Within 1 Month</option>
                          <option value="1-to-3-months">1 to 3 Months</option>
                          <option value="exploratory">Exploratory / Roadmap Planning</option>
                        </select>
                      </div>
                    </div>

                    {/* Requirements Textarea */}
                    <div className="form-field-group">
                      <div className="label-with-counter">
                        <label htmlFor="projectRequirements" className="form-label">
                          Project Requirements & Goals <span className="text-req">*</span>
                        </label>
                        <span className="char-counter">
                          {formData.projectRequirements.length} chars
                        </span>
                      </div>
                      <textarea 
                        id="projectRequirements" 
                        name="projectRequirements"
                        rows={4}
                        value={formData.projectRequirements}
                        onChange={handleChange}
                        placeholder="Describe your current system state, primary challenges, or what you are seeking to build..."
                        className={`form-textarea ${errors.projectRequirements ? 'form-input--error' : ''}`}
                        aria-invalid={!!errors.projectRequirements}
                        aria-describedby={errors.projectRequirements ? 'projectRequirements-error' : undefined}
                      />
                      {errors.projectRequirements && (
                        <div id="projectRequirements-error" className="form-error-msg" role="alert">
                          <AlertCircle size={14} />
                          <span>{errors.projectRequirements}</span>
                        </div>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="form-checkbox-group">
                      <label className="checkbox-label">
                        <input 
                          type="checkbox" 
                          name="consentAgreed"
                          checked={formData.consentAgreed}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="checkbox-text">
                          I agree to have NovaTech Solutions review my inquiry in accordance with the{' '}
                          <Link to="/privacy" className="form-inline-link">Privacy Policy</Link>.
                        </span>
                      </label>
                      {errors.consentAgreed && (
                        <div className="form-error-msg" role="alert">
                          <AlertCircle size={14} />
                          <span>{errors.consentAgreed}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="form-actions-wrapper">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn btn--primary btn--full-width btn--submit"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw size={18} className="spinner-icon" />
                            <span>Validating & Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Project Inquiry</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              ) : (
                /* Success Confirmation Receipt Card */
                <div className="form-success-receipt" role="status" aria-live="polite">
                  <div className="success-icon-bubble">
                    <CheckCircle2 size={36} className="text-emerald-500" />
                  </div>

                  <h3 className="success-title">Inquiry Logged Successfully!</h3>
                  <p className="success-subtitle">
                    Thank you, <strong>{submittedData?.fullName}</strong>. Your project inquiry has been received and verified.
                  </p>

                  <div className="receipt-summary-box">
                    <h4 className="receipt-heading">Submitted Summary</h4>
                    <div className="receipt-row">
                      <span className="receipt-label">Work Email:</span>
                      <span className="receipt-val">{submittedData?.businessEmail}</span>
                    </div>
                    {submittedData?.companyName && (
                      <div className="receipt-row">
                        <span className="receipt-label">Company:</span>
                        <span className="receipt-val">{submittedData.companyName}</span>
                      </div>
                    )}
                    <div className="receipt-row">
                      <span className="receipt-label">Selected Service:</span>
                      <span className="receipt-val highlight">{getServiceName(submittedData?.selectedService || '')}</span>
                    </div>
                    <div className="receipt-row">
                      <span className="receipt-label">Target Horizon:</span>
                      <span className="receipt-val">{submittedData?.estimatedTimeline}</span>
                    </div>
                  </div>

                  <div className="success-next-steps">
                    <h4>Next Steps:</h4>
                    <p>
                      In a production deployment, this payload is securely dispatched to the orchestration queue. 
                      You would receive an automated email confirmation with a direct calendar link to schedule your technical discovery.
                    </p>
                  </div>

                  <button 
                    type="button" 
                    onClick={handleResetForm}
                    className="btn btn--secondary btn--full-width"
                  >
                    <span>Submit Another Demonstration Inquiry</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
