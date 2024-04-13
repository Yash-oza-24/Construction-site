import { HiHome , HiUser , HiViewColumns , HiRectangleGroup ,HiEnvelope } from "react-icons/hi2";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { BsMapFill , BsNewspaper } from "react-icons/bs";

const navData = [
    {name : 'Home' , icon: <HiHome/>},
    {name : 'About' , icon: <HiUser/>},
    {name : 'Services' , icon: <HiRectangleGroup/>},
    {name : 'Work' , icon: <HiViewColumns/>},
    {name : 'Photos' , icon: <BiSolidPhotoAlbum/>},
    {name : 'Plans' , icon: <GrPlan/>},
    {name : 'Neighbourhood' , icon: <BsMapFill/>},
    {name : 'News' , icon: <BsNewspaper/>},
    {name : 'Contact' , icon: <HiEnvelope/>}
]
const Navbar = () => {
  return (
   <nav className=" bg-slate-900 flex-col justify-center gap-11 fixed left-[0%] mt-auto z-50 top-0 h-full md:w-16 xl:h-screen">
    <div className="flex flex-col h-full w-full items-center gap-y-9 py-8 backdrop-blur-sm text-3xl">
{navData.map((item,index) =>{
    return (

        <a 
        className="hover:bg-blue-400 relative w-full h-full px-2 border-white flex items-center group hover:text-accent transition-all duration-300 md:px-4 cursor-pointer  "
        key ={index}>
            <div className="absolute pr-14 translate-x-[-60%] hover:translate-x-0 opacity-0 hover:opacity-100 hidden top-0 border-red-900 hover:duration-1000 ease-in-out h-full md:group-hover:flex group hover:transition-all md:left-[3.9rem] lg:left-[4rem]">
                <div className="bg-blue-400 relative flex group-hover:transition-all group-hover:duration-1000 h-full text-primary items-center px-[21.5px]">
                <div className="text-[20px] text-white leading-none capitalize" >
                {item.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2">
                     
                </div>
                </div>
            </div>
            <div className="text-teal-400  hover:text-white">
                 {item.icon}
            </div>
        </a>
    )
})}
    </div>
   </nav>
  )
}

export default Navbar
