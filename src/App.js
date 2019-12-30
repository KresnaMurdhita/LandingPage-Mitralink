import React, { Component } from "react";
// import Navbar from "./components/Home/Navbar";
import Products from "./components/Home/Products";
import NavbarMitra from "./components/Home/Navbar";
import AboutUs from "./components/Home/AboutUs";
import WhyUS from "./components/Home/WhyUs";
import OurSolutions from "./components/Home/OurSolutions";
import ProductsBanner from "./components/Home/ProductsBanner";
import OurPartners from "./components/Home/OurPartners";
import ContactUs from "./components/Home/ContactUs";
import OurClients from "./components/Home/OurClients";
import Footer from "./components/Home/Footer";

class App extends Component {
  render() {
    return (
      <div className="mitralink">
        <NavbarMitra />
        <ProductsBanner />
        <AboutUs />
        <WhyUS />
        <OurSolutions />
        <br />
        <Products />
        <br />
        <br />
        <OurPartners />
        <br />
        <br />
        <ContactUs />
        <OurClients />
        <br />
        <Footer />
        <br />
      </div>
    );
  }
}
export default App;
