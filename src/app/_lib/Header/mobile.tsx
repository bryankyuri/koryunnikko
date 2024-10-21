import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitch from "../Components/ThemeSwitch";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
// import { FaInstagram } from "react-icons/fa";
// import { PiLinktreeLogoBold } from "react-icons/pi";

const varFadeInOutFullMobile = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 1, transition: { duration: 0.2 } },
};

export const HeaderMobile = () => {
  // type menuItem = {
  //   label: string;
  //   url: string;
  // };

  const [showModalAbout, setShowModalAbout] = useState<boolean>(false);
  // const menuItems = [
  //   {
  //     label: "About",
  //     url: "/",
  //   },
  // ];

  return (
    <div className="w-full py-2 shadow-md shadow-[rgba(0,0,0,0.2)] px-6">
      <div className="max-w-[1024px] flex justify-center items-center text-[black] mx-auto">
        {/* <button
          className="dark:text-white text-[18px]"
          onClick={() => setShowMenu(true)}
        >
          <GiHamburgerMenu />
        </button> */}
        <button onClick={() => setShowModalAbout(true)}>
          <Image src="/logo-koryu.png" alt="logo" width={57} height={57} priority />
        </button>

        {/* <ThemeSwitch /> */}
      </div>
      <AnimatePresence>
        {showModalAbout && (
          <motion.div
            variants={varFadeInOutFullMobile}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full p-8 h-screen fixed top-0 left-0 bg-[#00000030]  flex justify-center items-center"
          >
            <div className="w-full max-w-[500px] shadow-lg px-6 py-8 bg-[#ffffff]  rounded-xl text-left">
              <div className="flex w-full items-center justify-between  mb-6">
                <Image
                  src="/logo.jpg"
                  alt="logo"
                  width={94}
                  height={57}
                  priority
                />
                <button
                  onClick={() => {
                    setShowModalAbout(false);
                  }}
                  className="text-[32px]"
                >
                  <IoCloseOutline />
                </button>
              </div>

              <div className="mt-8 mb-8 leading-6">
                Koryu Nikko Official Store for Hair & Beauty Accessories.
                Menyediakan perlengkapan salon dan kecantikan yang profesional,
                bermutu dan harga terjangkau.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
