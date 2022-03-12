import Cards from "../../assets/desktop/isocard.svg";
const Quote = () => {
  return (
    <section className="text-44 my-14 relative font-extrabold md:my-28 md:text-52 md:grid md:grid-cols-3 md:items-center">
      <div className="text-center md:col-span-1 md:col-start-2">
        <div className="flex flex-col text-44">
          Credit Card
          <span>See More</span>
        </div>
        <button
          type="button"
          className="text-22 text-white rounded-[7px] px-12 mt-[70px] py-[10px] font-bold bg-cyan-500 shadow-lg shadow-cyan-500/50 transition-all duration-500 ease-linear hover:bg-sky-700"
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
