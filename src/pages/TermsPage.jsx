import React from "react";
import { Scale } from "lucide-react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

export default function TermsPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="legal-page">
      <div className="container legal-container">
        
        <div className="legal-header">
          <div className="badge badge-brand">
            <Scale size={14} />
            <span>Community &amp; App Terms</span>
          </div>
          <h1 className="legal-title">Terms &amp; Conditions</h1>
          <p className="legal-subtitle">
            Last Updated: {lastUpdated} | Friends Universe Private Limited
          </p>
        </div>

        <div className="corporate-card legal-document-card">
          <div className="doc-section">
            <h2>1. Welcome to Friends Universe</h2>
            <p>
              These Terms and Conditions apply when you use the <strong>inbbl</strong> mobile application 
              or visit our official website, operated by Friends Universe Private Limited ("we", "us"). 
              By using our apps or website, you agree to follow these simple terms.
            </p>
          </div>

          <div className="doc-section">
            <h2>2. Who Can Use Our Apps</h2>
            <p>
              You must be at least 13 years old to create an account on inbbl. By registering, you confirm that you meet this requirement and that the account information you provide is accurate.
            </p>
          </div>

          <div className="doc-section">
            <h2>3. Community Standards &amp; Respectful Use</h2>
            <p>
              inbbl is built to be a friendly, respectful space where people can connect honestly. To keep it welcoming for everyone, you agree not to:
            </p>
            <ul>
              <li>Bully, harass, threaten, or demean other users.</li>
              <li>Share illegal, abusive, sexually explicit, or hate-promoting content.</li>
              <li>Impersonate someone else or misrepresent who you are.</li>
              <li>Send spam, pyramid schemes, or unsolicited commercial advertisements.</li>
              <li>Attempt to hack, disrupt, or reverse-engineer the app or servers.</li>
            </ul>
            <p>
              We reserve the right to suspend or remove accounts that repeatedly or severely violate these community standards.
            </p>
          </div>

          <div className="doc-section">
            <h2>4. Intellectual Property</h2>
            <p>
              The inbbl mobile application, designs, logos, and code are owned by Friends Universe Private Limited. You receive a personal, non-exclusive license to use the app on your mobile device according to these terms.
            </p>
          </div>

          <div className="doc-section">
            <h2>5. Service Availability &amp; Updates</h2>
            <p>
              We work hard to keep inbbl running smoothly. However, services are provided "as is", and occasional downtime or updates may occur. We cannot be held liable for temporary interruptions or technical glitches beyond our reasonable control.
            </p>
          </div>

          <div className="doc-section">
            <h2>6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any legal disputes shall be handled in the courts of Bengaluru, Karnataka, India.
            </p>
          </div>

          <div className="doc-section">
            <h2>7. Questions</h2>
            <p>
              If you have any questions about these Terms, feel free to contact us through our <Link to="/support" className="inline-link">Help Portal</Link> or by contacting our team directly.
            </p>
            <div className="legal-contact-card">
              <div><strong>Friends Universe Private Limited</strong></div>
              <div className="legal-cin-text">CIN: U62090KA2026PTC215046</div>
              <div>46/4, Novel Tech Park, Begur, Gb Palya Kudlu Gate, Bengaluru Urban, Karnataka - 560068, India</div>
              <div>Email: <a href="mailto:support@friendsuniverse.in" className="inline-link">support@friendsuniverse.in</a> &nbsp;|&nbsp; Phone: <a href="tel:+918087763470" className="inline-link">+91 80877 63470</a></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
