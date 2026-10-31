import React from "react";
import { ShieldAlert, Trash2, Clock, Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

export default function DeleteAccountPage() {
  return (
    <div className="legal-page">
      <div className="container legal-container">
        
        <div className="legal-header">
          <div className="badge badge-brand">
            <Trash2 size={13} />
            <span>Account Deletion Portal</span>
          </div>
          <h1 className="legal-title">Delete Your Account &amp; Data</h1>
          <p className="legal-subtitle">
            Friends Universe Private Limited gives you full control of your account. 
            You can permanently delete your inbbl profile and associated data at any time.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="corporate-card deletion-warning-card">
          <div className="warning-icon-wrap">
            <ShieldAlert size={24} className="warning-icon" />
          </div>
          <div className="warning-content">
            <h3>Permanent Action</h3>
            <p>
              Deleting your account is permanent. It removes your profile, display name, friends list, 
              and messaging history. Once deleted, this information cannot be recovered.
            </p>
          </div>
        </div>

        {/* Two Options */}
        <div className="deletion-options-grid">
          
          {/* Option 1: In-App */}
          <div className="corporate-card option-card">
            <div className="option-num">Option 1</div>
            <h3 className="option-title">Delete Inside the App</h3>
            <p className="option-desc">
              The fastest way to delete your account is right inside the mobile app:
            </p>

            <ol className="option-steps">
              <li>Open the <strong>inbbl</strong> app on your phone.</li>
              <li>Tap your <strong>Profile</strong> icon.</li>
              <li>Open <strong>Settings (⚙)</strong>.</li>
              <li>Go to <strong>Privacy &amp; Security</strong>.</li>
              <li>Tap <strong>Delete Account &amp; Data</strong> and confirm.</li>
            </ol>
            <div className="option-meta">
              <Clock size={14} /> Available directly in app settings
            </div>
          </div>

          {/* Option 2: Email Request */}
          <div className="corporate-card option-card">
            <div className="option-num">Option 2</div>
            <h3 className="option-title">Direct Email Request</h3>
            <p className="option-desc">
              If you have already uninstalled the app or cannot log in, email our support desk directly:
            </p>

            <ol className="option-steps">
              <li>Send an email to <strong>support@friendsuniverse.in</strong>.</li>
              <li>Use subject: <strong>Account Deletion Request - inbbl</strong>.</li>
              <li>Include your registered email address or phone number.</li>
            </ol>

            <div className="deletion-action-wrap" style={{ marginTop: "1.5rem" }}>
              <a 
                href="mailto:support@friendsuniverse.in?subject=Account%20Deletion%20Request%20-%20inbbl&body=Hello%20Friends%20Universe%20Support,%0A%0APlease%20permanently%20delete%20my%20inbbl%20account%20and%20all%20associated%20data.%0A%0ARegistered%20Email:%20%0ARegistered%20Phone:%20"
                className="btn btn-primary w-100 delete-submit-btn"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", textDecoration: "none" }}
              >
                <Mail size={16} />
                <span>Email Support for Deletion</span>
              </a>
            </div>

            <div className="option-meta" style={{ marginTop: "1.25rem" }}>
              <Clock size={14} /> Processed within 24-48 business hours
            </div>
          </div>

        </div>

        {/* Policy Box */}
        <div className="corporate-card legal-policy-box">
          <h3>What Happens When You Delete</h3>
          <p>
            When you request account deletion, we immediately disable your profile and begin the process of permanently removing your account records, avatar, and conversation logs from our active databases. 
          </p>
          <div className="policy-dpo-note">
            <Info size={16} />
            <span>
              Need assistance? Email our support team at <a href="mailto:support@friendsuniverse.in" className="inline-link">support@friendsuniverse.in</a> or call <a href="tel:+918087763470" className="inline-link">+91 80877 63470</a>. You can also visit our <Link to="/support" className="inline-link">Help Portal</Link>.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
