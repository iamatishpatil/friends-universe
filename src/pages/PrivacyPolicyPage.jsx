import React from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="legal-page">
      <div className="container legal-container">
        
        <div className="legal-header">
          <div className="badge badge-brand">
            <Shield size={14} />
            <span>Privacy Disclosure</span>
          </div>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">
            Last Updated: {lastUpdated} | Friends Universe Private Limited
          </p>
        </div>

        <div className="corporate-card legal-document-card">
          <div className="doc-section">
            <h2>1. Introduction</h2>
            <p>
              Friends Universe Private Limited ("we", "our", or "us") respects your privacy. 
              This Privacy Policy explains how we handle information when you use our mobile application 
              <strong> inbbl</strong> and our official website.
            </p>
            <p>
              We believe in simple, transparent policies. We do not sell your personal data, and we collect 
              only what is needed to make inbbl work smoothly and keep our community safe.
            </p>
          </div>

          <div className="doc-section">
            <h2>2. Information We Collect</h2>
            <p>When you create an account or interact with inbbl, we may collect:</p>
            
            <h3>A. Information You Provide Directly</h3>
            <ul>
              <li><strong>Account Information:</strong> Your display name, email address, mobile number, and basic profile details you choose to share.</li>
              <li><strong>Profile Information:</strong> Any avatar picture, bio, or interests you optionally choose to display.</li>
              <li><strong>Support Inquiries:</strong> Messages and questions you send to our support team so we can assist you.</li>
            </ul>

            <h3>B. Automatically Collected Technical Data</h3>
            <ul>
              <li><strong>Device &amp; App Diagnostics:</strong> Device model, operating system version (iOS/Android), and crash logs to help us fix bugs and keep the app running reliably.</li>
              <li><strong>Live Audio Streams:</strong> In inbbl, audio is streamed in real time during active voice conversations. We do not sell, record, or monetize your private conversations.</li>
            </ul>
          </div>

          <div className="doc-section">
            <h2>3. App Permissions We Ask For</h2>
            <p>We request only permissions strictly needed to enable inbbl features:</p>
            <div className="permissions-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Permission</th>
                    <th>Application</th>
                    <th>Why It Is Needed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Microphone</strong></td>
                    <td>inbbl</td>
                    <td>Used only while you are actively speaking in a voice room. It is never used in the background when you are not in a call.</td>
                  </tr>
                  <tr>
                    <td><strong>Photos / Storage</strong></td>
                    <td>inbbl</td>
                    <td>Optional; used only if you decide to upload a profile avatar picture.</td>
                  </tr>
                  <tr>
                    <td><strong>Notifications</strong></td>
                    <td>inbbl</td>
                    <td>Optional; alerts you to room invites or new messages. You can turn this off anytime in your phone settings.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="doc-section">
            <h2>4. How We Use Information</h2>
            <p>We use your information exclusively to:</p>
            <ul>
              <li>Set up your profile and log you into the app.</li>
              <li>Connect you to voice rooms, friends, and community topics.</li>
              <li>Respond to your questions and help requests.</li>
              <li>Keep our community safe by investigating reports of harassment or abusive behavior.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal data to advertisers or third-party brokers.</p>
          </div>

          <div className="doc-section">
            <h2>5. Data Security</h2>
            <p>
              We take sensible security precautions to protect your personal information against unauthorized access, loss, or misuse. All communication between the app and our servers uses industry-standard TLS encryption.
            </p>
          </div>

          <div className="doc-section">
            <h2>6. Children’s Privacy</h2>
            <p>
              inbbl is intended for users who are 13 years of age or older. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has created an account, please let us know so we can promptly delete the account and its records.
            </p>
          </div>

          <div className="doc-section">
            <h2>7. Deleting Your Account &amp; Data</h2>
            <p>
              You always have the right to permanently delete your account and personal data. You can delete your account directly inside the inbbl app (under Settings &gt; Privacy &gt; Delete Account) or request deletion anytime through our web portal at <Link to="/delete-account" className="inline-link">/delete-account</Link>.
            </p>
          </div>

          <div className="doc-section">
            <h2>8. Contacting Us</h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy or your data, you can reach out to us through our <Link to="/support" className="inline-link">Support &amp; Help Portal</Link> or by contacting our team directly.
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
