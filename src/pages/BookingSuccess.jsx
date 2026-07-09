import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

function BookingSuccess() {
  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">

          <div className="text-6xl mb-4">✅</div>

          <h1 className="text-3xl font-bold text-green-600">
            Booking Successful!
          </h1>

          <p className="text-gray-600 mt-4">
            Your repair request has been submitted successfully.
          </p>

          <p className="text-gray-500 mt-2">
            Our technician will contact you shortly.
          </p>

          <Link
          to="/track-repair"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Track Repair
        </Link>

        </div>
      </div>
    </>
  );
}

export default BookingSuccess;