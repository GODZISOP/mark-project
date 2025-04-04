// components/Footer.js

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Your Company</h3>
              <p>© {new Date().getFullYear()} All rights reserved</p>
            </div>
  
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
  
            <div className="footer-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  