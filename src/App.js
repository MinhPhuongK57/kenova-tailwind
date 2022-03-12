import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Quote from "./components/Quote/Quote";
import NumberCreditCard from "./components/NumberCreditCard/NumberCreditCard";
function App() {
  //Responsive
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [mobileSize, setMobileSize] = useState({});
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resizes", handleSize);
  }, []);
  useEffect(() => {
    if (windowSize.width < 500) {
      setMobileSize(true);
    } else {
      setMobileSize(false);
    }
  }, [windowSize]);
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden align-center font-poppins text-white px-4 py-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 md:px-20 dark:text-black text-white dark:from-white dark:to-pink-500">
      <NavBar mobileSize={mobileSize} />
      <Quote />
      <NumberCreditCard />
    </div>
  );
}

export default App;
