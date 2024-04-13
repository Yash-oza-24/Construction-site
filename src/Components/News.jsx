const articles = [
  {
    id:1,
    img:"/public/h1.avif",
    date:'12 Apr 2024',
    title:"10 Tips For Productive Apartment",
    description:"A very intresting, yet a bit terrifyin information about real estimation."
  },
  {
    id:2,
    img:"/public/h1.avif",
    date:'12 Apr 2024',
    title:"10 Tips For Productive Apartment",
    description:"A very intresting, yet a bit terrifyin information about real estimation."
  },
  {
    id:3,
    img:"/public/h1.avif",
    date:'12 Apr 2024',
    title:"10 Tips For Productive Apartment",
    description:"A very intresting, yet a bit terrifyin information about real estimation."
  }
]

const News = () => {
  return (
    <article 
    className="min-h-screen ml-8 md:ml-16 bg-blue-50 flex flex-col justify-center items-center">
    <p className=" text-[3rem] font-bold mb-20">News & Articles</p>
    <div className="flex flex-row overflow-x-auto gap-6 md:gap-4 md:flex-row md:max-w-[60rem] xl:ml-0 xl:max-w-[100rem] px-4" >
    {articles.map((item)=>{  
      return (
        <div className="flex flex-col p-5 md:w-[14rem] md2:w-[16rem] lg:w-[22rem] xl:w-[24rem]" key={item.id}>
        <img 
        className="w-full transition-transform transform-gpu hover:scale-105"
        src={item.img}/>
        <div className="flex bg-white px-6 py-4 flex-col">
          <p className="text-[.9rem] text-grey-600"><span className="font-bold text-black mr-2">{item.date}</span></p>
          <p className="text-[1.4rem] md:text-[1.6rem] font-semibold mb-6">{item.title}</p>
          <p className="text-[1.1rem] text-gray-600 mb-8">{item.description}</p>
          <button
          className="hover:text-teal-600 self-start"
          >Read More</button>
        </div>
        </div>
      )
    })}
    </div>
    </article>

  )
}

export default News
