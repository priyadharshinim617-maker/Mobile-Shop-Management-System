import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

        <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full text-center">

          <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />

          <h1 className="text-4xl font-bold text-gray-800">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mt-4">
            Thank you for shopping with MobiCare.
          </p>

          <div className="bg-blue-50 rounded-xl p-5 mt-8">

            <h2 className="font-semibold text-lg">
              Order ID
            </h2>

            <p className="text-blue-600 font-bold text-xl mt-2">
              #MC1025
            </p>

            <p className="text-gray-500 mt-3">
              Estimated Delivery
            </p>

            <p className="font-semibold">
              2 - 4 Business Days
            </p>

          </div>

          <div className="grid gap-4 mt-8">

            <Link to="/products">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                Continue Shopping
              </button>
            </Link>

            <Link to="/">
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50">
                Go Home
              </button>
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default OrderSuccess;