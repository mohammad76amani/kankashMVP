import Bubbles from "@/components/(ui)/Bubles";
import EmblaCarousel from "@/components/(ui)/(header)/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/(ui)/(header)/Sidebar";
import MidleBar from "@/components/(ui)/MidleBar";
import ProductCard from "@/components/(ui)/ProductCard";
import BlogCard from "@/components/(ui)/BlogCard";
import connect from "@/lib/data";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Page = () => {
  return (
    <div className="flex flex-col w-full h-auto p-1 bg-gray-200 py-8 px-2 lg:py-12 lg:px-4">
      <Sidebar />
      <div className="flex flex-col w-full justify-center items-center bg-white shadow-lg rounded-lg py-4 px-2 lg:py-6 lg:px-4">
        <EmblaCarousel options={OPTIONS} />
      </div>
      <div className="flex flex-row items-center justify-evenly mt-5 bg-gray-200  text-black rounded-xl p-4 ml-7">
        <div className="flex flex-col items-center text-center">
          {" "}
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M2.84436 13V7.50664C2.84436 5.48403 4.48401 3.84439 6.50661 3.84439H17.4933C19.516 3.84439 21.1556 5.48403 21.1556 7.50663V13C21.1556 15.0226 19.5159 16.6623 17.4933 16.6623H6.50661C4.484 16.6623 2.84436 15.0226 2.84436 13Z"
                stroke="#f97316"
                stroke-width="1.7"
              ></path>{" "}
              <path
                d="M6.03967 20.3245H17.9603"
                stroke="#f97316"
                stroke-width="1.7"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
          <h5 className="text-xl font-semibold ">Desktop</h5>
        </div>
        <div className="flex flex-col items-center text-center">
          {" "}
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M19.6471 15.5357H4.35294M19.6471 15.5357V8C19.6471 6.11438 19.6471 5.17157 19.0613 4.58579C18.4755 4 17.5327 4 15.6471 4H8.35294C6.46732 4 5.52451 4 4.93873 4.58579C4.35294 5.17157 4.35294 6.11438 4.35294 8V15.5357M19.6471 15.5357L21.3911 17.3358C21.4356 17.3818 21.4579 17.4048 21.4787 17.4276C21.7998 17.7802 21.9843 18.2358 21.999 18.7124C22 18.7433 22 18.7753 22 18.8393C22 18.9885 22 19.0631 21.996 19.1261C21.9325 20.1314 21.1314 20.9325 20.1261 20.996C20.0631 21 19.9885 21 19.8393 21H4.16068C4.01148 21 3.93688 21 3.87388 20.996C2.86865 20.9325 2.06749 20.1314 2.00398 19.1261C2 19.0631 2 18.9885 2 18.8393C2 18.7753 2 18.7433 2.00096 18.7124C2.01569 18.2358 2.20022 17.7802 2.52127 17.4276C2.54208 17.4048 2.56438 17.3818 2.60888 17.3358L4.35294 15.5357"
                stroke="#f97316"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M9.5 18.5H14.5"
                stroke="#f97316"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M12.75 6.75C12.75 7.16421 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75Z"
                fill="#f97316"
              ></path>{" "}
            </g>
          </svg>
          <h5 className="text-xl font-semibold">Laptops</h5>
        </div>
        <div className="flex flex-col items-center text-center">
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z"
                fill="#f97316"
              ></path>{" "}
              <path
                d="M16 5C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H12"
                stroke="#f97316"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M7 16H17"
                stroke="#f97316"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
          <h5 className="font-semibold text-xl">Accessories</h5>
        </div>
      </div>

      <div
        className=" grid-cols-9 gap-1 w-full lg:grid-cols-12 lg:gap-4"
        id="left-to-right"
      >
        <div className=" bg-white rounded-lg shadow-lg w-auto ml-10 mt-4 lg:mt-6 ">
          <div className="flex flex-col items-center object-cover rounded-lg shadow-lg p-1 w-full">
            <Image
              src="/assets/images/stock-ssd.jpeg"
              width={400}
              height={100}
              alt="image"
              className="rounded-lg shadow-lg lg:w-3/4"
            />
            <h1 className="text-center mt-4 px-2 text-xl font-bold lg:text-2xl">
              هارد های کنکاش استوک
            </h1>
            <p
              className="text-center mt-2 px-2 pb-4 font-semibold lg:text-lg"
              dir="rtl"
            >
              داشتن یک فضای ذخیره سازی مطمن و سریع دقدقه خیلی از ماهاست که هار
              های ssd این مشکل برامون حل کردن ...
            </p>
            <button className="mb-2">
              <Link
                href="/"
                className="px-8 py-1 rounded-lg bg-orange-500 text-white my-2 hover:bg-orange-600 lg:px-10 lg:py-2"
              >
                buy
              </Link>
            </button>
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-lg col-start-2 col-end-10 w-auto mr-10 mt-3 lg:mt-4"
          dir="rtl"
        >
          <div className="flex flex-col items-center object-cover rounded-lg shadow-lg p-1">
            <Image
              src="/assets/images/computer-banner2.jpeg"
              width={400}
              height={100}
              alt="image"
              className="rounded-lg shadow-lg lg:w-3/4"
            />
            <h1
              className="text-center mt-3 px-2 text-xl font-bold lg:text-2xl"
              dir="rtl"
            >
              سیستمتو اسمبل کن!!!😎😮😮
            </h1>
            <p className="text-center my-4 px-2  lg:text-lg">
              اینجا تو کنکاش استوک میتونی خودت کامل سیستمتو اسمبل کنی تازه
              میتونی کلی اطلاعات راجب قطعه های مختلف به دست بیاری{" "}
            </p>
            <button className="mb-4">
              <Link
                href="/"
                className="px-4 py-1 rounded-lg bg-orange-500 text-white my-2 hover:bg-orange-600 lg:px-6 lg:py-2"
              >
                بریم ببینیم چیه🤔
              </Link>
            </button>
          </div>
        </div>
        <div className="grid col-span-12 w-full mt-4 mx-auto  ">
          <div className="grid grid-cols-3 gap-4 p-2 mx-1 rounded-lg shadow-lg bg-gray-800 lg:w-full lg:col-span-12 ">
            {/* Icon 1 */}
            <div className="flex flex-col items-center text-center">
              <svg
                fill="#f97316"
                height="85px"
                width="85px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 326.21 326.21"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M325.637,189.233l-56.043-135.3c-0.761-1.838-2.221-3.298-4.059-4.059c-1.838-0.762-3.902-0.762-5.74,0L73.176,127.176 c-1.838,0.761-3.298,2.221-4.059,4.059c-0.761,1.838-0.761,3.903,0.001,5.74l56.051,135.3c1.196,2.889,3.989,4.632,6.932,4.632 c0.957,0,1.929-0.185,2.867-0.573l186.611-77.302C325.405,197.447,327.222,193.06,325.637,189.233z M208.674,190.361 L94.596,134.539l155.26-64.312L208.674,190.361z M209.716,207.57c1.038,0.509,2.166,0.764,3.296,0.764 c0.974,0,1.95-0.189,2.871-0.571c1.988-0.823,3.526-2.461,4.224-4.497l16.07-46.881l64.599,35.028l-156.488,64.824l20.911-70.45 L209.716,207.57z M303.949,176.07l-62.838-34.073l22.064-64.365L303.949,176.07z M90.414,149.191l61.124,29.91l-20.342,68.533 L90.414,149.191z"></path>{" "}
                    <path d="M7.5,166.616h43.536c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.357-7.5,7.5 C0,163.258,3.358,166.616,7.5,166.616z"></path>{" "}
                    <path d="M82.073,236.893H7.5c-4.142,0-7.5,3.357-7.5,7.5c0,4.143,3.358,7.5,7.5,7.5h74.573c4.142,0,7.5-3.357,7.5-7.5 C89.573,240.25,86.215,236.893,82.073,236.893z"></path>{" "}
                    <path d="M7.5,209.254h59.059c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.357-7.5,7.5 C0,205.897,3.358,209.254,7.5,209.254z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h6 className="mt-1 text-sm text-white font-semibold">
                ارسال به سراسر کشور
              </h6>
            </div>

            {/* Icon 2 */}
            <div className="flex flex-col items-center text-center">
              <svg
                fill="#f97316"
                width="64px"
                height="64px"
                viewBox="0 0 64 64"
                id="Layer_1_1_"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M46,22h-6.671l5.557-6.352C45.604,14.828,46,13.775,46,12.685V12.5c0-2.481-2.019-4.5-4.5-4.5S37,10.019,37,12.5V14h2v-1.5 c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v0.185c0,0.606-0.22,1.19-0.619,1.646L37,21.624V24h9V22z"></path>{" "}
                    <path d="M54,24h2v-3h2v-2h-2V8h-2.618L48,18.764V21h6V24z M50.118,19L54,11.236V19H50.118z"></path>{" "}
                    <path d="M50.405,32.627C57.596,31.061,63,24.653,63,17c0-8.822-7.178-16-16-16c-7.653,0-14.061,5.404-15.627,12.595 C29.608,13.207,27.807,13,26,13C12.215,13,1,24.215,1,38s11.215,25,25,25s25-11.215,25-25C51,36.193,50.793,34.392,50.405,32.627z M47,3c7.72,0,14,6.28,14,14s-6.28,14-14,14s-14-6.28-14-14S39.28,3,47,3z M44.961,37H43v2h1.949 c-0.235,4.484-2.024,8.553-4.847,11.688l-1.375-1.375l-1.414,1.414l1.375,1.375c-3.135,2.824-7.204,4.612-11.688,4.847V55h-2v1.949 c-4.484-0.235-8.553-2.024-11.688-4.847l1.375-1.375l-1.414-1.414l-1.375,1.375C9.074,47.553,7.286,43.484,7.051,39H9v-2H7.051 c0.235-4.484,2.024-8.553,4.847-11.688l1.375,1.375l1.414-1.414l-1.375-1.375c3.135-2.824,7.204-4.612,11.688-4.847V21h2v-1.961 c1.438,0.076,2.862,0.318,4.255,0.72c1.156,6.611,6.374,11.829,12.986,12.986C44.642,34.138,44.884,35.562,44.961,37z M26,61 C13.317,61,3,50.683,3,38s10.317-23,23-23c1.706,0,3.407,0.201,5.072,0.577C31.03,16.047,31,16.52,31,17 c0,0.209,0.023,0.413,0.031,0.621C29.381,17.212,27.695,17,26,17C14.421,17,5,26.421,5,38s9.421,21,21,21s21-9.421,21-21 c0-1.695-0.212-3.381-0.621-5.031C46.587,32.977,46.791,33,47,33c0.48,0,0.953-0.03,1.423-0.072C48.799,34.593,49,36.294,49,38 C49,50.683,38.683,61,26,61z"></path>{" "}
                    <path d="M29,38c0-1.302-0.839-2.402-2-2.816V23h-2v12.184c-1.161,0.414-2,1.514-2,2.816c0,1.654,1.346,3,3,3 c0.462,0,0.894-0.113,1.285-0.301l7.008,7.008l1.414-1.414l-7.008-7.008C28.887,38.894,29,38.462,29,38z M25,38 c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S25,38.552,25,38z"></path>{" "}
                    <path d="M56,35c-1.654,0-3,1.346-3,3c0,1.251,0.771,2.324,1.862,2.773c-0.627,6.584-3.499,12.781-8.152,17.527l1.428,1.4 c4.999-5.098,8.074-11.763,8.725-18.842C58.095,40.485,59,39.353,59,38C59,36.346,57.654,35,56,35z M56,39c-0.552,0-1-0.448-1-1 s0.448-1,1-1s1,0.448,1,1S56.552,39,56,39z"></path>{" "}
                    <path d="M6.283,16.733c4.658-4.321,10.651-6.978,16.949-7.579C23.686,10.237,24.755,11,26,11c1.654,0,3-1.346,3-3s-1.346-3-3-3 c-1.352,0-2.485,0.905-2.858,2.137c-6.771,0.624-13.214,3.489-18.218,8.13L6.283,16.733z M26,7c0.552,0,1,0.448,1,1s-0.448,1-1,1 s-1-0.448-1-1S25.448,7,26,7z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h6 className="mt-6 text-sm text-white font-semibold">
                پشتیبانی 24 ساعته
              </h6>
            </div>

            {/* Icon 3 */}
            <div className="flex flex-col items-center text-center">
              <svg
                fill="#f97316"
                width="83px"
                height="83px"
                viewBox="0 0 52 52"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M26,2c3,0,5.43,3.29,8.09,4.42s6.82.51,8.84,2.65,1.51,6.07,2.65,8.84S50,23,50,26s-3.29,5.43-4.42,8.09-.51,6.82-2.65,8.84-6.07,1.53-8.84,2.65S29,50,26,50s-5.43-3.29-8.09-4.42-6.82-.51-8.84-2.65-1.53-6.07-2.65-8.84S2,29,2,26s3.29-5.43,4.42-8.09.51-6.82,2.65-8.84,6.07-1.53,8.84-2.65S23,2,26,2Zm0,7.58A16.42,16.42,0,1,0,42.42,26h0A16.47,16.47,0,0,0,26,9.58Zm7.62,9.15,1.61,1.52a1.25,1.25,0,0,1,0,1.51L25.08,33.07a2.07,2.07,0,0,1-1.61.7,2.23,2.23,0,0,1-1.61-.7L16.37,27.6a1,1,0,0,1-.1-1.42l.1-.11L18,24.56a1.1,1.1,0,0,1,1.54-.07l.07.07,3.89,4,8.59-9.8A1.1,1.1,0,0,1,33.62,18.73Z"></path>
                </g>
              </svg>
              <h6 className="mt-2 text-white text-sm font-semibold">
                ضمانت کیفیت
              </h6>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-4 p-4">
          <div className="shrink-0 w-fit h-fit  rounded-lg">
            {" "}
            <ProductCard />
          </div>
          <div className="shrink-0 w-fit h-fit  rounded-lg">
            {" "}
            <ProductCard />
          </div>
          <div className="shrink-0 w-fit h-fit  rounded-lg">
            {" "}
            <ProductCard />
          </div>
          <div className="shrink-0 w-fit h-fit  rounded-lg">
            {" "}
            <ProductCard />
          </div>
          <div className="shrink-0 w-fit h-fit  rounded-lg">
            {" "}
            <ProductCard />
          </div>
          <div className="shrink-0 w-fit h-fit  rounded-lg">
            {" "}
            <ProductCard />
          </div>
          
        </div>

        <div className="grid col-span-9 w-full mt-4 px-1 lg:px-4 ">
          <div className="w-full flex justify-center item-center">
            <BlogCard />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full ">
        <Bubbles />
      </div>
    </div>
  );
};

export default Page;
