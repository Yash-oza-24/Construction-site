import { FaParking, FaSwimmingPool, FaChurch } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { BiSolidWasher } from "react-icons/bi";
import { IoFastFoodSharp } from "react-icons/io5";
const Appartment = () => {
  return (
    <div className=" min-h-screen relative bg-hero-appartment py-11 px-20 bg-[#696161] bg-blend-multiply w-full bg-no-repeat lg:px-[20rem] lg:py-[10rem]">
      <div className="flex flex-col justify-center items-center  ">
        <p className=" italic font-semibold text-cyan-600 md:text-[1.2rem] lg:text-[1.4rem] lg:self-start">Luxury Appartments</p>
        <p className="text-white text-center mb-6 max-w-[20rem] text-[1.2rem] font-bold w-[50rem] md:max-w-[30rem] lg:max-w-[38rem] xl:max-w-[47rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.8rem] lg:text-left lg:self-start ">Stunning Luxury Rental Appartments , Designed For Life</p>
        <div className="grid grid-cols-2 gap-2 justify-self-center gap-x-2 md:grid-cols-3 lg:place-self-start md:gap-x-38 lg:ml-0 md:w-[35rem] lg:grid-col-3 lg:place-content-start">
          <div className=" bg-slate-950 hover:bg-teal-600 group mr-4 cursor-pointer px-6 py-8 w-[180px] h-[180]px">
            <FaParking className="text-white mb-3 text-[3rem]"/>
            <p className=" uppercase text-[1.2rem] hover:text-white text-teal-400">Parking Space</p>
          </div>
          <div className=" bg-slate-950 hover:bg-teal-600 group mr-4 cursor-pointer px-6 py-8 w-[180px] h-[180]px">
            <CiWifiOn className="text-white mb-3 text-[3rem]"/>
            <p className=" uppercase text-[1.2rem] hover:text-white text-teal-400">Free Wifi</p>
          </div>
          <div className=" bg-slate-950 hover:bg-teal-600 group mr-4 cursor-pointer px-6 py-8 w-[180px] h-[180]px">
            <BiSolidWasher className="text-white mb-3 text-[3rem]"/>
            <p className=" uppercase text-[1.2rem] hover:text-white text-teal-400">Washer Dryer</p>
          </div>
          <div className=" bg-slate-950 hover:bg-teal-600 group mr-4 cursor-pointer px-6 py-8 w-[180px] h-[180]px">
            <FaSwimmingPool className="text-white mb-3 text-[3rem]"/>
            <p className=" uppercase text-[1.2rem] hover:text-white text-teal-400">Swimming Pool</p>
          </div>
          <div className=" bg-slate-950 hover:bg-teal-600 group mr-4 cursor-pointer px-6 py-8 w-[180px] h-[180]px">
            <IoFastFoodSharp className="text-white mb-3 text-[3rem]"/>
            <p className=" uppercase text-[1.2rem] hover:text-white text-teal-400">Outdoor Restaurants Area</p>
          </div>
          <div className=" bg-slate-950 hover:bg-teal-600 group mr-4 cursor-pointer px-6 py-8 w-[180px] h-[180]px">
            <FaChurch className="text-white mb-3 text-[3rem]"/>
            <p className=" uppercase text-[1.2rem] hover:text-white text-teal-400">Amazing Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appartment;
