import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation} from "react-router-dom";
function ProductPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  if (!product) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          No Product Selected
        </h1>
      </div>
    </>
  );
}

  const [paymentMethod, setPaymentMethod] = useState("");
    const [upiId, setUpiId] = useState("");

    const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
    });

  const handlePayment = () => {
        if (!paymentMethod) {
            alert("Please select a payment method");
            return;
        }

        if (paymentMethod === "UPI" && upiId === "") {
            alert("Please enter your UPI ID");
            return;
        }

        if (
            paymentMethod === "Card" &&
            (
            card.number === "" ||
            card.name === "" ||
            card.expiry === "" ||
            card.cvv === ""
            )
        ) {
            alert("Please fill all card details");
            return;
        }

        alert("Payment Successful!");
       navigate("/order-success");
        };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-12">

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center text-blue-600">
            Payment
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Complete your booking payment
          </p>

          {/* Amount */}

          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-center">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="w-32 h-32 object-contain mx-auto"
          />

          <h2 className="text-xl font-bold mt-3">
            {product?.title}
          </h2>

          <h1 className="text-4xl font-bold text-blue-600 mt-3">
            ₹ {(product?.price * 85).toLocaleString("en-IN")}
          </h1>
        </div>
          {/* Payment Options */}

          <div className="space-y-4">

            <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:border-blue-500">

              <input
                type="radio"
                name="payment"
                value="UPI"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="ml-3 font-medium">
                UPI Payment
              </span>

            </label>
            {paymentMethod === "UPI" && (
            <div className="mt-4">
                <input
                type="text"
                placeholder="Enter UPI ID (example@okaxis)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full border rounded-xl p-3"
                />
            </div>
            )}

            <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:border-blue-500">

              <input
                type="radio"
                name="payment"
                value="Card"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="ml-3 font-medium">
                Credit / Debit Card
              </span>

            </label>
            {paymentMethod === "Card" && (
  <div className="grid gap-4 mt-4">

    <input
      type="text"
      placeholder="Card Number"
      value={card.number}
      onChange={(e) =>
        setCard({ ...card, number: e.target.value })
      }
      className="border rounded-xl p-3"
    />

    <input
      type="text"
      placeholder="Card Holder Name"
      value={card.name}
      onChange={(e) =>
        setCard({ ...card, name: e.target.value })
      }
      className="border rounded-xl p-3"
    />

    <div className="grid grid-cols-2 gap-4">

      <input
        type="text"
        placeholder="MM/YY"
        value={card.expiry}
        onChange={(e) =>
          setCard({ ...card, expiry: e.target.value })
        }
        className="border rounded-xl p-3"
      />

      <input
        type="password"
        placeholder="CVV"
        value={card.cvv}
        onChange={(e) =>
          setCard({ ...card, cvv: e.target.value })
        }
        className="border rounded-xl p-3"
      />

    </div>

  </div>
)}

            <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:border-blue-500">

              <input
                type="radio"
                name="payment"
                value="Cash"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="ml-3 font-medium">
                Cash on Delivery
              </span>

            </label>

          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold"
          >
            Pay Now
          </button>

        </div>

      </section>
    </>
  );
}

export default ProductPayment;