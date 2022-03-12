import { FaUser } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { BsFillCreditCardFill } from "react-icons/bs";
import isCheckMobileIcon from "../../assets/mobile/checkpoint.svg";
const NumberCreditCard = () => {
  const cust = useSpring({ custs: 5701, from: { custs: 0 } });
  const creadit = useSpring({ creadits: 5701, from: { creadits: 0 } });
  return (
    <section className="md:flex md:flex-rows">
      <div
        className="ml-[75px] mr-[60px] flex flex-col align-center 
      justify-center text-bold bg-cyan-500 shadow-lg shadow-cyan-500/80 
      to-transparent rounded-[7px] md:w-[20%] md:ml-[130px]"
      >
        <div className="my-12 mx-5 gap-8 flex items-start justify-center">
          <FaUser size={"32px"} className="mt-[15px]" />
          <div className="text-26  font-bold">
            <animated.div>
              {cust.custs.to((val) => Math.floor(val))}
            </animated.div>
            <div className="text-22 font-semibold mb-[20px]">Providers </div>
          </div>
        </div>
        <div className="my-12 mx-5 gap-8 flex items-start justify-center">
          <BsFillCreditCardFill size={"32px"} className="mt-[15px]" />
          <div className="text-26  font-bold">
            <animated.div>
              {creadit.creadits.to((val) => Math.floor(val))}
            </animated.div>
            <div className="text-22 font-semibold mb-[20px]">Providers </div>
          </div>
        </div>
      </div>
      <div className="text-16 flex flex-col justify-center font-semibold mt-[90px] w-[100%] md:mt-0 md:w-[40%] md:text-20 md:ml-[20%]">
        <div className="content">
          <img src={isCheckMobileIcon} alt="" />
          <div>Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        <div className="content">
          <img src={isCheckMobileIcon} alt="" />
          <div>Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="content">
          <img src={isCheckMobileIcon} alt="" />
          <div>Lorem ipsum dolor sit.</div>
        </div>
      </div>
    </section>
  );
};

export default NumberCreditCard;
