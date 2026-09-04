// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../asserts/img6.png';
import logoImage from '../asserts/logo.png';
import '../styles/auth.css';

const Home = () => {
  return (
    <div className="nf-site-wrapper">
      <header className="nf-site-header">
        <div className="nf-site-logo">
          <img src={logoImage} alt="NeuroFleetX logo" className="nf-logo-img" />
          <div className="nf-logo-text">
            <span className="nf-logo-main">NeuroFleetX</span>
            <span className="nf-logo-sub">Smart fleet operations</span>
          </div>
        </div>

        <nav className="nf-site-nav">
          <a href="#home" className="nf-site-nav-link active">
            Home
          </a>
          <a href="#capabilities" className="nf-site-nav-link">
            Capabilities
          </a>
          <a href="#why" className="nf-site-nav-link">
            Why us
          </a>
          <a href="#contact" className="nf-site-nav-link">
            Contact
          </a>
        </nav>

        <div className="nf-site-actions">
          <Link to="/login" className="nf-btn-outline nf-login-btn">
            Login
          </Link>
          <Link to="/register" className="nf-btn-primary nf-login-btn">
            Register
          </Link>
        </div>
      </header>

      <main>
        <section id="home" className="nf-hero-section">
          <div className="nf-hero-panel">
            <div className="nf-hero-copy">
              <p className="nf-kicker">Logistics intelligence</p>
              <h1>Optimise every route, vehicle, and delivery.</h1>
              <p className="nf-hero-description">
                NeuroFleetX gives logistics teams live fleet visibility, predictive routing, and simple driver performance tracking in one modern dashboard.
              </p>

              <div className="nf-hero-actions">
                <Link to="/register" className="nf-btn-primary nf-hero-btn">
                  Get started
                </Link>
                <Link to="/login" className="nf-btn-outline nf-hero-btn">
                  See demo
                </Link>
              </div>

              <div className="nf-hero-highlights">
                <div className="nf-highlight-pill">
                  <strong>99.8%</strong>
                  <span>fleet availability</span>
                </div>
                <div className="nf-highlight-pill">
                  <strong>15%</strong>
                  <span>route cost savings</span>
                </div>
                <div className="nf-highlight-pill">
                  <strong>24/7</strong>
                  <span>live tracking</span>
                </div>
              </div>
            </div>

            <div className="nf-hero-visual">
              <img src={heroImage} alt="Fleet analytics dashboard" />
            </div>
          </div>
        </section>

        <section id="capabilities" className="nf-features-section">
          <div className="nf-section-intro">
            <p className="nf-kicker">Capabilities</p>
            <h2>Control your fleet from planning to delivery.</h2>
          </div>

          <div className="nf-features-grid">
            <div className="nf-feature-card">
              <div className="nf-feature-icon">📍</div>
              <h3>Vehicle Tracking</h3>
              <p>Monitor every vehicle in real time with live location and status updates.</p>
            </div>
            <div className="nf-feature-card">
              <div className="nf-feature-icon">🧭</div>
              <h3>Route Optimization</h3>
              <p>Reduce idle time and fuel usage using smarter routing for every dispatch.</p>
            </div>
            <div className="nf-feature-card">
              <div className="nf-feature-icon">📊</div>
              <h3>Dashboard Insights</h3>
              <p>Visualise fleet performance with intuitive charts and KPI summaries.</p>
            </div>
            <div className="nf-feature-card">
              <div className="nf-feature-icon">🔒</div>
              <h3>Secure Access</h3>
              <p>Role-based login ensures drivers, managers and customers see only what they need.</p>
            </div>
          </div>
        </section>

        <section id="why" className="nf-why-section">
          <div className="nf-section-intro">
            <p className="nf-kicker">Why NeuroFleetX</p>
            <h2>Built for modern logistics teams and growing fleets.</h2>
          </div>

          <div className="nf-why-grid">
            <div className="nf-why-card">
              Real-time visibility across routes, drivers, and vehicles.
            </div>
            <div className="nf-why-card">
              Faster decisions with clear operations data and alerts.
            </div>
            <div className="nf-why-card">
              Reduce delivery costs while improving customer service.
            </div>
            <div className="nf-why-card">
              Easy onboarding for dispatchers, drivers, and customers.
            </div>
          </div>
        </section>

        <section className="nf-cta-section">
          <div className="nf-cta-card">
            <div>
              <p className="nf-kicker">Get started</p>
              <h2>Move from planning to action with confidence.</h2>
            </div>
            <div className="nf-cta-actions">
              <Link to="/register" className="nf-btn-primary nf-hero-btn">
                Start free
              </Link>
              <Link to="/login" className="nf-btn-outline nf-hero-btn">
                Login
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="nf-contact-section">
          <div className="nf-contact-card">
            <h2>Contact</h2>
            <p className="nf-contact-text">
              NeuroFleetX is a demo logistics platform built with React and Java. Explore intelligent fleet management through a polished interface built for supply chain professionals.
            </p>

            <div className="nf-contact-grid">
              <div>
                <h3>App name</h3>
                <p>NeuroFleetX</p>
              </div>
              <div>
                <h3>Tagline</h3>
                <p>Smart fleet operations for modern logistics.</p>
              </div>
              <div>
                <h3>Get in touch</h3>
                <p>Email: demo@example.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="nf-site-footer nf-footer-centered">
        <span>© {new Date().getFullYear()} NeuroFleetX. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Home;
