import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              MobiCare
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Your trusted destination for premium smartphones,
              accessories, and doorstep mobile repair services.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>

              <Link to="/products" className="hover:text-blue-400">
                Products
              </Link>

              <Link to="/book-service" className="hover:text-blue-400">
                Services
              </Link>

              <Link to="/track-repair" className="hover:text-blue-400">
                Track Repair
              </Link>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>

              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>

              <p>Privacy Policy</p>

              <p>Terms & Conditions</p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>📞 +91 98765 43210</p>

              <p>📧 support@mobicare.com</p>

              <p>📍 Madurai, Tamil Nadu</p>

              <p>🕒 Mon - Sat (9 AM - 8 PM)</p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 <span className="text-blue-400 font-semibold">MobiCare</span>.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;