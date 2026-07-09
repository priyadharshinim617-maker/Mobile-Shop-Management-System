import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
function TrackRepair() {
  const [bookingId, setBookingId] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleTrack = () => {
    if (bookingId.trim() === "") {
      alert("Please enter Booking ID");
      return;
    }

    setShowStatus(true);
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center text-blue-600">
            Track Your Repair
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Track your mobile repair status in real time.
          </p>

          {/* Booking ID */}
          <div className="mt-10">
            <label className="font-semibold block mb-2">
              Booking ID
            </label>

            <input
              type="text"
              placeholder="Ex: MC2026001"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              className="w-full border rounded-xl p-3"
            />

            <button
              onClick={handleTrack}
              className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Track Status
            </button>
          </div>

          {/* Timeline */}
          {showStatus && (
            <div className="mt-10">

              <div className="bg-blue-50 rounded-xl p-5 mb-8">
                <h2 className="text-xl font-bold">
                  Booking ID : {bookingId}
                </h2>

                <p className="text-gray-600 mt-2">
                  Current Status :
                  <span className="font-bold text-blue-600">
                    {" "}Pickup Scheduled
                  </span>
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Our pickup executive will contact you shortly.
                </p>
              </div>

              <div className="space-y-5">

                <div className="flex items-center">
                  <span className="text-2xl">🟢</span>
                  <p className="ml-4 font-medium">
                    Pickup Scheduled
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="text-2xl">⚪</span>
                  <p className="ml-4">
                    Device Picked Up
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="text-2xl">⚪</span>
                  <p className="ml-4">
                    Under Repair
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="text-2xl">⚪</span>
                  <p className="ml-4">
                    Quality Check
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="text-2xl">⚪</span>
                  <p className="ml-4">
                    Ready for Delivery
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="text-2xl">⚪</span>
                  <p className="ml-4">
                    Delivered
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>
      <Footer/>
    </>
  );
}

export default TrackRepair;