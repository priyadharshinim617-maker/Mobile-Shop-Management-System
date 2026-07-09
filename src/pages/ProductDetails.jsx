import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)

      .then((res) => res.json())

      .then((data) => {

        setProduct(data);
        setLoading(false);

      })

      .catch((err) => {

        console.log(err);
        setLoading(false);

      });


  }, [id]);
  const handleBuyNow = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    alert("Please login to continue");

    navigate("/login", {
      state: {
        product,
        from: "/payment",
      },
    });

    return;
  }

  navigate("/payment", {
    state: {
      product,
    },
  });
};


  if (loading) {

    return (
      <>
        <Navbar />

        <h1 className="text-center text-3xl mt-20">
          Loading Product...
        </h1>

        <Footer />
      </>
    );

  }



  if (!product || !product.title) {

    return (
      <>
        <Navbar />

        <h1 className="text-center text-3xl mt-20">
          Product Not Found
        </h1>

        <Footer />
      </>
    );

  }



  return (

    <>
      <Navbar />


      <section className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-2 gap-10">


        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-96 object-contain"
        />


        <div>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>


          <p className="text-blue-600 text-2xl font-bold mt-5">
            ₹ {(product.price * 85).toLocaleString("en-IN")}
          </p>


          <p className="mt-5 text-gray-600">
            {product.description}
          </p>


          <p className="mt-5">
            ⭐ {product.rating}
          </p>


         <button
          onClick={handleBuyNow}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          Buy Now
        </button>

        </div>


      </section>


      <Footer />

    </>
  );

}


export default ProductDetails;