"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { AppContext } from "./_lib/Context/appContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SliderStyle from "../app/_lib/style/slider.module.scss";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Countdown from "react-countdown";
import { FaArrowTrendDown } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { HiShieldCheck } from "react-icons/hi";
import { RiShoppingCartFill } from "react-icons/ri";
import { dataTestimoni } from "./_lib/model/arrayTestimoni";
import { AiTwotoneLike } from "react-icons/ai";
import Link from "next/link";
import { HeaderMobile } from "./_lib/Header/mobile";

export default function Home() {
  const { dateVisit } = useContext(AppContext);
  const [isShowStickyPromo, setIsShowStickyPromo] = useState(false);

  useEffect(() => {
    const listenToScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      let tempIsShrink = isShowStickyPromo;
      const shrinkPoint = 300;
      console.log(shrinkPoint);
      if (winScroll > shrinkPoint) {
        if (!tempIsShrink) {
          tempIsShrink = true;
        }
      } else if (winScroll <= shrinkPoint) {
        if (tempIsShrink) {
          tempIsShrink = false;
        }
      }
      setIsShowStickyPromo(tempIsShrink);
    };

    document.addEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HeaderMobile />
      <div
        className={`w-full fixed ${
          isShowStickyPromo ? "top-0" : "top-[-150px]"
        } z-10 transition-all duration-200 left 0 flex justify-center bg-white shadow-md`}
      >
        <div className="max-w-[410px] w-full bg-white  mx-4 flex justify-between items-center">
          <div
            className="w-[240px] bg-[#bd1c2e] mx-2 text-center text-white rounded-lg px-2 py-1 mypulse"
          >
            Promo Terbatas !
          </div>
          <div className="flex flex-col w-full bg-[#bd1c2e] p-4 py-2 ">
            <Countdown
              date={new Date(dateVisit)}
              renderer={({ days, hours, minutes, seconds }) => {
                return (
                  <div className="flex w-full justify-between text-center ">
                    <div className="max-w-[22%] py-[2px] border-2 border-white w-full bg-white text-red-600">
                      {days}
                    </div>
                    <div className="max-w-[22%] py-[2px] border-2 border-white w-full bg-white text-red-600">
                      {hours}
                    </div>
                    <div className="max-w-[22%] py-[2px] border-2 border-white w-full bg-white text-red-600">
                      {minutes}
                    </div>
                    <div className="max-w-[22%] py-[2px] border-2 border-white w-full bg-white text-red-600">
                      {seconds}
                    </div>
                  </div>
                );
              }}
            />
            <div className="flex w-full justify-between px-2 mt-2 text-white text-[12px] leading-none">
              <div className="max-w-[22%] text-center w-full">Hari</div>
              <div className="max-w-[22%] text-center w-full">Jam</div>
              <div className="max-w-[22%] text-center w-full">Menit</div>
              <div className="max-w-[22%] text-center w-full">Detik</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-slate-100 ">
        <div className="max-w-[410px] shadow-md w-full pb-[150px] bg-white">
          <div className="w-full bg-[#bd1c2e] p-6 text-white text-center ">
            <div className="text-2xl font-medium futura">Promo Terbatas !</div>

            <div className="flex w-full justify-between px-2 mt-8 text-2xl font-bold nunito">
              <Countdown
                date={new Date(dateVisit)}
                renderer={({ days, hours, minutes, seconds }) => {
                  return (
                    <>
                      <div className="max-w-[22%] py-2 border-2 border-white w-full bg-white text-red-600">
                        {days}
                      </div>
                      <div className="max-w-[22%] py-2 border-2 border-white w-full bg-white text-red-600">
                        {hours}
                      </div>
                      <div className="max-w-[22%] py-2 border-2 border-white w-full bg-white text-red-600">
                        {minutes}
                      </div>
                      <div className="max-w-[22%] py-2 border-2 border-white w-full bg-white text-red-600">
                        {seconds}
                      </div>
                    </>
                  );
                }}
              />
            </div>
            <div className="flex w-full justify-between px-2 mb-4 mt-2">
              <div className="max-w-[22%] text-center w-full">Hari</div>
              <div className="max-w-[22%] text-center w-full">Jam</div>
              <div className="max-w-[22%] text-center w-full">Menit</div>
              <div className="max-w-[22%] text-center w-full">Detik</div>
            </div>
            <div className="font-light">
              Belanja melalui Koryu Nikko Official Store untuk ekstra diskon dan
              gratis ongkir.&nbsp;
              <Link
                href="/link-to-shop"
                className="underline "
                target="_blank"
                rel="noopener noreferrer"
              >
                Belanja sekarang
              </Link>
            </div>
          </div>
          <div className=" font-semibold w-full text-center text-2xl my-8 nunito px-4">
            Salah perawatan rambut bisa sefatal apa sih efeknya?
          </div>
          <div
            className="bg-[#242424] py-4 flex text-md pt-6 "
            style={{
              backgroundImage: "url(/bg1.png)",
              backgroundBlendMode: "screen",
            }}
          >
            <div className="flex p-4 justify-center items-center flex-col nunito ">
              <div className="w-full">
                <Image
                  src="/dampak1.jpg"
                  alt="ketombe"
                  width={177}
                  height={118}
                  priority
                  className="shadow-md border-2 border-white rounded-xl"
                />
              </div>
              <div
                className="font-semibold mt-2 text-center text-white"
                // style={{ fontFamily: "times-new-roman" }}
              >
                KETOMBE
              </div>
            </div>
            <div className="flex p-4 justify-center items-center flex-col">
              <div className="w-full">
                <Image
                  src="/dampak2.jpg"
                  alt="kebotakan"
                  width={177}
                  height={118}
                  priority
                  className="shadow-md border-2 border-white rounded-xl"
                />
              </div>
              <div
                className="font-semibold mt-2 text-center text-white"
                // style={{ fontFamily: "times-new-roman" }}
              >
                KEBOTAKAN
              </div>
            </div>
            <div className="flex p-4 justify-center items-center flex-col">
              <div className="w-full">
                <Image
                  src="/dampak3.jpg"
                  alt="infeksi"
                  width={177}
                  height={118}
                  priority
                  className="shadow-md border-2 border-white rounded-xl"
                />
              </div>
              <div
                className="font-semibold mt-2 text-center text-white"
                // style={{ fontFamily: "times-new-roman" }}
              >
                INFEKSI
              </div>
            </div>
          </div>
          <div className="w-full px-4 my-8">
            <div className="nunito">
              Masalah rambut dan kulit kepala ini disebabkan oleh beberapa
              faktor:
            </div>
            <ol className=" list-decimal pl-4 mt-4 nunito">
              <li className="mb-2">Rambut dibiarkan lembab dalam waktu lama</li>
              <li className="mb-2">Tidak kering dengan sempurna</li>
              <li className="mb-2">
                Kulit kepala tidak bisa bernafas karena tertutup topi/hijab/helm
              </li>
            </ol>
          </div>

          <div className="w-full ">
            <div className="w-full flex justify-center ml-3">
              <Image
                src="/title2.png"
                alt="koryunikko"
                width={380}
                height={115}
                priority
              />
            </div>
            <Swiper
              navigation={true}
              pagination={{
                type: "fraction",
              }}
              modules={[Navigation, Pagination]}
              className={`mySwiper ${SliderStyle.slider} shadow-d`}
            >
              <SwiperSlide>
                <div className="w-full flex justify-center py-4">
                  <Image
                    src="/product1.jpg"
                    alt="koryunikko"
                    width={380}
                    height={380}
                    priority
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center py-4">
                  <Image
                    src="/product2.jpg"
                    alt="koryunikko"
                    width={380}
                    height={380}
                    priority
                    className=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full flex justify-center py-4">
                  <Image
                    src="/product3.jpg"
                    alt="koryunikko"
                    width={380}
                    height={380}
                    priority
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center py-4">
                  <iframe
                    width="380"
                    height="380"
                    src="https://www.youtube.com/embed/OBJegjgodNk?si=xgt0TuD5mmxOjVyj"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="w-full my-6">
            <div className="w-full display flex items-center px-4">
              <div
                className="font-bold px-4 py-1 text-white rounded-md mr-2 text-[12px] flex items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #C11F29 0%, #88353A 100%)",
                }}
              >
                <FaArrowTrendDown className="text-xl mr-2" /> Price Drop
              </div>
              <div className="flex items-end">
                <div className="font-bold text-[24px] text-red-800 mr-e line-none">
                  <span className="text-[18px]">Rp&nbsp;</span>380.000
                </div>
                <div className=" line-through text-[14px] text-gray-600 font-medium mb-[6px] ml-1">
                  <span className="text-[14px]">Rp&nbsp;</span>995.000
                </div>
              </div>
            </div>
            <div className="w-full display flex items-center px-4 pt-2 text-[16px] font-medium">
              Catokan Koryu Nikko KN 129
            </div>
            <div className="w-full flex justify-between items-center px-4">
              <div className="w-full text-yellow-500 flex  items-center">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <div className="ml-2 text-[12px] font-medium text-red-800 nunito">
                  4.9/5
                </div>
              </div>
              <div className="text-[14px] w-[200px] text-right font-medium">
                500++ Terjual
              </div>
            </div>
            <div className="w-full display flex flex-col px-4 pt-2 text-[14px] font-medium">
              <div className="border-t border-b flex items-end py-2 leading-none">
                <TbTruckDelivery className="mr-2 text-orange-700" />
                Pengiriman Instant
              </div>
              <div className="border-t border-b flex items-end py-2 leading-none">
                <HiShieldCheck className="mr-2 text-green-700" />
                Garansi 6 Bulan
              </div>
              <div className="border-t border-b flex items-end py-2 leading-none">
                <TbTruckReturn className="mr-2 text-yellow-600" />
                Bisa Retur{" "}
                <span className="text-[10px] self-end ml-1 text-gray-600">
                  *S&K berlaku.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full px-4 text-[15px] font-medium mb-1">
            Deskripsi Produk
          </div>
          <div className="w-full px-4 text-[13px] text-justify mt-4">
            Catokan Koryu Nikko KN 129 dibuat dengan teknologi canggih untuk
            digunakan pada seluruh jenis rambut. Desainnya yang ergonomis
            membuat catokan ini tidak membuat lengan pengguna sakit atau pegal
            dalam pemakaian intens. Catokan ini cocok untuk penggunaan
            profesional pada salon maupun penggunaan pribadi di rumah!
          </div>
          <div className="w-full px-4 text-[15px] font-medium mb-1 mt-8">
            Spesifikasi Produk
          </div>
          <div className="w-full px-4 text-[13px] text-justify flex justify-between">
            <ul className="list-disc pl-4 mt-4">
              <li>Warna hitam dan putih</li>
              <li>Lebar plat 2” (±5 cm)</li>
              <li>Listrik 55 W (220 - 240 V)</li>
              <li>Sistem pengaturan suhu</li>
            </ul>
            <div className="flex">
              <Image
                src="/productspec.jpg"
                alt="product"
                width={180}
                height={100}
                priority
              />
            </div>
          </div>

          <div className="bg-[#bd1c2e] text-white mt-8">
            <div className="w-full py-4 px-6 ">
              <div className="font-bold text-2xl mb-6">
                Keunggulan Catokan KN 129{" "}
              </div>
              <ol
                className="list-decimal font-medium"
                // style={{ fontFamily: "arial" }}
              >
                <div className="flex my-2">
                  <div>
                    <Image
                      src="/list.png"
                      alt="list"
                      width={25}
                      height={12}
                      priority
                      className="mr-2"
                    />
                  </div>
                  <div className="">
                    <span className="font-semibold">
                      Kualitas internasional :&nbsp;
                    </span>
                    <span className="font-normal text-[13px] nunito">
                      Japan approved
                    </span>
                  </div>
                </div>
                <div className="flex my-2">
                  <div className="min-w-[25px] h-[25px] flex mr-2">
                    <Image
                      src="/list2.png"
                      alt="list"
                      width={25}
                      height={12}
                      priority
                      className=""
                    />
                  </div>
                  <div className="">
                    <span className="font-semibold">
                      Technologi canggih :&nbsp;
                    </span>
                    <span className="font-normal text-[13px] nunito">
                      Lapisan ceramic ion pada plat catokan dan ion negatif
                      untuk melindungi rambut dari panas
                    </span>
                  </div>
                </div>
                <div className="flex my-2">
                  <div className="min-w-[25px] h-[25px] flex mr-2">
                    <Image
                      src="/list3.png"
                      alt="list"
                      width={25}
                      height={12}
                      priority
                    />
                  </div>
                  <div className="">
                    <span className="font-semibold">Aman :&nbsp;</span>
                    <span className="font-normal text-[13px] nunito">
                      Direkomendasikan pemakaian pada rambut rusak atau sensitif
                    </span>
                  </div>
                </div>
              </ol>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="w-full font-semibold text-center text-lg mt-8">
              Penilaian Produk
            </div>
            <div className="w-full text-center flex justify-center">
              <div className="w-full text-yellow-500 flex  items-center justify-center">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <div className="ml-2 text-[12px] font-medium text-red-800 nunito">
                  4.9/5
                </div>
                <div className="ml-2 text-[12px] text-gray-600  nunito">
                  (300++ Ulasan)
                </div>
              </div>
            </div>
          </div>
          {dataTestimoni().map((item, index) => {
            return (
              <div className="w-full p-4 my-4 shadow-d" key={"testi" + index}>
                <div className="w-full flex justify-between items-start">
                  <div className="flex items-start">
                    <div className="w-[24px] h-[24px] rounded-full shadow-d">
                      <Image
                        src={item.profilePic}
                        alt="pp"
                        width={24}
                        height={24}
                        className="rounded-full shadow-d"
                      />
                    </div>
                    <div className="ml-2">
                      <div className="font-light leading-none mb-1">
                        {item.username}
                      </div>
                      <div className="w-full text-yellow-500 flex  items-center text-[12px]">
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <AiTwotoneLike />
                    <div className="ml-2 text-[12px]">{`Membantu (${item.like})`}</div>
                  </div>
                </div>
                <div className="w-full flex justify-between items-start text-[13px] mt-4 text-justify">
                  {item.desc}
                </div>
                <div className="w-full flex justify-start items-start mt-4 mb-2 gap-[8px]">
                  {item.image.map((itemImage, index) => {
                    return (
                      <div
                        className="w-[32%] h-[115px] flex shadow-d"
                        key={"image" + index}
                      >
                        <Image
                          src={itemImage}
                          alt="pesan"
                          width={125}
                          height={125}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center fixed bottom-0 left-0 bg-white shadow-inner z-10 pt-4">
        <div className="w-full relative flex justify-center mb-4">
          <div className="w-full animate-pulse bg-orange-500 absolute z-0"></div>
          <Link
            href="/link-to-shop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 flex rounded-xl bg-orange-500 z-1 max-w-[250px] mb-4 items-center"
          >
            <RiShoppingCartFill className="text-[32px] text-white" />
            <div className="font-semibold text-lg text-white ml-2 leading-none nunito">
              BELANJA SEKARANG
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
