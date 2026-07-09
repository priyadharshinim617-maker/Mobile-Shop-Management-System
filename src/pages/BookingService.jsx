import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function BookingService() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    problemType: "",
    problem: "",
    pickupDate: "",
    preferredTime: "",
    address: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  navigate("/payment");
};
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
              <h1 className="text-4xl font-bold">
                📱 Book a Repair Service
              </h1>

              <p className="mt-2 text-blue-100">
                Fast, Reliable & Doorstep Mobile Repair
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-8 space-y-8"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
<div>
  <label className="block mb-2 font-medium">Full Name</label>
  <input
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    placeholder="Enter your full name"
    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Phone */}
<div>
  <label className="block mb-2 font-medium">Phone Number</label>
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter phone number"
    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Email */}
<div>
  <label className="block mb-2 font-medium">Email Address</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter email"
    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Brand */}
<div>
  <label className="block mb-2 font-medium">Mobile Brand</label>
  <input
    type="text"
    name="brand"
    value={formData.brand}
    onChange={handleChange}
    placeholder="Apple, Samsung..."
    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Model */}
<div>
  <label className="block mb-2 font-medium">Mobile Model</label>
  <input
    type="text"
    name="model"
    value={formData.model}
    onChange={handleChange}
    placeholder="Ex: iPhone 15 Pro"
    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Problem Type */}
<div>
  <label className="block mb-2 font-medium">Problem Type</label>
  <select
    name="problemType"
    value={formData.problemType}
    onChange={handleChange}
    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Problem Type</option>
    <option>Display Issue</option>
    <option>Battery Issue</option>
    <option>Charging Problem</option>
    <option>Speaker Problem</option>
    <option>Camera Issue</option>
    <option>Water Damage</option>
    <option>Software Issue</option>
    <option>Other</option>
  </select>
</div>

{/* Pickup Date */}
<div>
  <label className="block mb-2 font-medium">Preferred Pickup Date</label>
  <input
    type="date"
    name="pickupDate"
    value={formData.pickupDate}
    onChange={handleChange}
    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Preferred Time */}
<div>
  <label className="block mb-2 font-medium">Preferred Time</label>
  <select
    name="preferredTime"
    value={formData.preferredTime}
    onChange={handleChange}
    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Time</option>
    <option>09:00 AM - 12:00 PM</option>
    <option>12:00 PM - 03:00 PM</option>
    <option>03:00 PM - 06:00 PM</option>
    <option>06:00 PM - 09:00 PM</option>
  </select>
</div>

</div>

{/* Problem Description */}
<div>
  <label className="block mb-2 font-medium">Problem Description</label>
  <textarea
    name="problem"
    value={formData.problem}
    onChange={handleChange}
    rows="4"
    placeholder="Describe your problem..."
    className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* Upload Image */}
<div>
  <label className="block mb-2 font-medium">Upload Mobile Image</label>
  <input
    type="file"
    onChange={handleFileChange}
    className="w-full border border-gray-300 rounded-xl p-3"
  />
</div>

{/* Address */}
<div>
  <label className="block mb-2 font-medium">Pickup Address</label>
  <textarea
    name="address"
    value={formData.address}
    onChange={handleChange}
    rows="3"
    placeholder="Enter pickup address"
    className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

<button
  type="submit"
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
>
  🚀 Request Pickup
</button>

</form>

</div>

</div>

</section>
<Footer/>

</>
);
}

export default BookingService;