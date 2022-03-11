import Cards from "../../assets/desktop/isocard.svg";
const Quote = () => {
  return (
    <section className="text-45 my-14 font-extrabold">
      <div className="text-center">
        <p className="flex flex-col">
          Credit Card <span className="text-white">See More</span>
        </p>
        <button
          type="button"
          className="text-22 rounded-[7px] px-12 mt-[70px] py-[10px] font-bold bg-cyan-500 shadow-lg shadow-cyan-500/50 transition-all duration-500 ease-linear"
        >
          Begin
        </button>
      </div>
      <div className="mt-[60px] flex justify-center">
        <img src={Cards} alt="Credit Card" />
      </div>
    </section>
  );
};

export default Quote;
