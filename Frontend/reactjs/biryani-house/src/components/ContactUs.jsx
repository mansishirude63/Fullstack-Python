import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-warning fw-bold">Contact Us 📞</h1>
        <p className="text-muted">
          We'd love to hear from you! Get in touch with us.
        </p>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-md-5 mb-4">
          <div className="card shadow border-0 p-4">
            <h3 className="text-warning mb-3">Get In Touch</h3>

            <p><strong>📍 Address:</strong> Pune, Maharashtra, India</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>✉️ Email:</strong> info@biryanihouse.com</p>
            <p><strong>🕒 Opening Hours:</strong></p>
            <p>Mon - Fri: 11:00 AM - 11:00 PM</p>
            <p>Sat - Sun: 10:00 AM - 12:00 AM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card shadow border-0 p-4">
            <h3 className="text-warning mb-3">Send Message</h3>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-warning text-white">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;