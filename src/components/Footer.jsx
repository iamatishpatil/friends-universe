import React from "react";
import { Link } from "react-router-dom";
import { Globe, MapPin, MessageSquare } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Globe size={18} />
              </div>
              <div className="footer-logo-text">
                <span className="brand-title">FRIENDS UNIVERSE</span>
                <span className="brand-subtitle">PRIVATE LIMITED</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Friends Universe Private Limited is a software company based in Bengaluru. 
              We build simple, practical mobile applications and digital tools designed around real human connection.
            </p>
          </div>

          {/* Col 2: Product */}
          <div className="footer-col">
            <h4 className="footer-heading">Mobile Product</h4>
            <ul className="footer-links">
              <li>
                <a href="#product" className="footer-link">
                  inbbl (Upcoming Social App)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">What We Do</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Mobile App Development</a></li>
              <li><a href="#services" className="footer-link">Web &amp; Cloud Applications</a></li>
              <li><a href="#services" className="footer-link">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies (For Store Reviewers) */}
          <div className="footer-col">
            <h4 className="footer-heading">Legal &amp; Store Policies</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms &amp; Conditions</Link></li>
              <li><Link to="/delete-account" className="footer-link">Account &amp; Data Deletion</Link></li>
              <li><Link to="/support" className="footer-link highlight">Support &amp; Helpdesk</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-contact-items">
            <span className="contact-item">
              <MapPin size={15} /> Bengaluru, Karnataka, India
            </span>
            <span className="contact-item">
              <MessageSquare size={15} /> Reach us through our <Link to="/support" className="footer-bottom-link">Help Portal</Link> or Contact Form
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
