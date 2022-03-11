import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import isCheckMobileIcon from "../../assets/mobile/checkpoint.svg";
const NumberCreditCard = () => {
  return (
    <section className="">
      <div
        className="ml-[75px] mr-[60px] flex flex-col align-center 
      justify-center text-bold bg-cyan-500 shadow-lg shadow-cyan-500/80 
      to-transparent rounded-[7px]"
      >
        <div className="my-12 mx-5 gap-8 flex items-start justify-center">
          <FaUser size={"32px"} className="mt-[15px]" />
          <p className="text-26  font-bold">
            5701
            <p className="text-22 font-semibold mb-[20px]">Providers </p>
          </p>
        </div>
        <div className="my-12 mx-5 gap-8 flex items-start justify-center">
          <BsFillCreditCardFill size={"32px"} className="mt-[15px]" />
          <p className="text-26  font-bold">
            5701
            <p className="text-22 font-semibold mb-[20px]">Providers </p>
          </p>
        </div>
      </div>
      <div className="text-16 flex flex-col justify-center font-semibold mt-[90px] w-[100%]">
        <span className="content">
          <img src={isCheckMobileIcon} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </span>
        <span className="content">
          <img src={isCheckMobileIcon} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </span>
        <span className="content">
          <img src={isCheckMobileIcon} alt="" />
          <p>Lorem ipsum dolor sit.</p>
        </span>
      </div>
    </section>
  );
};

export default NumberCreditCard;
