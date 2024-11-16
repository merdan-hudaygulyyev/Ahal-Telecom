import { useState, useEffect } from 'react'
import { countries } from '../../components/countries/countries';
import airImg from '../../assets/images/airplane.png'
import { GoArrowUp } from "react-icons/go";
import { Footer } from '../../components/Footer/Footer';

import img_1 from '../../assets/images/anten-img.png'
import img_2 from '../../assets/images/anten-img_2.png'
import img_3 from '../../assets/images/anten_3.png'
import img_4 from '../../assets/images/anten_4.png'
import img_5 from '../../assets/images/anten_5.png'
import img_6 from '../../assets/images/anten_6.png'
import img_7 from '../../assets/images/anten_7.png'
import img_8 from '../../assets/images/anten_8.png'

import teleImg from '../../assets/images/tele_img.png'
import teleImg_2 from '../../assets/images/tele_img_2.png'
import teleImg_3 from '../../assets/images/tele_img_3.png'

import { TbAntennaBars5 } from "react-icons/tb";
import { TbAntenna } from "react-icons/tb";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
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
    <div className="mt-[60px] min-h-screen w-full overflow-hidden dark:bg-[#1A3636]">
      <h2 className="text-2xl text-center font-semibold pt-10 dark:text-white">{t("about")}</h2>
        <div className="flex flex-col justify-center items-center h-full w-full space-y-4 mobile:flex-row p-10 mt-6">
            <div className="flex flex-col border rounded-xl bg-green-100">
                <img src={img_1} className='w-[400px] object-cover hover:scale-105 transition-all duration-300'/>
            </div>  
            <div className='flex flex-col border ml-14 rounded-xl min-h-full p-5'>
              <p class="mb-10 max-w-2xl font-Ovo text-center dark:text-white">{t("about-head")}</p>
              <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl'>
                <li class="border-[0.5px] border-gray-400 rounded-xl p-6
                      cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                      hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-400
                      dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                        <img src={img_2} className='object-cover pb-3' />
                        <p className='dark:text-white'>{t("about-card-1")}</p>
                </li>
                <li class="border-[0.5px] border-gray-400 rounded-xl p-6
                      cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                      hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-400
                      dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                        <img src={img_3} className='object-cover pb-3' />
                        <p className='dark:text-white'>{t("about-card-2")}</p>
                </li>
                <li class="border-[0.5px] border-gray-400 rounded-xl p-6
                      cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                      hover:shadow-lg hover:bg-green-100 dark:hover:bg-green-400
                      dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                        <img src={img_4} className='object-cover pb-3' />
                        <p className='dark:text-white'>{t("about-card-3")}</p>
                </li>
              </ul>
            </div>
        </div>

        <div className='mt-10'>
            <h2 className="text-2xl text-center font-semibold pt-6 dark:text-white">{t("solutions")}</h2>
            <div className='border-1 border-gray-600 mx-20'></div>
            <p className='text-sm mt-20 text-center dark:text-white font-serif'>{t("solutions-head")}</p>
            <div className="flex flex-col min-h-screen gap-20 mt-8 items-center justify-center md:flex-row">
          <div className="group h-[400px] w-[300px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300  [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
              <div className="absolute inset-0">
                <img
                  src={img_5}
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-extrabold text-lime-500 mb-4">
                    Tooway-24
                  </h1>
                  <p className="text-lg text-lime-500 mb-4">
                    Ýagdaýy: Durnukly
                  </p>
                  <p className="text-base text-lime-500">N</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-[400px] w-[300px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  src={img_6}
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-extrabold text-lime-500 mb-4">
                    Avanti-29XF
                  </h1>
                  <p className="text-lg text-lime-500 mb-4">
                    Ýagdaýy: Durnukly
                  </p>
                  <p className="text-base text-lime-500">A</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-[400px] w-[300px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  src={img_7}
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-extrabold text-lime-500 mb-4">
                    Thor-7
                  </h1>
                  <p className="text-lg text-lime-500 mb-4">
                    Ýagdaýy: Durnukly
                  </p>
                  <p className="text-base text-lime-500">A</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-[400px] w-[300px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  src={img_8}
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-extrabold text-lime-500 mb-4">
                    IDirect
                  </h1>
                  <p className="text-lg text-lime-500 mb-4">
                    Ýagdaýy: Durnukly
                  </p>
                  <p className="text-base text-lime-500">A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5  mobile:-mt-16 flex justify-center items-center gap-10 text-4xl'>
            <button className='border p-3 rounded-2xl hover:bg-lime-500 transition-all duration-150 dark:text-white'>
              <a href="/">
                <TbAntennaBars5 />
              </a>
            </button>
            <button className='border p-3 rounded-2xl hover:bg-lime-500 transition-all duration-150 dark:text-white'>
              <a href="/">
                <TbAntenna />
              </a>
            </button>
            <button className='border p-3 rounded-2xl hover:bg-lime-500 transition-all duration-150 dark:text-white'>
              <a href="/">
                <MdOutlineSettingsInputAntenna/>
              </a>
            </button>
            <button className='border p-3 rounded-2xl hover:bg-lime-500 transition-all duration-150 dark:text-white'>
              <a href="/">
                <PiTelevisionSimpleBold/>
              </a>
            </button>
        </div>
        <div className='flex flex-col space-y-8 gap-10 mt-20 min-h-full w-full'>
            <div className='flex bg-[#88C273] rounded-xl mx-5 shadow-xl p-2'>
                <img src={teleImg} className='w-[30%] h-[30%] object-cover hover:scale-90 duration-300 transition-all'/>
                <div className='pl-5 p-10 dark:text-white'>
                    <h2 className='text-2xl font-Outfit font-bold mb-16'>{t("solutions-card-1-head")}</h2>
                    <p className='break-all font-serif mb-16'>{t("solutions-card-1-text-1")}</p>
                    <p className='break-all font-serif '>{t("solutions-card-1-text-2")}</p>
                </div>
            </div>  
            <div className='flex bg-[#88C273] rounded-xl mx-5 shadow-xl p-2'>
                <img src={teleImg_2} className='w-[30%] h-[30%] object-cover hover:scale-90 duration-300 transition-all'/>
                <div className='pl-5 p-10 dark:text-white'>
                    <h2 className='text-2xl font-Outfit font-bold mb-16'>{t("solutions-card-2-head")}</h2>
                    <p className='break-all font-serif mb-16'>{t("solutions-card-2-text-1")}</p>
                    <ul className='list-disc'>
                      <li className='border-b border-gray-500 dark:border-white mb-2'>{t("solutions-card-2-list-1")}</li>
                      <li className='border-b border-gray-500 dark:border-white mb-2'>{t("solutions-card-2-list-2")}</li>
                      <li className='border-b border-gray-500 dark:border-white mb-2'>{t("solutions-card-2-list-3")}</li>
                      <li className='border-b border-gray-500 dark:border-white mb-2'>{t("solutions-card-2-list-4")}</li>
                      <li className='border-b border-gray-500 dark:border-white mb-2'>{t("solutions-card-2-list-5")}</li>
                    </ul>
                </div>
            </div>  
            <div className='flex bg-[#88C273] rounded-xl mx-5 shadow-xl p-2'>
                <img src={teleImg_3} className='w-[30%] h-[30%] object-cover hover:scale-90  duration-300 transition-all'/>
                <div className='pl-5 p-10 dark:text-white '>
                    <h2 className='text-2xl font-Outfit font-bold mb-16'>{t("solutions-card-3-head")}</h2>
                    <p className='break-all font-serif mb-16'>{t("solutions-card-3-text-1")}</p>
                    <p className='break-all font-serif '>{t("solutions-card-3-text-2")}</p>
                </div>
            </div>  
           
        </div>
      </div>

      <div className='mt-20 min-h-full w-full flex flex-col justify-center items-center dark:text-white gap-1'>
          <h2 className='text-4xl font-Outfit font-bold mb-10'>{t("services")}</h2>
          <div className='border w-[100px] border-gray-600 mb-10'></div>
          <p className='break-all font-serif'>{t("services-head")}</p>
            {
                countries.map((country) => (
                  <div key={country.id} className='h-full w-full flex items-center mt-10 gap-2 shadow-xl p-12 bg-[#88C273] rounded-2xl'>
                      <img src={airImg} className='w-16 h-16' />
                      <div className='flex flex-col justify-center gap-6 items-center pl-10'>
                          <h2 className='text-white dark:text-black text-2xl font-Outfit font-bold'>{t(`header.${country.key}`)}</h2>
                          <p className='break-all font-serif text-white dark:text-black'>{t(`text.${country.key}`)}</p>
                          <button className='text-white font-semibold dark:text-black border px-10 py-4 rounded-2xl transition-all hover:bg-[#31511E]/20'>
                           <a href='/'>{t(`header.${country.key}`)}</a>
                          </button>
                      </div>
                  </div>
                ))
            }
      </div>

      <div className='mt-20 min-h-full w-full'>
        <section class="bg-white dark:bg-[#88C273]">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{t("contact")}</h2>
              <form action="#" class="space-y-8">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("email")}</label>
                      <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your email" required />
                  </div>
                  <div>
                      <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("subject")}</label>
                      <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </div>
                  <div class="sm:col-span-2">
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("message")}</label>
                      <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" class="py-3 px-5 text-sm font-medium bg-lime-500 text-center text-black dark:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{t('message-btn')}</button>
              </form>
          </div>
      </section>

        <div className='mt-16'>
          <Footer />
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

export default Home
