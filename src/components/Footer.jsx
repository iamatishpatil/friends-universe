import React from "react";
import { Link } from "react-router-dom";
import { MapPin, MessageSquare, Building2, ShieldCheck, Phone, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand & Contact Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo" aria-label="Friends Universe Private Limited">
              <div className="footer-logo-icon">
                <img 
                  src="/logo-icon.png" 
                  alt="Friends Universe" 
                  className="footer-brand-img"
                  width="36" 
                  height="36" 
                />
              </div>
              <div className="footer-logo-text">
                <span className="brand-title">FRIENDS UNIVERSE</span>
                <span className="brand-subtitle">PRIVATE LIMITED</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Friends Universe Private Limited is an independent software and mobile applications company based in Bengaluru. 
              Creators of the upcoming voice platform <strong>inbbl</strong>.
            </p>

            <div className="footer-reg-box">
              <div className="footer-reg-row">
                <Building2 size={14} className="reg-icon" />
                <span>CIN: <strong className="cin-code">U62090KA2026PTC215046</strong></span>
              </div>
              <div className="footer-reg-row">
                <Phone size={14} className="reg-icon" />
                <a href="tel:+918087763470" className="footer-contact-link">+91 80877 63470</a>
              </div>
              <div className="footer-reg-row">
                <Mail size={14} className="reg-icon" />
                <a href="mailto:support@friendsuniverse.in" className="footer-contact-link">support@friendsuniverse.in</a>
              </div>
              <div className="footer-reg-row">
                <MapPin size={14} className="reg-icon" />
                <span>46/4, Novel Tech Park, Begur, Gb Palya Kudlu Gate, Bengaluru Urban, Karnataka - 560068</span>
              </div>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="footer-col">
            <h4 className="footer-heading">Mobile Platform</h4>
            <ul className="footer-links">
              <li>
                <Link to="/#product" className="footer-link">
                  inbbl (Upcoming App)
                </Link>
              </li>
              <li><span className="footer-sub-badge">iOS &amp; Android</span></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Capabilities</h4>
            <ul className="footer-links">
              <li><Link to="/#services" className="footer-link">Mobile App Engineering</Link></li>
              <li><Link to="/#services" className="footer-link">Cloud &amp; Real-Time Systems</Link></li>
              <li><Link to="/#services" className="footer-link">UI/UX &amp; Product Design</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies (For Store Reviewers) */}
          <div className="footer-col">
            <h4 className="footer-heading">Legal &amp; Store Policies</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms &amp; Conditions</Link></li>
              <li><Link to="/delete-account" className="footer-link">Account &amp; Data Deletion</Link></li>
              <li><Link to="/support" className="footer-link highlight">Helpdesk &amp; Support</Link></li>
              <li><Link to="/about" className="footer-link">About Friends Universe</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-contact-items">
            <span className="contact-item">
              <ShieldCheck size={14} /> Registered in Bengaluru, Karnataka, India
            </span>
            <span className="contact-item">
              <Phone size={14} /> <a href="tel:+918087763470" className="footer-bottom-link">+91 80877 63470</a>
            </span>
            <span className="contact-item">
              <Mail size={14} /> <a href="mailto:contact@friendsuniverse.in" className="footer-bottom-link">contact@friendsuniverse.in</a>
            </span>
          </div>
          <p className="copyright-text">
            © {currentYear} Friends Universe Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
