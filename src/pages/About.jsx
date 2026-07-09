import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
function About() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6">

          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl font-bold">
              About MobiCare
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
              Your trusted destination for premium smartphones,
              accessories, and professional doorstep mobile repair services.
            </p>

          </div>

        </div>

        {/* Who We Are */}
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-3xl font-bold mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600 leading-8">
                MobiCare is a modern mobile sales and repair platform
                dedicated to providing customers with quality products,
                genuine spare parts, and professional repair services.
              </p>

              <p className="text-gray-600 mt-4 leading-8">
                Our mission is to make mobile shopping and repair
                simple, affordable, and accessible through our
                doorstep pickup and delivery service.
              </p>

            </div>

            <div className="bg-blue-100 rounded-3xl p-12 text-center">

              <div className="text-7xl">
                📱
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Trusted Mobile Partner
              </h3>

            </div>

          </div>

        </div>

        {/* Mission & Vision */}

        <div className="bg-white py-16">

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

            <div className="shadow-lg rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-blue-600">
                🎯 Our Mission
              </h3>

              <p className="mt-4 text-gray-600">
                Deliver premium mobile products and reliable repair
                services with customer satisfaction as our top priority.
              </p>

            </div>

            <div className="shadow-lg rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-blue-600">
                🌍 Our Vision
              </h3>

              <p className="mt-4 text-gray-600">
                Become India's most trusted mobile sales and repair
                platform through innovation and quality service.
              </p>

            </div>

          </div>

        </div>

        {/* Why Choose Us */}

        <div className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose MobiCare?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="text-5xl">🛠</div>
              <h3 className="font-bold mt-5">Expert Technicians</h3>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="text-5xl">🚚</div>
              <h3 className="font-bold mt-5">Doorstep Pickup</h3>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="text-5xl">🔒</div>
              <h3 className="font-bold mt-5">Secure Service</h3>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <div className="text-5xl">⭐</div>
              <h3 className="font-bold mt-5">Top Rated Support</h3>
            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="bg-blue-600 text-white py-16">

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold">15K+</h2>
              <p>Happy Customers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">5000+</h2>
              <p>Repairs Completed</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">250+</h2>
              <p>Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">4.9★</h2>
              <p>Customer Rating</p>
            </div>

          </div>

        </div>

      </section>
      <Footer/>
    </>
  );
}

export default About;