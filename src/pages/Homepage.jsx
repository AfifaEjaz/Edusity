import React from "react";
import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Program from "../components/Program.jsx";
import Aboutus from "../components/Aboutus.jsx";
import Footer from "../components/Footer.jsx";
import Campus from "../components/Campus.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";

const Homepage = () => {
  return (
    <>
      <Navbar />

      <Banner />
      <div className="flex flex-col justify-center items-center w-full" style={{backgroundColor : "#f7f5f7"}}>
        <Program />
        <Aboutus />
        <Campus />
        <Testimonials />
        <Contact/>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
