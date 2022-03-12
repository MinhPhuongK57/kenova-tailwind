import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode";
const NavBar = (props) => {
  const { mobileSize } = props;
  const [openMenuResponsive, setOpenMenuResponsive] = useState(false);
  const handleMenuResponsive = () => {
    setOpenMenuResponsive(!openMenuResponsive);
  };
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-24 font-bold mr-3">Kenova</div>
        {isDarkMode ? (
          <BsSunFill
            size={"35px"}
            color="#FEE082"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"35px"}
            color="#FEE082"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-18 z-10 font-semibold">
        {openMenuResponsive && mobileSize ? (
          <MdOutlineClose
            size={"32px"}
            className="cursor-pointer z-30"
            onClick={handleMenuResponsive}
          />
        ) : !openMenuResponsive && mobileSize ? (
          <HiOutlineMenu
            size={"32px"}
            className="cursor-pointer z-30"
            onClick={handleMenuResponsive}
          />
        ) : (
          <>
            <li className="hover-button">Features</li>
            <li className="hover-button">Products</li>
            <li className="hover-button mr-20">Contact</li>
            <li className="hover-button">Information</li>
          </>
        )}

        {openMenuResponsive && (
          <div className="absolute text-20 leading-10 z-10 h-auto-100% right-0 bottom-0 left-0 top-20  bg-white p-8 text-center text-blue-400">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Profile</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
