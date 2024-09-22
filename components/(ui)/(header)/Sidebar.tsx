"use client";
import Products from "@/models/Products";
import axios from "axios";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, use, useEffect, useState } from "react";
import Image from "next/image";
const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null >(null);

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/categories").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);
  
  const [subcategories,setSubcategories] = useState<any[]>([]);
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      console.log(response.data);
      setProducts(response.data)
    });
  }, [categories]);

 const [products,setProducts]=useState<any[]>([]);
  return (
    <div
      className={`fixed my-24 z-40 md:my-4 lg:my-4 rounded-lg top-0 right-0 h-auto pr-2 bg-tranq  transition-all duration-500 ease-in-out ${
        hovered ? "w-64 bg-gray-800" : "w-16 bg-transparent"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      dir="rtl"
    >
      <div className="flex flex-col items-center pt-4">
        
        {/* Category Items */}
        {categories.map((category, index) => (
          <div
            key={index}
            className="mb-6 w-full flex flex-col items-start"
            onMouseEnter={() => {setHoveredCategory(category.name)
              
            }}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="flex items-center">
              <Image className="ml-4" width={40} height={40} src={category.image} alt={category.name} />
              <div
                className={`ml-4 py-1 text-lg border-2 px-4 rounded-lg  w-44 text-center font-semibold border-orange-500 shadow-lg text-white font-mono transition-opacity duration-500 ease-in-out ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  animation: hovered
                    ? `typewriter 1.5s steps(${category.name.length}) forwards, `
                    : "none",
                }}
              >
                {category.name}
              </div>
            </div>

            {/* Render Subcategories if Hovered */}
            {hoveredCategory === category.name && category.name.toLowerCase() === "laptop"&& (
              <div className="ml-8 mt-2">
                {subcategories && subcategories[0]?.subcategories.map((subcategory: { vector: React.ReactNode; name: string }, subIndex: React.Key | null | undefined) => (
                  <div
                    key={subIndex}
                    className="flex items-center my-1 mx-auto"
                  >
                    <div className="mx-2">{subcategory.vector}</div>
                    <div
                      className="text-md text-white border-orange-500 border-2 px-4 rounded-lg w-44 mx-auto justify-center font-mono font-bold text-center"
                      style={{
                        animation: `typewriter 1.5s steps(${subcategory.name.toString().length}) forwards, `,
                      }}
                    >
                      {subcategory.name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const laptopSVG = (
  <svg
    fill="#1f2937"
    height="30px"
    width="30px"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-13.89 -13.89 490.78 490.78"
  >
    <g>
      <path d="M455.5,348H447V99.5c0-17.369-14.131-31.5-31.5-31.5h-368C30.131,68,16,82.131,16,99.5V348H7.5 c-4.142,0-7.5,3.358-7.5,7.5v16C0,384.458,10.542,395,23.5,395h416c12.958,0,23.5-10.542,23.5-23.5v-16 C463,351.358,459.642,348,455.5,348z M31,99.5C31,90.402,38.402,83,47.5,83h368c9.098,0,16.5,7.402,16.5,16.5V348H31V99.5z M448,371.5c0,4.687-3.813,8.5-8.5,8.5h-416c-4.687,0-8.5-3.813-8.5-8.5V363h169.025c-0.011,0.166-0.025,0.331-0.025,0.5 c0,4.142,3.358,7.5,7.5,7.5h80c4.142,0,7.5-3.358,7.5-7.5c0-0.169-0.014-0.334-0.025-0.5H448V371.5z"></path>
      <path d="M407.5,100h-352c-4.142,0-7.5,3.358-7.5,7.5v216c0,4.142,3.358,7.5,7.5,7.5h352c4.142,0,7.5-3.358,7.5-7.5v-216 C415,103.358,411.642,100,407.5,100z M400,316H63V115h337V316z"></path>
    </g>
  </svg>
);

const desktopSVG = (
  <svg
    fill="#1f2937"
    height="30px"
    width="30px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M4 19h16v2H4zm15-3H5V5h14m2-2H3v14h18V3z"></path>
  </svg>
);

const accessoriesSVG = (
  <svg
    fill="#1f2937"
    height="30px"
    width="30px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M18 16h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-1V4c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2H6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h1v2h10v-2zm-8-3c-1.1 0-2-.9-2-2s.9-2 2-2c1.1 0 2 .9 2 2s-.9 2-2 2zm6-7H8V4h8v2z"></path>
  </svg>
);
