import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import Support from "./Support";
import Footer from "./Footer";

const Home = ({ ...props }) => {
  return (
    <>
      <Banner />
      <Products {...props} />
      <Support />
      <Footer />
    </>
  );
};

export default Home;
