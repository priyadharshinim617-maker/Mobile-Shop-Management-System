import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ServicePayment() {
  const navigate = useNavigate();

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

    if (paymentMethod === "UPI" && upiId.trim() === "") {
      alert("Please enter your UPI ID");
      return;
    }

    if (
      paymentMethod === "Card" &&
      (
        card.number.trim() === "" ||
        card.name.trim() === "" ||
        card.expiry.trim() === "" ||
        card.cvv.trim() === ""
      )
    ) {
      alert("Please fill all card details");
      return;
    }

    alert("Service Payment Successful!");

    navigate("/booking-success", {
      replace: true,
    });
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center text-blue-600">
            Service Payment
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Complete your service booking payment
          </p>

          {/* Service Amount */}

          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-center">

            <h2 className="text-lg text-gray-600">
              Mobile Repair Service
            </h2>

            <p className="text-gray-500 mt-2">
              Standard Inspection & Repair Charge
            </p>

            <h1 className="text-5xl font-bold text-blue-600 mt-4">
              ₹499
            </h1>

          </div>

          {/* Payment Methods */}

          <div className="space-y-4">

            {/* UPI */}

            <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="ml-3 font-medium">
                UPI Payment
              </span>
            </label>

            {paymentMethod === "UPI" && (
              <input
                type="text"
                placeholder="Enter UPI ID (example@okaxis)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full border rounded-xl p-3"
              />
            )}

            {/* Card */}

            <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                name="payment"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="ml-3 font-medium">
                Credit / Debit Card
              </span>
            </label>

            {paymentMethod === "Card" && (

              <div className="grid gap-4">

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

            {/* Cash */}

            <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:border-blue-500">
              <input
                type="radio"
                name="payment"
                value="Cash"
                checked={paymentMethod === "Cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="ml-3 font-medium">
                Cash After Service
              </span>
            </label>

          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
          >
            Pay Now
          </button>

        </div>
      </section>
    </>
  );
}

export default ServicePayment;