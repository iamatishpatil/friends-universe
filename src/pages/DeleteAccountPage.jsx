import React, { useState } from "react";
import { ShieldAlert, Trash2, CheckCircle2, Clock, Info } from "lucide-react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    reason: "No longer using the app",
    confirmCheckbox: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.confirmCheckbox) {
      alert("Please check the confirmation box to authorize account deletion.");
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSubmitted(true);
    }, 600);
  };

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

          {/* Option 2: Web Form */}
          <div className="corporate-card option-card">
            <div className="option-num">Option 2</div>
            <h3 className="option-title">Online Request Form</h3>
            <p className="option-desc">
              If you have already uninstalled the app, fill out this quick form:
            </p>

            {submitted ? (
              <div className="deletion-success">
                <CheckCircle2 size={40} className="success-icon" />
                <h4>Request Received</h4>
                <p>
                  We have received your account deletion request for <strong>{formData.email}</strong>. 
                  Our team will process the permanent deletion from our active systems.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="deletion-form">
                <div className="form-group">
                  <label className="form-label">Registered Email Address</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    required 
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Registered Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Reason (Optional)</label>
                  <select 
                    className="form-select"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  >
                    <option value="No longer using the app">No longer using the app</option>
                    <option value="Privacy concerns">Privacy concerns</option>
                    <option value="Created another account">Created another account</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="confirmCheck"
                    required
                    checked={formData.confirmCheckbox}
                    onChange={(e) => setFormData({ ...formData, confirmCheckbox: e.target.checked })}
                  />
                  <label htmlFor="confirmCheck">
                    I understand that deleting my account is permanent and cannot be undone.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100 delete-submit-btn"
                  disabled={processing}
                >
                  {processing ? "Submitting..." : "Submit Deletion Request"}
                </button>
              </form>
            )}
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
              Need help? Feel free to reach out via our <Link to="/support" className="inline-link">Help Portal</Link>.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
