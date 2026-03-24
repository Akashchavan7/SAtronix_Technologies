import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/animations/PageTransition";
import Loader from "./components/common/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      {!isLoading && (
        <div className="relative min-h-screen overflow-hidden bg-base text-white">
          <div className="pointer-events-none fixed inset-0 bg-neon-radial opacity-80" />
          <div className="pointer-events-none fixed inset-0 bg-hero-grid bg-[size:120px_120px] opacity-[0.05]" />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<PageTransition>{route.element}</PageTransition>} />
              ))}
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
