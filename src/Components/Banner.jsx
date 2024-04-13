
const Banner = () => {
  return (
    <main className="h-screen flex flex-col bg-hero-pattern bg-cover justify-center items-center w-full">
      <div className="text-center mb-11 h-[14rem] w-[15rem] bg-slate-900 flex flex-col justify-center items-center overflow-visible xl:w-[28rem] xl:h-[30rem]">
        <p className="text-[1.5rem] italic text-cyan-500 xl:text-[2rem]">Find The Best</p>
        <p className="text-white font-bold mb-6 w-[22rem] text-[1.5rem] xl:text-[3rem] xl:w-[46rem]">Modern Apartment in a New Residential Complex</p>
        <button className=" bg-blue-400 hover:bg-blue-500 text-[.9rem] px-9 py-3 uppercase text-white">Learn More</button>
      </div>
    </main>
  )
}

export default Banner
