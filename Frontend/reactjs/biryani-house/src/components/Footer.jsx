import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>🍛 Biryani House</h3>
          <p>
            Serving authentic and delicious biryani made with fresh ingredients
            and traditional spices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@biryanihouse.com</p>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 11:00 AM - 11:00 PM</p>
          <p>Sat - Sun: 10:00 AM - 12:00 AM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Biryani House. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;