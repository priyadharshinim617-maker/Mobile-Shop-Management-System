import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/products/SearchBar";
import CategoryFilter from "../components/products/CategoryFilter";
import ProductCard from "../components/products/ProductCard";
import Footer from "../components/layout/Footer";


function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");


  useEffect(() => {

    Promise.all([
      fetch("https://dummyjson.com/products/category/smartphones")
        .then(res => res.json()),

      fetch("https://dummyjson.com/products/category/mobile-accessories")
        .then(res => res.json())
    ])

      .then((data) => {

        const mobileProducts = [
          ...data[0].products,
          ...data[1].products
        ];

        setProducts(mobileProducts);
        setLoading(false);

      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });


  }, []);



  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );



  if (loading) {
    return (
      <>
        <Navbar />

        <h1 className="text-center text-3xl mt-20">
          Loading Products...
        </h1>

        <Footer />
      </>
    );
  }



  return (
    <>
      <Navbar />


      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">


        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center md:text-left">
          Mobile & Accessories
        </h1>


        <p className="text-gray-500 mb-8 text-center md:text-left">
          Explore latest smartphones, watches and accessories.
        </p>



        <div className="mb-6">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

        </div>



        <div className="mb-8">
          <CategoryFilter />
        </div>




        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">


          {
            filteredProducts.length > 0 ? (

              filteredProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))

            ) : (

              <h2 className="text-xl font-semibold text-center col-span-full">
                No Products Found
              </h2>

            )
          }


        </div>


      </section>


      <Footer />

    </>
  );
}


export default Products;