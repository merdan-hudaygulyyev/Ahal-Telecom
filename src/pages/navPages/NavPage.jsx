import { useEffect, useState } from 'react'
import backImg from '../../assets/images/backImg.jpg'
import { useParams } from 'react-router-dom'
import { routes } from '../../assets/routes/routes'
import { GoArrowUp } from "react-icons/go";

const NavPage = () => {
  const {id} = useParams()
  const [data, setData] = useState(null)
  useEffect(() => {
    // const foundData = routes.find(route => route.id === +id)
    const foundData = routes.find(route => route.id === parseInt(id))
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
        <div className='flex flex-col gap-20'>
            <div className='w-full h-[100px] flex items-center justify-center font-Outfit dark:text-white font-semibold '>
              {data?.head}
            </div>
            <div className='p-5 dark:text-white -mt-10'>
              <p className='mb-6'>{data?.text_1}</p>
              <p className='mb-6'>{data?.text_2}</p>
              <ul className='list-disc mb-10 p-5'>
                <li>Economical and fast internet connection</li>
                <li>Simple installation, plug and play modem</li>
                <li>According to capacity requirement variable contention ratio/price choices</li>
                <li>Telephony connection ability</li>
                <li>Coverage all over Turkey</li>
              </ul>
              <p className='mb-6'>{data?.text_3}</p>
              <p className='mb-6'>KA band Tx / Rx Antenna : 77cm Ka band antenna</p>
              <p className='mb-6'>Ka band TRIA : Compact BUC and LNB unit with the cooperative self pointing ability</p>
              <p className='mb-6'>Modem : 10/100Mbps <span>{data?.head}</span> modem  with ethernet interface</p>
            </div>
            <div className='flex justify-center '>
              <img src={data?.imgSrc} className='w-[400px] h-[400px] mb-6 border border-black dark:border-white rounded-2xl hover:bg-green-100 dark:hover:bg-green-400 duration-200'/>
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

export default NavPage
