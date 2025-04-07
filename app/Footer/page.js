// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-brand">
            <h3>Your Company</h3>
            <p>Innovative solutions for your business needs</p>
            <p>© {new Date().getFullYear()} All rights reserved</p>
            <p className="email-link">
              <FaEnvelope className="email-icon" /> 
              <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="social-icon facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="social-icon twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="social-icon instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-icon linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Designed and developed with ❤️ by Your Company</p>
        </div>
      </div>
    </footer>
  );
}