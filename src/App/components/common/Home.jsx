import Products from "../reUsesble/Products";
import { Contact } from "./Contact";
import Footer from "./Footer";
import Hero from "./HeroLand";
import NavBar from "./NavBar";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Products />
      <Reviews />
      <Contact />
     <Footer/>

    </>
  );
};
export default Home;
