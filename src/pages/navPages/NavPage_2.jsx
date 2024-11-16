import { useEffect, useState } from 'react'
import backImg from '../../assets/images/backImg.jpg'
import { useParams } from 'react-router-dom'
import { GoArrowUp } from "react-icons/go";
import { routes_2 } from '../../assets/routes/routes'

const NavPage_2 = () => {
  const {id} = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    // const foundData = routes.find(route => route.id === +id)
    const foundData = routes_2.find(route => route.id === parseInt(id))
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
              <p className='mb-6'>Private Network solution enables establishing point to point or point to multipoint connections via satellite. There could be connection between uncentralized point ( mesh structure) as well. Every single point can communicate with the other points directly in mesh structure.</p>
              <p className='mb-6'>Satellite connection which has been established by the customer requirements, can work either TDMA or SCPC mode. SCPC is preferred for the star topology and for the network which has few remotes, while TDMA is preferred for the mesh topology and for the network which is formed by  many remote locations. The satellite connection speed can be in the range of  64Kbps – 30 Mbits.</p>
              <p className='mb-6'>Many kind of applications such as VoIP and Video conference can be run by the VSAT system.</p>
              <p className='mb-6'>High quality, real time video or voice transfer can be provided over satellite between two or multiple points. Thus the people on the different locations still can make meetings and share their presentations and ideas as they are in the same places (Video Conference).</p>
            </div>
            <div className='flex justify-center'>
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

export default NavPage_2
