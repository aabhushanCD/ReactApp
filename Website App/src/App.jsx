import React from "react";
import "./App.css";
// import { FaSearch, FaCartArrowDown, FaUser } from "react-icons/fa";
import "./assets/Css/fontawesome.min.css";
import "./assets/Css/fontawesome.min.css";
import "./assets/Css/slick-theme.css";
import "./assets/Css/slick-theme.min.css";
import "./assets/img/ajax-loader.gif";
import "./assets/Css/templatemo.css";
import "./assets/Css/templatemo.min.css";
import Header from "./Coponents/Header/nav";
import Footer from "./Coponents/Footer/Footer";
// import About from "./Coponents/about";
import HomeSlider from "./Coponents/Home-slider";
import CategoriesOfTheMonth from "./Coponents/categoriesOfTheMonth";
import FeaturedProduct from "./Coponents/FeaturedProduct";
function App() {
  return (
    <>
      <Header></Header>
      <HomeSlider></HomeSlider>
      <CategoriesOfTheMonth></CategoriesOfTheMonth>
      <FeaturedProduct></FeaturedProduct>
      <Footer></Footer>
    </>
  );
}

export default App;
