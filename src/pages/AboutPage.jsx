import React from "react";
import { Globe, Shield, Cpu, Building2, MapPin, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
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

      {/* Featured Upcoming Product */}
      <section className="section about-lineage-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Featured Mobile App</span>
            <h2 className="section-title">inbbl — In Active Development</h2>
            <p className="section-description">
              Our upcoming flagship social communication and community mobile platform.
            </p>
          </div>

          <div className="about-product-card corporate-card">
            <div className="about-product-badge">Upcoming Mobile App</div>
            <h3>inbbl</h3>
            <p className="about-product-desc">
              inbbl is being built around spontaneous voice rooms, shared interests, and welcoming community spaces. 
              We are currently testing and polishing the experience to bring it to both iPhone and Android users soon.
            </p>
            <div className="about-product-specs">
              <span>• Live Voice &amp; Audio Rooms</span>
              <span>• Welcoming Community Spaces</span>
              <span>• Simple, Respectful Moderation</span>
              <span>• In Active Development for iOS &amp; Android</span>
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
                <span className="section-tag">Company Details</span>
                <h2 className="corp-title">Corporate Overview</h2>
                <p className="corp-desc">
                  Registered details for Friends Universe Private Limited.
                </p>

                <div className="corp-info-list">
                  <div className="corp-info-item">
                    <Building2 size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Legal Entity Name</div>
                      <div className="corp-val">Friends Universe Private Limited</div>
                    </div>
                  </div>

                  <div className="corp-info-item">
                    <MapPin size={18} className="corp-icon" />
                    <div>
                      <div className="corp-lbl">Location</div>
                      <div className="corp-val">Bengaluru, Karnataka, India</div>
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
                  <span>Send Us a Note</span>
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
