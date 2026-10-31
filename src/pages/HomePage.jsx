import React from "react";
import { 
  Smartphone, Server, Layers, ArrowRight, 
  Sparkles, MessageSquare, Shield, MapPin, Building2,
  Phone, Mail
} from "lucide-react";
import "./HomePage.css";

export default function HomePage() {

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


  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="badge badge-brand hero-badge">
            <img 
              src="/logo-icon.png" 
              alt="Friends Universe" 
              className="hero-badge-logo" 
              width="18" 
              height="18" 
            />
            <span>Friends Universe Private Limited</span>
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
            <span className="section-tag">Flagship Mobile Platform</span>
            <h2 className="section-title">inbbl - Same world. Closer.</h2>
            <p className="section-description">
              A thoughtful social communication mobile platform built for real people and real moments. 
              Connect, chat, call, discover, and share without algorithmic noise.
            </p>
          </div>

          <div className="product-card corporate-card">
            <div className="product-grid">
              
              {/* Product Info */}
              <div className="product-details">
                <div className="product-badges">
                  <span className="badge badge-brand">Upcoming Mobile App</span>
                  <span className="badge badge-purple">Social &amp; Live Voice</span>
                </div>

                <div className="inbbl-header-lockup">
                  <img src="/inbbl-icon.png" alt="inbbl app icon" className="inbbl-title-icon" width="44" height="44" />
                  <div>
                    <h3 className="product-name">inbbl</h3>
                    <p className="product-tagline">Real people. Real moments.</p>
                  </div>
                </div>

                <p className="product-description">
                  inbbl brings people together through fluid conversation, spontaneous voice spaces, and authentic community connections. 
                  Represented by the playful dolphin inside a communication bubble, inbbl is designed to be welcoming, safe, and joyful.
                </p>

                {/* 5 Core Feature Pillars */}
                <div className="inbbl-pillars-grid">
                  <div className="pillar-item">
                    <span className="pillar-dot"></span>
                    <strong>CONNECT</strong>
                    <p>Meet authentic friends with shared passions</p>
                  </div>
                  <div className="pillar-item">
                    <span className="pillar-dot"></span>
                    <strong>CHAT</strong>
                    <p>Real-time messaging &amp; friendly group spaces</p>
                  </div>
                  <div className="pillar-item">
                    <span className="pillar-dot"></span>
                    <strong>CALL</strong>
                    <p>Spontaneous live audio &amp; relaxed voice rooms</p>
                  </div>
                  <div className="pillar-item">
                    <span className="pillar-dot"></span>
                    <strong>MAP</strong>
                    <p>Local discovery &amp; nearby community events</p>
                  </div>
                  <div className="pillar-item">
                    <span className="pillar-dot"></span>
                    <strong>POST</strong>
                    <p>Share everyday moments without pressure</p>
                  </div>
                </div>

                {/* Why a dolphin */}
                <div className="dolphin-philosophy-card">
                  <div className="dolphin-badge">Brand Philosophy</div>
                  <p>
                    <strong>Why a dolphin?</strong> Dolphins are social, playful, and always connected. 
                    They bring people together through natural harmony - just like <strong>inbbl</strong>.
                  </p>
                  <div className="dolphin-values">
                    <span className="dolphin-pill">Social</span>
                    <span className="dolphin-pill">Flow</span>
                    <span className="dolphin-pill">Friendship</span>
                    <span className="dolphin-pill">Positive</span>
                  </div>
                </div>

                <div className="product-action-row">
                  <span className="product-status-text">
                    In active mobile development for Apple App Store and Google Play.
                  </span>
                  <a href="#contact" className="btn btn-outline">
                    Ask About inbbl
                  </a>
                </div>
              </div>

              {/* Product Identity Box (Clean Logo & Explanation, No screenshots) */}
              <div className="product-visual-box">
                <div className="inbbl-clean-card">
                  <div className="inbbl-clean-header">
                    <img 
                      src="/inbbl-icon.png" 
                      alt="inbbl Official Logo Emblem" 
                      className="inbbl-clean-logo" 
                      width="80" 
                      height="80" 
                    />
                    <div className="inbbl-clean-brand">
                      <h4>inbbl</h4>
                      <span className="inbbl-clean-tagline">Same world. Closer.</span>
                    </div>
                  </div>

                  <div className="inbbl-clean-highlights">
                    <div className="clean-highlight-item">
                      <div className="clean-dot"></div>
                      <div>
                        <strong>Spontaneous Voice Rooms</strong>
                        <p>Drop-in casual voice spaces without camera pressure or social fatigue.</p>
                      </div>
                    </div>

                    <div className="clean-highlight-item">
                      <div className="clean-dot"></div>
                      <div>
                        <strong>Real-Time Community Connections</strong>
                        <p>Topic circles and local map discovery built for genuine human interaction.</p>
                      </div>
                    </div>

                    <div className="clean-highlight-item">
                      <div className="clean-dot"></div>
                      <div>
                        <strong>Respectful Privacy Architecture</strong>
                        <p>No audio recording sales, transparent controls, and easy self-service deletion.</p>
                      </div>
                    </div>
                  </div>

                  <div className="inbbl-clean-footer">
                    <span className="clean-pill">iOS Support</span>
                    <span className="clean-pill">Android Support</span>
                    <span className="clean-pill">Safe Community</span>
                    <span className="clean-pill">Zero Data Sales</span>
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
            <div className="contact-hub-header">
              <span className="section-tag">Direct Communication</span>
              <h2 className="contact-title">Contact Friends Universe</h2>
              <p className="contact-desc">
                Have a question about our upcoming mobile platform <strong>inbbl</strong>, need technical assistance, 
                or want to explore working with our engineering team? Reach out directly through any of our official channels below.
              </p>
            </div>

            <div className="contact-hub-grid">
              {/* Channel 1: Phone */}
              <div className="contact-hub-item">
                <div className="hub-icon-wrap hub-phone">
                  <Phone size={24} />
                </div>
                <h3>Direct Phone</h3>
                <p className="hub-val">+91 80877 63470</p>
                <p className="hub-sub">Mon - Sat, 9:30 AM - 6:30 PM IST</p>
                <a href="tel:+918087763470" className="btn btn-primary w-100 hub-btn">
                  <span>Call Us Directly</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Channel 2: Support Email */}
              <div className="contact-hub-item">
                <div className="hub-icon-wrap hub-email">
                  <Mail size={24} />
                </div>
                <h3>Support &amp; Helpdesk</h3>
                <p className="hub-val">support@friendsuniverse.in</p>
                <p className="hub-sub">App support, deletion, &amp; store inquiries</p>
                <a href="mailto:support@friendsuniverse.in" className="btn btn-outline w-100 hub-btn">
                  <span>Email Support Desk</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Channel 3: Corporate Email */}
              <div className="contact-hub-item">
                <div className="hub-icon-wrap hub-corp">
                  <Building2 size={24} />
                </div>
                <h3>Corporate Inquiries</h3>
                <p className="hub-val">contact@friendsuniverse.in</p>
                <p className="hub-sub">Partnerships &amp; software engineering</p>
                <a href="mailto:contact@friendsuniverse.in" className="btn btn-outline w-100 hub-btn">
                  <span>Send Corporate Note</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Statutory Registered Office Banner */}
            <div className="contact-hub-footer">
              <div className="hub-footer-row">
                <div className="hub-footer-col">
                  <span className="hub-footer-lbl">Legal Entity</span>
                  <strong>Friends Universe Private Limited</strong>
                  <span className="hub-cin-text">CIN: U62090KA2026PTC215046</span>
                </div>
                <div className="hub-footer-col">
                  <span className="hub-footer-lbl">Principal Place of Business &amp; Registered Office</span>
                  <span>46/4, Novel Tech Park, Begur, Gb Palya Kudlu Gate, Bengaluru Urban, Karnataka - 560068, India</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
