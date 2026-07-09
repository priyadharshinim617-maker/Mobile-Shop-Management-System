import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
              Contact MobiCare
            </h1>

            <p className="text-gray-600 mt-4">
              We'd love to hear from you. Feel free to contact us anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-2xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="font-bold text-blue-600">
                    📞 Phone
                  </h3>
                  <p className="text-gray-600 mt-2">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-blue-600">
                    📧 Email
                  </h3>
                  <p className="text-gray-600 mt-2">
                    support@mobicare.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-blue-600">
                    📍 Address
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Madurai, Tamil Nadu, India
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-blue-600">
                    🕒 Working Hours
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Monday - Saturday
                  </p>
                  <p className="text-gray-600">
                    9:00 AM - 8:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-2xl font-bold mb-8">
                Send a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>
      <Footer/>
    </>
  );
}

export default Contact;