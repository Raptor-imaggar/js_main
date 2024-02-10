// App.js
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Loading from "./Loading"; // Import the Loading component
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    // Show loading when the page is refreshed
    setLoading(true);

    // Initialize AOS on page load
    aos_init();

    // Hide loading after 4 seconds
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default App;
