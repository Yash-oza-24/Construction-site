/* eslint-disable react-hooks/exhaustive-deps */
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { useRef , useState ,useLayoutEffect } from "react";
// const center = {
//   lat: 22.19,
//   long: 113.54,
// };

const Footer = () => {
  // const [containersize , setContainerSize] = useState({width:0})
  // const containerRef = useRef(null)
  // useLayoutEffect(()=>{
  //     const observer = new ResizeObserver ((entries)=>{
  //         if(entries.length > 0){
  //             const {width } = entries[0].contentRect
  //             setContainerSize({width})
  //         }
  //     })
  //     if(containerRef.current){
  //         observer.observe(containerRef.current)
  //     }
  //     return()=>{
  //         if(containerRef.current){
  //             observer.unobserve(containerRef.current)
  //         }
  //     }
  // })
  //   const { isLoaded } = useJsApiLoader({
  //     id: import.meta.env.VITE_SOME_KEY,
  //     googleMapsApiKey: import.meta.env.VITE_SOME_KEY,
  //   });

  return (
    <footer className="w-full pb-11 bg-[#06050f]">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="max-auto w-full lg:w-[60%] xl:w-[100%]">
          <iframe className="pl-20"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.2478879034747!2d72.85395217432519!3d21.26165308044663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be049c0c2b4042d%3A0xfc8afa4d33ac9404!2sSai%20luxuria!5e0!3m2!1sen!2sin!4v1712936903743!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="flex bg-slate-950 flex-col w-full p-20 lg:h-[525px] lg:px-4 xl:px-11 ">
          <p className="text-teal-500 italic text-[1.2rem]">Contact Us</p>
          <p className="text-[2.5rem] font-semibold text-white mb-11">
            Have Any Questions?
          </p>
          <div className="grid grid-cols-2 mb-20 gap-4">
            <input
              type="text"
              className="border-b border-gray-500 bg-transparent text-white focus:outline-none hover:border-white hover:placeholder:text-white"
              placeholder="Name"
            />
            <input
              type="text"
              className="border-b border-gray-500 bg-transparent text-white focus:outline-none hover:border-white hover:placeholder:text-white"
              placeholder="Surname"
            />
            <input
              type="text"
              className="border-b border-gray-500 bg-transparent text-white focus:outline-none hover:border-white hover:placeholder:text-white"
              placeholder="Mobile Number"
            />
            <input
              type="email"
              className="border-b border-gray-500 bg-transparent text-white focus:outline-none hover:border-white hover:placeholder:text-white"
              placeholder="Email"
            />
          </div>
          <button className=" capitalize text-white font-semibold tracking-widest bg-teal-400 hover:bg-teal-500 w-[185px] h-[62px]">
            Get In Touch
          </button>
        </form>
      </div>
      <div className="flex flex-row xl:px-[20rem]">
        <div className="flex flex-col md:flex-row border-b gap-8 pb-[8rem] pl-14 mt-20 border-slate-500 md:px-20 xl:justify-between">
          <div className="flex flex-col gap-3 mr-10">
            <p className="text-[2rem] mb-6 text-white">Contacts</p>
            <p className="text-gray-400 text-[.9rem] max-w-[35rem]">
              Contact us for a consultation. Our Experts are happy to answer all
              your questions.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[1.5rem] mb-4 font-semibold uppercase">
              Build Today Company
            </p>
            <p className="text-gray-400 text-[.9rem]">China</p>
            <p className=" text-gray-400 text-[.9rem]">Macau</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-[1.5rem]  font-semibold uppercase">
              Get in touch
            </p>
            <p className="text-white text-[1.1rem] w-[6.5rem] border-b border-white pb-2">
              BuildToday@gmail.com
            </p>
            <p className="text-white text-[1.1rem]">Macau</p>
          </div>
        </div>
      </div>
      <p className="xl:float-right text-center text-gray-400 xl:mr-[21rem]">
        2024 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
