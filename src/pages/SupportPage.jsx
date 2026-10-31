import React, { useState } from "react";
import { HelpCircle, ChevronDown, Search, MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "./SupportPage.css";

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      q: "What is inbbl and how does it work?",
      a: "inbbl is an upcoming mobile application designed for real conversations. You can join voice rooms to talk about shared interests, meet new people, and participate in friendly community audio spaces."
    },
    {
      q: "When can I download inbbl?",
      a: "We are currently testing inbbl on iOS and Android. As soon as public beta testing and store availability open, we will announce it right here on our website."
    },
    {
      q: "How can I request account or data deletion?",
      a: "We believe you should always have full control of your data. You can delete your account directly inside the inbbl app (Settings > Privacy > Delete Account), or submit an online request anytime through our web portal at /delete-account."
    },
    {
      q: "How do I report a problem or reach your team?",
      a: "You can call our direct helpline at +91 80877 63470 (Mon - Sat, 9:30 AM - 6:30 PM IST) or email our support desk directly at support@friendsuniverse.in. We read every message and respond within 24-48 business hours."
    }
  ];

  const filteredFaqs = faqs.filter(
    (f) => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="support-page">
      {/* Header */}
      <section className="support-header">
        <div className="container support-header-container">
          <div className="badge badge-brand">
            <HelpCircle size={14} />
            <span>Support &amp; Help</span>
          </div>

          <h1 className="support-title">How can we help?</h1>
          <p className="support-subtitle">
            Find quick answers to common questions about inbbl, reach out to our team directly, or contact our support desk below.
          </p>

          <div className="support-search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search questions (e.g. download, deletion)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Direct Contact Cards */}
      <section className="support-contact-strip">
        <div className="container">
          <div className="support-channels-grid">
            <a href="tel:+918087763470" className="channel-card">
              <div className="channel-icon-wrap channel-phone">
                <Phone size={22} />
              </div>
              <div className="channel-content">
                <div className="channel-label">Direct Helpline</div>
                <div className="channel-val">+91 80877 63470</div>
                <div className="channel-sub">Mon - Sat, 9:30 AM - 6:30 PM IST</div>
              </div>
            </a>

            <a href="mailto:support@friendsuniverse.in" className="channel-card">
              <div className="channel-icon-wrap channel-email">
                <Mail size={22} />
              </div>
              <div className="channel-content">
                <div className="channel-label">Support Email</div>
                <div className="channel-val">support@friendsuniverse.in</div>
                <div className="channel-sub">24-48 hour response SLA</div>
              </div>
            </a>

            <div className="channel-card channel-card-static">
              <div className="channel-icon-wrap channel-office">
                <MapPin size={22} />
              </div>
              <div className="channel-content">
                <div className="channel-label">Registered Office</div>
                <div className="channel-val">Novel Tech Park, Begur</div>
                <div className="channel-sub">Bengaluru, Karnataka - 560068</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Split: FAQs on left, Direct Helpdesk Card on right */}
      <section className="section support-body-section">
        <div className="container support-split-grid">
          
          {/* FAQ Column */}
          <div className="faq-column">
            <h2 className="faq-column-title">Frequently Asked Questions</h2>
            <p className="faq-column-desc">Quick answers about our apps and services.</p>

            <div className="faq-list">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`faq-item corporate-card ${activeFaq === idx ? "active" : ""}`}
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <div className="faq-question">
                      <span>{faq.q}</span>
                      <ChevronDown size={16} className={`faq-chevron ${activeFaq === idx ? "open" : ""}`} />
                    </div>
                    {activeFaq === idx && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="corporate-card no-results">
                  <p>No answers found for "{searchQuery}". Please reach out to our support team directly.</p>
                </div>
              )}
            </div>
          </div>

          {/* Direct Helpdesk Box (Replaced unbacked form) */}
          <div className="ticket-column">
            <div className="corporate-card helpdesk-action-card">
              <div className="helpdesk-badge">
                <ShieldCheck size={14} />
                <span>Official Helpdesk</span>
              </div>
              <h2 className="ticket-card-title">Need Dedicated Assistance?</h2>
              <p className="ticket-card-desc">
                Our support team is available to assist users, beta testers, and store reviewers. Contact us directly using any method below:
              </p>

              <div className="helpdesk-action-list">
                <a href="tel:+918087763470" className="btn btn-primary w-100 helpdesk-btn">
                  <Phone size={16} />
                  <span>Call +91 80877 63470</span>
                </a>

                <a href="mailto:support@friendsuniverse.in" className="btn btn-outline w-100 helpdesk-btn">
                  <Mail size={16} />
                  <span>Email support@friendsuniverse.in</span>
                </a>

                <Link to="/delete-account" className="btn btn-secondary w-100 helpdesk-btn">
                  <span>Account &amp; Data Deletion Portal</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="helpdesk-meta-box">
                <div className="meta-row">
                  <Clock size={14} className="meta-icon" />
                  <span>Hours: Mon - Sat, 9:30 AM - 6:30 PM IST</span>
                </div>
                <div className="meta-row">
                  <MapPin size={14} className="meta-icon" />
                  <span>Novel Tech Park, Begur, Bengaluru - 560068</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
