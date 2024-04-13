const HouseArticle = () => {
  return (
    // h-screen bg-white pl-[4rem] pr-[3rem] py-11  border md:pl-[7.5rem] xl:py-[4rem] xl:max-w-[110rem]
    <div className=" bg-white pl-[4rem] pr-[3rem] py-11 md:pl-[7.5rem] xl:py-[4rem] xl:max-w-[110rem] border ">
      <div className="flex flex-col md:flex-row mb-20 md:gap-11 md2:gap-14 xl:max-w-[80rem]">
        <div className="flex flex-col mt-[4rem] md:pl-[15rem] md2:pl-[11rem] md2:gap-5 lg:gap-7 lg:pl-[7rem] xl:pl-2">
          <p className=" italic text-[.9rem] text-blue-600 xl:text-[1.2rem] ">
            Modern Architecture
          </p>
          <p className="font-bold mb-2 text-sky-950 text-[1.5rem] md2:text-[1.8rem] md:tracking-widset xl:text-[3rem] ">
            Introducing a new Residence
          </p>
          <div className="flex">
            <div className="w-[5em] hidden mr-6 mt-4 h-0  xl:flex"></div>
            <p className="mb-3 md:leading-7 md:w-[16rem] md:text-[1.1rem] md2:text-[1.3rem] md2:w-[20rem] md:pl-11 xl:leading-8 xl:pl-0 xl:w-[25rem]">
              Each apartment has been individually designed to maximize space
              and light. Smart Home Technology installed as standard in each
              apartment putting you in total control of your home at the touch
              of a button from wherever you might be.
            </p>
          </div>
          <button className=" text-blue-700 hover:text-blue-500 mb-8 self-start md:text-[1.1rem] md:mt-2 md:pl-11 xl:ml-[6.4rem] xl:pl-0">
            Read More
          </button>
        </div>
        <div className="md:pt-20 md:pr-16 md2:pr-0 lg:pr-[7rem] xl:pr-0">
          <img
            className="w-full md:w-[70%] lg:w-full"
            src={"/public/bld.png"}
            alt="Not Found"
          />
        </div>
      </div>
      <div className=" bg-slate-900 grid grid-cols-2 px-2 gap-4 py-4 mx-auto justify-evenly md:flex md:w-[60%] md2:w-[70%] lg:w-[82%] xl:w-[100%]">
        <div className=" border-zinc-600 w-[17rem] py-4 pl-2 xl:border-r">
          <p className="text-[2.7rem] font-bold text-cyan-500">146</p>
          <p className="text-[.9rem] text-white italic">Luxe Apartment</p>
        </div>
        <div className=" border-1 border-zinc-600 w-[17rem] py-4 pl-3 xl:border-r xl:border-l-0">
          <p className="text-[2.7rem] font-bold text-cyan-500">355</p>
          <p className="text-[.9rem] text-white italic">BedRooms</p>
        </div>
        <div className=" border-zinc-600 w-[17rem] py-4 pl-2 md:border-l xl:border-l-0 xl:border-r">
          <p className="text-[2.7rem] font-bold text-cyan-500">2000</p>
          <p className="text-[.9rem] text-white italic">Sequare Meters</p>
        </div>
        <div className=" border-zinc-600 w-[17rem] py-4 pl-3 border-l xl:border-r xl:border-l-0">
          <p className="text-[2.7rem] font-bold text-cyan-500">740</p>
          <p className="text-[.9rem] text-white italic">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default HouseArticle;
