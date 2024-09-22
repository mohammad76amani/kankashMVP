"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LaptopWarranty from "../../components/(ui)/LaptopWarranty/LaptopWarranty";
import HardDriveWarranty from "../../components/(ui)/HardDriveWarranty/HardDriveWarranty";
const Page = () => {
  const [selectedGuarantee, setSelectedGuarantee] = useState("");

  const renderContentGuarantee = () => {
    switch (selectedGuarantee) {
      case "hard":
        return <HardDriveWarranty />;
      case "laptop":
        return <LaptopWarranty />;
      default:
        return null;
    }
  };

  return (
    <div className="grid mx-auto h-auto p-4" dir="rtl">
      <div className="px-4 py-2 rounded-lg my-2 grid">
        <div className="mx-auto width-auto my-2 bg-white rounded-lg">
          <div className="grid grid-cols-2 text-sm sm:text-lg text-center gap-3 justify-center">
            <button
              onClick={() => setSelectedGuarantee("hard")}
              className="text-red-500 border-2 focus:shadow-orange-800 border-orange-400 bg-gray-700 px-4 py-1 rounded-xl font-bold shadow-lg hover:shadow-orange-800"
            >
              گارانتی هارد
            </button>
            <button
              onClick={() => setSelectedGuarantee("laptop")}
              className="text-red-500 border-2 focus:shadow-orange-800 border-orange-400 bg-gray-700 px-4 py-1 rounded-xl font-bold shadow-lg hover:shadow-orange-800"
            >
              گارانتی لپ‌تاپ
            </button>
          </div>
        </div>

        <div className="mx-auto w-full my-2 py-1.5 bg-white rounded-lg">
          <Image
            src="/assets/images/guarantee-hard-laptop.webp"
            width={4000}
            height={4000}
            alt="SSD یا HDD"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <h1 className="font-bold flex justify-center text-white text-xl sm:text-2xl lg:text-3xl shadow-gray-500 hover:shadow-none shadow-lg px-1 py-2 rounded-full bg-orange-500">
          صفحه ضمانت و گارانتی
        </h1>

        {renderContentGuarantee()}

        <div className="text-center">
          <p className="text-slate-400 p-2">
            شما عزیزان میتوانید برای فعال کردن گارانتی روی دکمه ی زیر کلیک کنید
            و اقدام به فعال سازی گارانتی بکنید.
          </p>
        </div>
        <button className="my-3 text-xl font-bold border-2 rounded-md p-3 text-center bg-gradient-to-r from-orange-400 via-orange-300 to-gray-400 text-white">
          <Link href="/signup">فعالسازی گارانتی</Link>
        </button>
        <p className="text-sm font-semibold text-center">
          همچنین برای تماس با پشتیبانی میتوانید از طریق دکمه ی زیر تماس حاصل
          فرمایید.
        </p>
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="google-map-code">
            <iframe
              src="https://nshn.ir/_bvhK3IxO3Kx"
              width="300"
              height="450"
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>

        <button className="my-3 bg-green-100 flex justify-center font-bold border-2 rounded-md p-3 text-center border-none">
          <Link href="tel:+98">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <path
                d="M30,22.3l-2.5-2.5c-1.3-1.3-3.5-1.3-4.8,0l-0.8,0.8c-0.5,0.5-1.4,0.5-2,0l-4.2-4.2l-4.2-4.2 c-0.3-0.3-0.4-0.6-0.4-1s0.1-0.7,0.4-1l0.9-0.8c1.3-1.3,1.3-3.5,0-4.8L9.7,2C8.5,0.7,6.2,0.7,4.9,2L4.1,2.8c-2,2-3.1,4.6-3.1,7.5 s1.1,5.5,3.1,7.5l5.1,5.1l5.1,5.1c2,2,4.7,3.1,7.5,3.1s5.5-1.1,7.5-3.1l0.9-0.8c0.6-0.6,1-1.5,1-2.4C31,23.8,30.7,22.9,30,22.3z"
                fill="#1f2937"
              />
            </svg>
          </Link>
        </button>
        <p className="text-black text-center">
          برای تماس با پشتیبانی کلیک کنید.
        </p>
      </div>
    </div>
  );
};

export default Page;
