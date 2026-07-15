import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Cart() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10 px-5">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-blue-600 mb-8">
            🛒 Shopping Cart
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <h2 className="text-2xl font-semibold">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add products to your cart to continue shopping.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cart;