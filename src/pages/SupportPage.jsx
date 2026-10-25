import React, { useState } from "react";
import { HelpCircle, ChevronDown, CheckCircle2, Search, MessageSquare, MapPin } from "lucide-react";
import "./SupportPage.css";

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [ticketState, setTicketState] = useState({
    name: "",
    email: "",
    subject: "inbbl Question",
    message: ""
  });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      a: "Simply fill out the form on this page with your question or feedback. We read every message and will respond directly to your email address."
    }
  ];

  const filteredFaqs = faqs.filter(
    (f) => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setTicketSubmitted(true);
      setTicketState({ name: "", email: "", subject: "inbbl Question", message: "" });
    }, 600);
  };

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
            Find quick answers to common questions about inbbl, or send our team a direct message below.
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

      {/* Main Split */}
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
                  <p>No answers found for "{searchQuery}". Please send us a message below.</p>
                </div>
              )}
            </div>
          </div>

          {/* Ticket Form */}
          <div className="ticket-column">
            <div className="corporate-card ticket-card">
              <h2 className="ticket-card-title">Send Us a Question</h2>
              <p className="ticket-card-desc">Need assistance? Fill out this short form and we will reply to your email.</p>

              {ticketSubmitted ? (
                <div className="ticket-success">
                  <CheckCircle2 size={40} className="ticket-success-icon" />
                  <h3>Message Received!</h3>
                  <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setTicketSubmitted(false)}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="ticket-form">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      required 
                      placeholder="e.g. Priya Patel"
                      value={ticketState.name}
                      onChange={(e) => setTicketState({ ...ticketState, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      required 
                      placeholder="you@example.com"
                      value={ticketState.email}
                      onChange={(e) => setTicketState({ ...ticketState, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Topic</label>
                    <select 
                      className="form-select"
                      value={ticketState.subject}
                      onChange={(e) => setTicketState({ ...ticketState, subject: e.target.value })}
                    >
                      <option value="inbbl Question">inbbl App Question</option>
                      <option value="Account Deletion">Account or Data Question</option>
                      <option value="General Question">General Feedback</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">How can we help?</label>
                    <textarea 
                      className="form-textarea" 
                      required 
                      rows={4}
                      placeholder="Describe your question or issue..."
                      value={ticketState.message}
                      onChange={(e) => setTicketState({ ...ticketState, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn w-100"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Submit Question"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
