import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
import ViewCardpage from "./components/ViewCardpage/ViewCardpage";
import SitesCardpage from "./pages/SitesCardpage";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route
              path="/Slacesite"
              element={
                <>
                  <NavBar />
                  <SitesCardpage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Details/:index"
              element={
                <>
                  <NavBar />
                  <ViewCardpage />
                  <Footer />
                </>
              }
            />
            
          </Routes>
          
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
