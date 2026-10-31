import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
        <Link to="/" className="brand-logo" aria-label="Friends Universe Private Limited Home">
          <div className="logo-icon-wrap">
            <img 
              src="/logo-icon.png" 
              alt="Friends Universe Logo" 
              className="navbar-brand-img"
              width="38"
              height="38" 
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">FRIENDS UNIVERSE</span>
            <span className="brand-legal">PRIVATE LIMITED</span>
          </div>
        </Link>

        {/* Clean Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === "/" && !location.hash ? "active" : ""}`}>
            Home
          </Link>
          <Link 
            to="/#product" 
            className="nav-link" 
            onClick={() => scrollToSection("product")}
          >
            inbbl (App)
          </Link>
          <Link 
            to="/#services" 
            className="nav-link" 
            onClick={() => scrollToSection("services")}
          >
            What We Do
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
            About
          </Link>
          <Link to="/support" className={`nav-link ${location.pathname === "/support" ? "active" : ""}`}>
            Help &amp; Support
          </Link>
        </nav>

        {/* Contact Action */}
        <div className="nav-actions">
          <Link 
            to="/#contact" 
            className="btn btn-primary nav-cta"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Link>

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
          <Link to="/#product" className="mobile-link" onClick={() => scrollToSection("product")}>
            inbbl (Upcoming App)
          </Link>
          <Link to="/#services" className="mobile-link" onClick={() => scrollToSection("services")}>
            What We Do
          </Link>
          <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/support" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Help &amp; Support
          </Link>

          <div className="mobile-action-wrap">
            <Link 
              to="/#contact" 
              className="btn btn-primary w-100 text-center"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
