import heroImage from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-[90vh] flex items-center">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* Left Content */}
        <div className="text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Your One-Stop
            <br />
            Destination
          </h1>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mt-2 leading-tight">
            for Mobiles &
            <br />
            Doorstep Repairs
          </h2>

          <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            Buy the latest smartphones, accessories, or book a
            doorstep mobile repair service — all in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

            <Link to="/products">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
                Shop Now
              </button>
            </Link>

            <Link to="/book-service">
              <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition font-semibold">
                Book Repair
              </button>
            </Link>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <div className="bg-blue-50 rounded-3xl p-6 md:p-8 shadow-2xl">

            <img
              src={heroImage}
              alt="Hero"
              className="w-52 sm:w-72 md:w-80 lg:w-[420px] hover:scale-105 transition duration-300"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;