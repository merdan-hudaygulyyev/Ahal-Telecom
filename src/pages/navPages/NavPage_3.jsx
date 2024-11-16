import { useEffect, useState } from 'react'
import backImg from '../../assets/images/backImg.jpg'
import { useParams } from 'react-router-dom'
import { routes_3 } from '../../assets/routes/routes'
import { GoArrowUp } from "react-icons/go";

const NavPage_3 = () => {
  const {id} = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    // const foundData = routes.find(route => route.id === +id)
    const foundData = routes_3.find(route => route.id === parseInt(id))
    if(foundData) setData(foundData)
  }, [id])

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-[50px] min-h-screen w-full bg-[#C2FFC7] dark:bg-[#1A3636] p-10">
       <img src={backImg} className='rounded-xl'/>
        <div className='flex flex-col gap-20 p-10'>
            <div className='w-full h-[100px] flex items-center justify-center font-Outfit dark:text-white font-semibold '>
              {data?.head}
            </div>
            <div className='p-5 dark:text-white -mt-10'>
              <p className='mb-6'>{data?.text_1}</p>
              <p className='mb-6'>{data?.text_2}</p>
              <p className='mb-6'>{data?.text_3}</p>
            </div>
            <div className='flex justify-center'>
              <img src={data?.imgSrc} className='w-[900px] h-[500px] mb-6 border p-5 border-black dark:border-white rounded-2xl hover:bg-green-100 dark:hover:bg-green-400 duration-200'/>
            </div>
        </div>
        {isVisible && (
            <button onClick={handleScrollToTop} style={buttonStyle}>
              <GoArrowUp />
            </button>
            )}
    </div>
  )
}

const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "#84cc16",
    color: "#FFFFFF",
    border: "none",
  };

export default NavPage_3