// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
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
              <a href="mailto:markoreljin5dva@gmail.com">markoreljin5dva@gmail.com</a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
             
              <li>
              <Link href="/" className="navbar-link">
            Home
          </Link>
                </li>
              <li>
              <Link href="component/heroos" className="navbar-link">
       About
          </Link>
                </li>
              <li>
              <Link href="/component/contact" className="navbar-link">
            Contact
             </Link>
                </li>
           
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/marko.reljin.12?mibextid=wwXIfr&mibextid=wwXIfr" 
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
                href="https://www.instagram.com/markrelic?igsh=ajh6M2VicHIwNG9o" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="social-icon instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/in/mark-relic-8731b62b4/" 
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
          <p>Designed and developed with ❤️ appointmentstudio@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}