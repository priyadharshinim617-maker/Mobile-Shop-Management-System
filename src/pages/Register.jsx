import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      user.name === "" ||
      user.phone === "" ||
      user.email === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
        <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8">

          <h1 className="text-3xl font-bold text-center text-blue-600">
            Create Account 🚀
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Register to continue
          </p>

          <form onSubmit={handleRegister} className="mt-8 space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

            <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 pr-12"
            />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>

            <div className="relative">
            <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 pr-12"
            />

            <button
                type="button"
                onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-4 text-gray-500"
            >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
            >
              Register
            </button>

          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>
      </section>
    </>
  );
}

export default Register;