import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Passes from "./pages/Passes";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> 
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute w-full h-full flex justify-center items-center"
      >
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative h-screen flex text-white">
        <Background />
        
        <div className="z-2">
          <Navbar />
          <Footer />
        </div>

        <div className="absolute w-full h-full z-1">
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
