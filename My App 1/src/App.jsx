import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="contact-root">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-left">
          <div className="logo-icon">
            <span className="material-symbols-outlined">token</span>
          </div>
          <h2 className="logo-text">E-Shop</h2>

          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a className="active" href="#">Contact</a>
          </nav>
        </div>

        <div className="nav-right">
          <button className="btn primary">Log In</button>
          <button className="btn secondary">Sign Up</button>
          <button className="btn icon-btn">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </header>

      {/* HEADER BANNER */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <h1>CONTACT US</h1>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-container">
        <div className="contact-grid">

          {/* Left - Info Cards */}
          <div className="info-grid">
            <div className="info-card">
              <span className="material-symbols-outlined info-icon">location_on</span>
              <h3>VISIT US</h3>
              <p>123 Tech Lane, Silicon Valley, CA 94043</p>
            </div>

            <div className="info-card">
              <span className="material-symbols-outlined info-icon">call</span>
              <h3>CALL US</h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="info-card">
              <span className="material-symbols-outlined info-icon">email</span>
              <h3>EMAIL US</h3>
              <p>support@eshop.com</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="form-section">
            <h2>Get in Touch</h2>

            <form className="contact-form">
              <div className="form-row">
                <label>
                  <span>Name</span>
                  <input type="text" placeholder="Enter your name" />
                </label>

                <label>
                  <span>Email</span>
                  <input type="email" placeholder="Enter your email" />
                </label>
              </div>

              <label>
                <span>Subject</span>
                <input type="text" placeholder="How can we help?" />
              </label>

              <label>
                <span>Message</span>
                <textarea placeholder="Your message..."></textarea>
              </label>

              <button className="btn primary full">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
