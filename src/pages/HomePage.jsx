import React, { useState } from "react";
import { 
  Smartphone, Server, Layers, CheckCircle2, ArrowRight, 
  Send, Sparkles, MessageSquare, Shield, MapPin, Heart
} from "lucide-react";
import "./HomePage.css";

export default function HomePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Question",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "We build native and cross-platform apps for iOS and Android with smooth interactions and simple navigation.",
      tags: ["iOS", "Android", "Mobile Apps"]
    },
    {
      icon: Server,
      title: "Web & Backend Systems",
      desc: "Fast, dependable web applications and backend APIs designed to handle real-time messaging and cloud data securely.",
      tags: ["Web Apps", "Cloud APIs", "Reliability"]
    },
    {
      icon: Layers,
      title: "UI/UX & Product Design",
      desc: "Thoughtful interface design focused on usability and clarity so users can get things done without confusion.",
      tags: ["Interface Design", "Simplicity", "Usability"]
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormState({ name: "", email: "", subject: "General Question", message: "" });
    }, 600);
  };

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="badge badge-brand hero-badge">
            Friends Universe Private Limited
          </div>

          <h1 className="hero-headline">
            Thoughtful software built for everyday people.
          </h1>

          <p className="hero-description">
            We are an independent software company based in Bengaluru. We build simple mobile applications 
            and digital tools designed to bring people together through genuine conversations.
          </p>

          <div className="hero-actions">
            <a href="#product" className="btn btn-primary">
              <span>Meet inbbl (Upcoming App)</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Send Us a Message</span>
            </a>
          </div>
        </div>
      </section>

      {/* CORE HIGHLIGHTS */}
      <section className="expertise-strip">
        <div className="container expertise-container">
          <div className="expertise-item">
            <Smartphone size={18} className="expertise-icon" />
            <span>Mobile-First Apps</span>
          </div>
          <div className="expertise-item">
            <MessageSquare size={18} className="expertise-icon" />
            <span>Real-Time Voice &amp; Chat</span>
          </div>
          <div className="expertise-item">
            <Shield size={18} className="expertise-icon" />
            <span>Respectful Privacy</span>
          </div>
          <div className="expertise-item">
            <Layers size={18} className="expertise-icon" />
            <span>Clean, Intuitive Design</span>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT: INBBL */}
      <section id="product" className="section product-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Featured Mobile App</span>
            <h2 className="section-title">inbbl — A simpler way to talk and connect.</h2>
            <p className="section-description">
              Most social platforms today feel noisy, crowded, and stressful. We are building inbbl to bring back real conversations.
            </p>
          </div>

          <div className="product-card corporate-card">
            <div className="product-grid">
              
              {/* Product Info */}
              <div className="product-details">
                <div className="product-badges">
                  <span className="badge badge-brand">Upcoming Mobile App</span>
                  <span className="badge badge-subtle">Voice &amp; Community Spaces</span>
                </div>

                <h3 className="product-name">inbbl</h3>
                <p className="product-tagline">
                  Building genuine conversations and meaningful human connections.
                </p>

                <p className="product-description">
                  Whether it is hopping into a casual voice room to chat about music, finding friends who share your 
                  hobbies, or just unwinding with a relaxed voice conversation after work, inbbl is designed to be 
                  welcoming, safe, and easy to use.
                </p>

                <div className="product-features">
                  <h4 className="features-heading">What to expect inside inbbl:</h4>
                  <ul>
                    <li>
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Live voice and audio rooms for spontaneous, relaxed chats</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Respectful community spaces with simple reporting tools</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Topic-based circles to help you find people with shared interests</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Built for smooth performance on both iPhone and Android devices</span>
                    </li>
                  </ul>
                </div>

                <div className="product-action-row">
                  <span className="product-status-text">
                    Currently in active mobile development for App Store and Google Play.
                  </span>
                  <a href="#contact" className="btn btn-outline">
                    Ask About inbbl
                  </a>
                </div>
              </div>

              {/* Product Visual Box */}
              <div className="product-visual-box">
                <div className="app-preview-card">
                  <div className="preview-header">
                    <div className="preview-dot"></div>
                    <span className="preview-title">inbbl App Preview</span>
                    <span className="preview-badge">UPCOMING</span>
                  </div>

                  <div className="preview-body">
                    <div className="preview-app-icon">
                      <Sparkles size={36} color="#1D4ED8" />
                    </div>
                    <h4 className="preview-app-name">inbbl</h4>
                    <p className="preview-app-desc">Social Voice &amp; Connection Platform</p>
                    
                    <div className="preview-feature-box">
                      <MessageSquare size={16} className="feature-box-icon" />
                      <span>Real-Time Voice Rooms</span>
                    </div>

                    <div className="preview-pill-row">
                      <span className="pill">iOS Support</span>
                      <span className="pill">Android Support</span>
                      <span className="pill">Safe Community</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO (SERVICES) */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Software &amp; Digital Engineering</h2>
            <p className="section-description">
              In addition to developing inbbl, our team designs and engineers software solutions for mobile and web.
            </p>
          </div>

          <div className="services-grid">
            {services.map((srv, idx) => {
              const SrvIcon = srv.icon;
              return (
                <div key={idx} className="corporate-card service-card">
                  <div className="service-icon-box">
                    <SrvIcon size={22} className="service-icon" />
                  </div>
                  <h3 className="service-title">{srv.title}</h3>
                  <p className="service-desc">{srv.desc}</p>
                  
                  <div className="service-tags">
                    {srv.tags.map((t, i) => (
                      <span key={i} className="service-tag">{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK (PRINCIPLES) */}
      <section className="section principles-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">Built with Care and Respect</h2>
            <p className="section-description">
              Three simple guidelines that shape every screen and line of code we write.
            </p>
          </div>

          <div className="principles-grid">
            <div className="corporate-card principle-card">
              <div className="principle-num">01</div>
              <h4>Privacy First</h4>
              <p>
                We collect only what is needed to make the app work. We provide straightforward privacy policies and easy, self-service account deletion.
              </p>
            </div>

            <div className="corporate-card principle-card">
              <div className="principle-num">02</div>
              <h4>Clear, Human Interfaces</h4>
              <p>
                Apps should feel natural within seconds. We keep navigation clear and avoid dark patterns or confusing settings.
              </p>
            </div>

            <div className="corporate-card principle-card">
              <div className="principle-num">03</div>
              <h4>Reliable Performance</h4>
              <p>
                Whether you are joining an audio conversation or sending a message, our apps are built to respond quickly and reliably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-card corporate-card">
            <div className="contact-grid">
              
              {/* Contact Info */}
              <div className="contact-info">
                <span className="section-tag">Let's Talk</span>
                <h2 className="contact-title">Send Us a Message</h2>
                <p className="contact-desc">
                  Have a question about Friends Universe Private Limited, curious about the upcoming launch of inbbl, 
                  or want to discuss a software project? Drop us a note below and our team will get back to you.
                </p>

                <div className="contact-details-list">
                  <div className="contact-detail-item">
                    <MapPin size={18} className="detail-icon" />
                    <div>
                      <div className="detail-label">Location</div>
                      <div className="detail-val">Bengaluru, Karnataka, India</div>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <Heart size={18} className="detail-icon" />
                    <div>
                      <div className="detail-label">Support &amp; Feedback</div>
                      <div className="detail-val">We read every message and respond as quickly as possible.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="contact-form-wrap">
                {formSubmitted ? (
                  <div className="form-success">
                    <CheckCircle2 size={38} className="success-icon" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We will review your note and get back to your email shortly.</p>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="contact-form">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        required 
                        placeholder="e.g. Rahul Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        required 
                        placeholder="you@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">What is this regarding?</label>
                      <select 
                        className="form-select"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      >
                        <option value="inbbl Question">inbbl Mobile App Inquiry</option>
                        <option value="Software Project">Software Development Services</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea 
                        className="form-textarea" 
                        required 
                        rows={4}
                        placeholder="Tell us what you have in mind..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary submit-btn w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
