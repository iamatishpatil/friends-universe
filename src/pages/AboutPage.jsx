import React from "react";
import { 
  Shield, Cpu, Building2, MapPin, ArrowRight, MessageCircle,
  Phone, Mail 
} from "lucide-react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="badge badge-brand">
            <Building2 size={13} />
            <span>Who We Are</span>
          </div>

          <h1 className="about-headline">
            About Friends Universe Private Limited
          </h1>

          <p className="about-subtext">
            We are an independent software company based in Bengaluru. We build simple mobile applications 
            and digital tools designed to bring people together through genuine conversations.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section about-mission-section">
        <div className="container">
          <div className="mission-grid">
            
            <div className="corporate-card mission-card">
              <div className="mission-icon-wrap"><MessageCircle size={22} /></div>
              <h3>Real Conversations</h3>
              <p>
                We believe social apps should bring people closer together, not keep them endlessly scrolling. 
                Our focus is on real-time voice and community spaces where conversations feel natural.
              </p>
            </div>

            <div className="corporate-card mission-card">
              <div className="mission-icon-wrap"><Shield size={22} /></div>
              <h3>Respectful Privacy</h3>
              <p>
                Your data belongs to you. We ask only for permissions that are strictly necessary to make our apps work, 
                and we make account and data deletion transparent and effortless.
              </p>
            </div>

            <div className="corporate-card mission-card">
              <div className="mission-icon-wrap"><Cpu size={22} /></div>
              <h3>Thoughtful Engineering</h3>
              <p>
                We build clean, tested software for mobile and web. We care about fast load times, smooth audio, 
                and clean interfaces that make sense from the moment you open them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Identity & Logo Showcase */}
      <section className="section about-brand-section">
        <div className="container">
          <div className="corporate-card about-brand-card">
            <div className="about-brand-grid">
              <div className="about-brand-logo-col">
                <div className="about-brand-logo-frame">
                  <img 
                    src="/logo.png" 
                    alt="Friends Universe Private Limited Official Logo" 
                    className="about-brand-logo-img"
                  />
                </div>
              </div>
              <div className="about-brand-text-col">
                <span className="section-tag">Brand Identity</span>
                <h2>The Friends Universe Emblem</h2>
                <p>
                  Our logo embodies our mission: fresh, energetic, and interconnected communication. 
                  The signature interlocking "FU" ribbons rendered in vibrant lime and forest greens 
                  represent fluid conversation, transparency, and human warmth across our digital software platforms.
                </p>
                <div className="brand-specs-chips">
                  <span className="spec-chip">Legal Entity: Friends Universe Pvt. Ltd.</span>
                  <span className="spec-chip">CIN: U62090KA2026PTC215046</span>
                  <span className="spec-chip">D-U-N-S®: 77-201-0629</span>
                  <span className="spec-chip">Flagship Product: inbbl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Product */}
      <section className="section about-lineage-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Featured Mobile App</span>
            <h2 className="section-title">inbbl - In Active Development</h2>
            <p className="section-description">
              Our upcoming flagship social communication and community mobile platform.
            </p>
          </div>

          <div className="about-product-card corporate-card">
            <div className="about-product-header">
              <img src="/inbbl-icon.png" alt="inbbl" className="about-inbbl-icon" width="48" height="48" />
              <div>
                <div className="about-product-badge">Flagship Mobile Platform</div>
                <h3>inbbl</h3>
                <span className="about-product-sub">Same world. Closer. - Real people. Real moments.</span>
              </div>
            </div>

            <p className="about-product-desc">
              inbbl is being built around spontaneous voice rooms, shared interests, and welcoming community spaces. 
              Represented by a playful dolphin in a communication bubble, it brings people closer together through natural, fluid interaction.
            </p>

            <div className="about-inbbl-pillars">
              <span className="about-pillar">CONNECT</span>
              <span className="about-pillar">CHAT</span>
              <span className="about-pillar">CALL</span>
              <span className="about-pillar">MAP</span>
              <span className="about-pillar">POST</span>
            </div>

            <div className="about-product-specs">
              <span>- Live Voice &amp; Audio Rooms</span>
              <span>- Location-Aware Community Map</span>
              <span>- Simple, Respectful Moderation</span>
              <span>- In Active Development for iOS &amp; Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Registry Details */}
      <section className="section corporate-details-section">
        <div className="container">
          <div className="corporate-card corporate-id-card">
            <div className="corporate-id-grid">
              <div>
                <span className="section-tag">Official Statutory Registry</span>
                <h2 className="corp-title">Corporate Overview</h2>
                <p className="corp-desc">
                  Registered statutory details for Friends Universe Private Limited.
                </p>

                <div className="corp-info-list">
                  <div className="corp-info-item">
                    <Building2 size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Legal Entity Name</div>
                      <div className="corp-val">Friends Universe Private Limited (Private Limited Company)</div>
                    </div>
                  </div>

                  <div className="corp-info-item">
                    <Building2 size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Corporate Identification Number (CIN)</div>
                      <div className="corp-val"><code className="corp-cin-badge">U62090KA2026PTC215046</code></div>
                    </div>
                  </div>

                  <div className="corp-info-item">
                    <Building2 size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Dun &amp; Bradstreet (D-U-N-S®) Number</div>
                      <div className="corp-val"><code className="corp-cin-badge">77-201-0629</code></div>
                    </div>
                  </div>

                  <div className="corp-info-item">
                    <Building2 size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Director &amp; Leadership</div>
                      <div className="corp-val">Shrikan Patel (Director)</div>
                    </div>
                  </div>

                  <div className="corp-info-item">
                    <Phone size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Direct Contact</div>
                      <div className="corp-val">
                        <a href="tel:+918087763470" className="corp-link">+91 80877 63470</a>
                      </div>
                    </div>
                  </div>

                  <div className="corp-info-item">
                    <Mail size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Official Inquiries &amp; Support</div>
                      <div className="corp-val">
                        <a href="mailto:support@friendsuniverse.in" className="corp-link">support@friendsuniverse.in</a>
                        <span className="corp-divider"> | </span>
                        <a href="mailto:contact@friendsuniverse.in" className="corp-link">contact@friendsuniverse.in</a>
                      </div>
                    </div>
                  </div>

                  <div className="corp-info-item">
                    <MapPin size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Principal Place of Business &amp; Registered Office</div>
                      <div className="corp-val">
                        46/4, Novel Tech Park, Begur, Gb Palya Kudlu Gate, Bengaluru Urban, Karnataka - 560068, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="corp-action-box">
                <h4>Have a Question?</h4>
                <p>
                  Whether you have feedback on inbbl, want to ask a question, or explore working together, we would love to hear from you.
                </p>
                <Link to="/#contact" className="btn btn-primary w-100 corp-cta">
                  <span>Contact Us Directly</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
