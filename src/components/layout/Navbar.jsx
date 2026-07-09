import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userName = localStorage.getItem("userName");
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : "";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setMenuOpen(false);
    alert("Logged Out Successfully!");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">

        {/* Logo */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-blue-600">
            MobiCare
          </h1>
          <p className="text-[10px] md:text-xs text-gray-500">
            Mobile Shop & Services
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">

          <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600 font-medium">
            Products
          </Link>

          <Link to="/book-service" className="hover:text-blue-600 font-medium">
            Services
          </Link>

          <Link to="/track-repair" className="hover:text-blue-600 font-medium">
            📍 Track Repair
          </Link>

          <Link to="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center gap-3">

              <div
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg"
                title={userName}
              >
                {firstLetter}
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>

            </div>
          ) : (
            <Link to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                Login
              </button>
            </Link>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Products
          </Link>

          <Link
            to="/book-service"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Services
          </Link>

          <Link
            to="/track-repair"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            📍 Track Repair
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Contact
          </Link>

          <div className="border-t mt-2"></div>

          {isLoggedIn ? (
            <div className="px-6 py-4">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {firstLetter}
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    {userName}
                  </p>
                  <p className="text-sm text-gray-500">
                    Logged In
                  </p>
                </div>

              </div>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
              >
                Logout
              </button>

            </div>
          ) : (
            <div className="px-6 py-4">

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                  Login
                </button>
              </Link>

            </div>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;