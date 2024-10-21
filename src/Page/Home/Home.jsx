import Hero from "../../components/2-Hero/Hero";
import HotCategory from "../../components/3-HotCategory/HotCategory";
import Product from "../../components/Product/Product";
import Banner from "../../components/Banner/Banner";
import SliderMine from "../../components/SliderMine/SliderMine";
import Contact from "../../components/5-Contact/Contact";
import Footer from "../../components/6-footer/Footer";
// import Header from "../../components/1-Header/Header";
const Home = () => {
  return (
    <div>
        {/* <Header /> */}
        <Hero />
        <HotCategory />
        <Product />
        <Banner />
        <SliderMine />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;
