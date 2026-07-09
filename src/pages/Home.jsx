import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChoose from "../components/home/WhyChoose";
import Footer from "../components/layout/Footer";

function Home() {
  return (
   <>
  <Navbar />
  <Hero />
  <Services />
  <Categories />
  <FeaturedProducts />
  <WhyChoose />
  <Footer />
</>
  );
}

export default Home;