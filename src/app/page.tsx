"use client";

import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="max-w-[410px] shadow-md w-full pt-8 pb-[150px]">
          <div className=" font-bold w-full text-center text-2xl">
            RAMBUT BERMASALAH <br />
            KARENA LEMBAB?
          </div>
          <div className=" text-red-600  font-bold italic w-full text-center text-[16px] my-4">
            WASPADA AKAN DAMPAK RAMBUT LEMBAB
          </div>
          <div className="bg-slate-100 py-4">
            <div className="flex p-4 justify-center items-center ">
              <Image
                src="/dampak1.jpg"
                alt="ketombe"
                width={177}
                height={118}
                priority
                className="shadow-md border-4 border-red-500"
              />
              <div
                className="font-bold ml-4 text-center text-2xl italic"
                style={{ fontFamily: "times-new-roman" }}
              >
                KETOMBE
              </div>
            </div>
            <div className="flex p-4 justify-center items-center my-8">
              <div
                className="font-bold mr-4 text-center text-2xl italic"
                style={{ fontFamily: "times-new-roman" }}
              >
                KEBOTAKAN
              </div>
              <Image
                src="/dampak2.jpg"
                alt="kebotakan"
                width={177}
                height={118}
                priority
                className="shadow-md border-4 border-red-500"
              />
            </div>
            <div className="flex p-4 justify-center items-center">
              <Image
                src="/dampak3.jpg"
                alt="infeksi"
                width={177}
                height={118}
                priority
                className="shadow-md border-4 border-red-500"
              />
              <div
                className="font-bold ml-4 text-center text-2xl italic"
                style={{ fontFamily: "times-new-roman" }}
              >
                INFEKSI
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center py-4">
            <Image
              src="/tips1.webp"
              alt="infeksi"
              width={400}
              height={400}
              priority
              className=""
            />
          </div>

          <div className="font-bold  w-full text-center text-xl mt-4 py-8 bg-orange-500 text-white">
            <div className="text-xl">
              SEGERA ATASI RAMBUT LEMBAB <br /> ANDA DENGAN
            </div>
          </div>

          <div className="w-full bg-slate-100 pb-[30px] pt-8">
            <div className="w-full flex justify-center ml-3">
              <a
                href="https://shopee.co.id/CATOKAN-MURAH-Catok-KN-129-Koryu-Nikko-PROMO-i.40879198.2393068072?sp_atk=07b1d348-031e-41ee-8a6c-1cdd0d9d6319&xptdk=07b1d348-031e-41ee-8a6c-1cdd0d9d6319"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/title.png"
                  alt="koryunikko"
                  width={380}
                  height={115}
                  priority
                />
              </a>
            </div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full flex justify-center py-4">
                  <Image
                    src="/product1.webp"
                    alt="koryunikko"
                    width={380}
                    height={380}
                    priority
                    className="shadow-md border-8 border-red-500"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center py-4">
                  <Image
                    src="/product2.webp"
                    alt="koryunikko"
                    width={380}
                    height={380}
                    priority
                    className="shadow-md border-8 border-red-500"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full flex justify-center py-4">
                  <Image
                    src="/product3.webp"
                    alt="koryunikko"
                    width={380}
                    height={380}
                    priority
                    className="shadow-md border-8 border-red-500"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center py-4">
                  <Image
                    src="/product4.webp"
                    alt="koryunikko"
                    width={380}
                    height={380}
                    priority
                    className="shadow-md border-8 border-red-500"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="px-2 flex justify-start mt-[-80px] z-10 relative ml-2 animate-bounce">
              <Image
                src="/price1.png"
                alt="koryunikko"
                width={180}
                height={125}
                priority
              />
            </div>
            <div className="px-2 flex justify-end mt-[-65px] z-10 relative mr-4">
              <Image
                src="/garansi1.png"
                alt="garansi"
                width={160}
                height={125}
                priority
              />
            </div>

            <div className="w-full flex justify-center mt-[35px] z-10 relative">
              <Image
                src="/pesan.png"
                alt="pesan"
                width={300}
                height={70}
                priority
              />
            </div>
          </div>

          <div className=" clear-none"></div>
          <div className="p-4 flex justify-center">
            <iframe
              width="360"
              height="220"
              src="https://www.youtube.com/embed/OBJegjgodNk?si=xgt0TuD5mmxOjVyj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            />
          </div>
          <div className="bg-orange-500 text-white">
            <div className="w-full py-4 px-8 ">
              <div className="font-bold text-2xl mb-6">Keunggulan Produk </div>
              <ol
                className="list-decimal font-medium"
                style={{ fontFamily: "arial" }}
              >
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">
                    Bahan kualitas internasional
                  </div>
                </div>
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">Ceramic ion Technology</div>
                </div>
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">
                    Ion negatif agar rambut lembut dan berkilau
                  </div>
                </div>
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">Cocok untuk rambut sensitif</div>
                </div>
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">Garansi 6 bulan</div>
                </div>
              </ol>
            </div>

            <div className="w-full py-4 px-8 ">
              <div className="font-bold text-2xl mb-6 mt-6">
                Spesifikasi produk{" "}
              </div>
              <ol
                className="list-decimal font-medium"
                style={{ fontFamily: "arial" }}
              >
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">Warna Hitam dan putih</div>
                </div>
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">Lebar pelat 2” (±5 cm)</div>
                </div>
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">Berat 281 gram</div>
                </div>
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">Listrik 55 W (220-240 V)</div>
                </div>
                <div className="flex my-2">
                  <Image
                    src="/list.png"
                    alt="list"
                    width={25}
                    height={12}
                    priority
                    className="mr-2"
                  />
                  <div className="font-medium">Sistem pengaturan suhu</div>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center fixed bottom-0 left-0 bg-white shadow-inner z-10 pt-4">
        <div className="w-full relative flex justify-center mb-4">
          <div className="w-full animate-pulse bg-orange-500 absolute z-0"></div>
          <a className="px-4 py-3 flex rounded-xl bg-orange-500 z-1 max-w-[250px] mb-4">
            <Image src="/cart.png" alt="cart" width={25} height={10} priority />
            <div className="font-bold text-lg text-white ml-4">
              PESAN SEKARANG
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
