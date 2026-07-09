import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        className="w-full h-48 sm:h-52 object-contain p-4"
      />

      <div className="p-5">

        <h3 className="text-lg font-bold line-clamp-2 min-h-[56px]">
          {product.title}
        </h3>

        <p className="text-blue-600 text-xl font-bold mt-2">
          ₹ {(product.price * 85).toLocaleString("en-IN")}
        </p>

        <p className="text-yellow-500 mt-2">
          ⭐ {product.rating}
        </p>

        <p className="text-gray-500 text-sm mt-2">
          Brand: {product.brand}
        </p>

        <Link to={`/product/${product.id}`}>
          <button className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;