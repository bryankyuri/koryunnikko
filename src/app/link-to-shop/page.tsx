"use client";

import Image from "next/image";
import React from "react";
import { dataShop } from "../_lib/model/shop";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function linkToShop() {
  return (
    <>
      <div className="w-full flex justify-center bg-white items-center h-[100vh]">
        <div
          className="max-w-[410px] shadow-md w-full pb-[150px] bg-slate-100 "
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div className=" w-full mt-8 flex flex-col justify-center items-center">
            <Image
              src="/logo-koryu.png"
              alt="logo"
              width={94}
              height={57}
              priority
            />
            <div className="text-xl font-medium mt-2 text-gray-600">
              Koryu Nikko Official Store
            </div>
            <div className="px-8 w-full">
              {dataShop().map((item, index) => {
                return (
                  <Link
                    href={`${item.url}`}
                    className="flex w-full my-8 p-4 bg-white shadow-d justify-between items-center"
                    key={"link" + index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={50}
                        height={50}
                        priority
                      />
                      <div className="text-xl ml-4 font-semibold">{item.label}</div>
                    </div>
                    <FaExternalLinkAlt />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
