import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-3">
          Explore our latest mobile collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-56 object-contain p-6"
            />

            <div className="p-5">

              <h3 className="font-bold text-lg min-h-[56px]">
                {product.title}
              </h3>

              <p className="text-blue-600 font-bold text-xl mt-2">
                ₹ {(product.price * 85).toLocaleString("en-IN")}
              </p>

              <p className="text-yellow-500 mt-2">
                ⭐ {product.rating}
              </p>

              <Link to={`/product/${product.id}`}>
                <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;