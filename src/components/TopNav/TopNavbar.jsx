import logo from "../../assets/images/ahal-logo.png";
import Ru from "../../assets/images/ru.png";
import En from "../../assets/images/usa.png";
import Tm from "../../assets/images/tkm.png";
import { GrLanguage } from "react-icons/gr";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { routes, routes_3 } from '../../assets/routes/routes'
import { routes_2 } from "../../assets/routes/routes";

const locales = [
  {
    label: "Tm",
    value: "tm",
    icon: Tm,
  },
  {
    label: "RU",
    value: "ru",
    icon: Ru,
  },
  {
    label: "EN",
    value: "en",
    icon: En,
  },
];

const TopNavbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [showContent, setShowContent] = useState(false)
  const [showContent_2, setShowContent_2] = useState(false)
  const [showContent_3, setShowContent_3] = useState(false)
  // Change language function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setShow(false);
  };

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-[#C2FFC7] dark:bg-[#1A3636] fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center  text-2xl font-semibold whitespace-nowrap text-lime-500">
          {t("logo-name")}
          </span>
        </a>
        <div className="flex gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button title="Language change" onClick={() => setShow(!show)}>
            <GrLanguage className="text-2xl hidden mobile:block text-lime-500 hover:text-lime-800 transition-all" />
          </button>
          {show && (
            <div className="border absolute right-20 rounded-xl bg-green-50 top-[50px] h-[100px] w-[90px]">
              <div className="m-1 flex flex-col gap-2 font-Ovo p-0.5">
                {locales.map((locale) => (
                  <li
                    className="list-none cursor-pointer flex gap-4"
                    key={locale.value}
                    onClick={() => changeLanguage(locale.value)}
                  >
                    {locale.label}
                    <span>
                      <img src={locale.icon} className="w-6" />
                    </span>
                  </li>
                ))}
              </div>
            </div>
          )}
          <button
            title="Light/Dark Mode"
            onClick={toggleDarkMode}
            className="text-2xl text-lime-500 max-[320px]:hidden max-[331px]:hidden hover:text-lime-800 transition-all"
          >
            {darkMode ? <IoSunnyOutline className="animate-spin_slow"/> : <FaRegMoon />}
          </button>
          <button onClick={() => {
            setToggle(!toggle)
            setShowContent(false)
            setShowContent_2(false)
            setShowContent_3(false)
          }}>
            <MdMenu className="text-2xl block laptop:hidden text-lime-500 hover:text-lime-800 transition-all" />
          </button>
        </div>
        <div  
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 max-[867px]:hidden mt-4 font-medium max-[768px]:hidden md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li className="relative">
              <a
                onClick={() => {
                  setShowContent(!showContent)
                  setShowContent_2(false)
                  setShowContent_3(false)
                  setToggle(false)
                }}
                className="py-2 px-3 flex items-center gap-3 text-lg text-lime-500 rounded md:p-0 hover:text-lime-700"
              >
                {t("nav-name-1")} 
                <span><IoIosArrowDown className={`${!showContent ? 'rotate-0 duration-200' : 'rotate-180 duration-200'}`}/></span>
              </a>
              {
                showContent && (
                  <div className="flex flex-col gap-3 p-3 rounded-md text-lime-500 font-bold items-center bg-green-100 dark:bg-lime-500 dark:text-white min-h-[200px] min-w-[200px] absolute top-12 -left-24">
                    {
                      routes.map((route) => (
                        <li key={route.id}>
                          <a href={`/nav/${route.id}`}>
                            {route.head}
                          </a>
                        </li>
                      ))
                    }
                  </div>
                )
              }
            </li>
            <li className="relative">
              <a
                onClick={() => {
                  setShowContent_2(!showContent_2)
                  setShowContent(false)
                  setShowContent_3(false)
                  setToggle(false)
                }}
                href="#"
                className="py-2 px-3 flex items-center gap-3 text-lg text-lime-500 rounded md:p-0 hover:text-lime-700"
              >
                {t("nav-name-2")} 
                <span ><IoIosArrowDown className={`${!showContent_2 ? 'rotate-0 duration-200' : 'rotate-180 duration-200'}`}/></span>
              </a>
              {
                showContent_2 && (
                  <div className="flex flex-col gap-3 p-3 rounded-md text-lime-500 font-bold items-center bg-green-100 dark:bg-lime-500 dark:text-white min-h-[100px] min-w-[200px] absolute top-12 -left-24">
                      {
                        routes_2.map((route) => (
                          <li key={route.id}>
                            <a href={`/navs/${route.id}`}>
                              {route.head}
                            </a>
                          </li>
                        ))
                      }
                  </div>
                )
              }
            </li>
            <li className="relative">
              <a
               onClick={() => {
                setShowContent_3(!showContent_3)
                setShowContent_2(false)
                setShowContent(false)
                setToggle(false)
              }}
                href="#"
                className="py-2 px-3 flex items-center gap-3 text-lg text-lime-500 rounded md:p-0 hover:text-lime-700"
              >
                {t("nav-name-3")} 
                <span ><IoIosArrowDown className={`${!showContent_3 ? 'rotate-0 duration-200' : 'rotate-180 duration-200'}`}/></span>
              </a>
                {
                  showContent_3 && (
                    <div className="flex flex-col gap-3 p-3 rounded-md text-lime-500 font-bold items-center bg-green-100 dark:bg-lime-500 dark:text-white min-h-[100px] min-w-[200px] absolute top-12 -left-24">
                        {
                          routes_3.map((route) => (
                            <li key={route.id}>
                              <a href={`/navigate/${route.id}`}>
                                {route.head}
                              </a>
                            </li>
                          ))
                        }
                    </div>
                  )
                }
            </li>
            <li>
              <a
                href="/contact"
                className="py-2 px-3 text-lg text-lime-500 rounded md:p-0 hover:text-lime-700"
              >
                {t("nav-name-4")} 
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {toggle && (
        <div className="min-w-full h-[230px] block laptop:hidden">
          <ul className="flex flex-col items-center p-1 md:p-2 mt-2 font-medium md:border-0 ">
            <li>
              <a
                href={`/nav/:id`}
                className="block mb-4 py-2 px-3 text-lg text-lime-500 rounded md:p-0 hover:text-lime-700"
              >
                {t("nav-name-1")} 
              </a>
            </li>
            <li>
              <a
                href={`/navs/:id`}
                className="block mb-4 py-2 px-3 text-lg text-lime-500 rounded md:p-0 hover:text-lime-700"
              >
                {t("nav-name-2")} 
              </a>
            </li>
            <li>
              <a
                href={`/navs/:id`}
                className="block mb-4 py-2 px-3 text-lg text-lime-500 rounded md:p-0 hover:text-lime-700"
              >
                {t("nav-name-3")} 
              </a>
            </li>
            <li>
              <a
                href={`/navigate/:id`}
                className="block mb-4 py-2 px-3 text-lg text-lime-500 rounded md:p-0 hover:text-lime-700"
              >
               {t("nav-name-4")} 
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
