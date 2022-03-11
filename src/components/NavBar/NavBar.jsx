import { useState } from "react";
import { GiSunRadiations } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
const NavBar = () => {
  const [openMenuResponsive, setOpenMenuResponsive] = useState(false);
  const handleMenuResponsive = () => {
    setOpenMenuResponsive(!openMenuResponsive);
  };
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-24 font-bold mr-3">Kenova</div>
        <GiSunRadiations
          size={"48px"}
          color="#FEFEFE"
          className="cursor-pointer"
        />
      </div>
      <ul className="ml-auto text-20 font-semibold">
        {openMenuResponsive ? (
          <MdOutlineClose
            size={"32px"}
            className="cursor-pointer z-30"
            onClick={handleMenuResponsive}
          />
        ) : (
          <HiOutlineMenu
            size={"32px"}
            className="cursor-pointer z-30"
            onClick={handleMenuResponsive}
          />
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
