import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <div className="logo-icon-wrap">
            <Globe className="logo-icon" size={18} />
          </div>
          <div className="brand-text">
            <span className="brand-name">FRIENDS UNIVERSE</span>
            <span className="brand-legal">PRIVATE LIMITED</span>
          </div>
        </Link>

        {/* Clean Desktop Navigation (No clutter) */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => scrollToSection("product")}
          >
            inbbl (App)
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => scrollToSection("services")}
          >
            What We Do
          </button>
          <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
            About
          </Link>
          <Link to="/support" className={`nav-link ${location.pathname === "/support" ? "active" : ""}`}>
            Help &amp; Support
          </Link>
        </nav>

        {/* Contact Action */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn btn-primary nav-cta"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button>

          <button 
            type="button" 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-content">
          <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <button type="button" className="mobile-link" onClick={() => scrollToSection("product")}>
            inbbl (Upcoming App)
          </button>
          <button type="button" className="mobile-link" onClick={() => scrollToSection("services")}>
            What We Do
          </button>
          <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/support" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Help &amp; Support
          </Link>

          <div className="mobile-action-wrap">
            <button 
              type="button" 
              className="btn btn-primary w-100"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
