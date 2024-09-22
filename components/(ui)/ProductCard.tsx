'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  cpu: string;
  ram: string;
  hard: string;
  gpu: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts([product]);
    }, [product]);

    return (
        <>
            {products.map((product) => (
                <div key={product._id} className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto transition-transform duration-300 transform hover:scale-105 mt-8">
                    <div className="relative border border-gray-300 rounded-3xl drop-shadow-xl bg-white p-5 lg:p-8">
                        {/* Discount Badge */}
                        <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                            <button className="h-8 bg-gradient-to-t from-orange-700 to-gray-800 text-white px-4 lg:px-5 text-sm lg:text-base rounded font-semibold">OFF</button>
                        </div>

                        {/* Wishlist Icon */}
                        <div className="absolute top-3 right-3 lg:top-4 lg:right-4 rounded-full bg-white p-2 lg:p-3 text-red-600" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 lg:h-8 lg:w-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>

                        {/* Product Image */}
                        <div className="flex justify-center items-center mb-6">
                            <Image src={product.image} width={150} height={200} alt={product.name} className="rounded-lg shadow-lg w-50 h-15" />
                        </div>

                        {/* Product Details */}
                        <div className="text-center">
                            <p className="text-lg lg:text-2xl font-bold text-gray-800 mb-4">{product.name}</p>
                            <div className="flex flex-wrap justify-center gap-2 mb-4 lg:gap-3">
                                <div className="px-3 py-1 bg-gradient-to-t from-orange-700 to-gray-800 text-white rounded-xl text-sm lg:text-base font-medium">Cpu:{product.cpu}</div>
                                <div className="px-3 py-1 bg-gradient-to-t from-orange-700 to-gray-800 text-white rounded-xl text-sm lg:text-base font-medium">ram:{product.ram}</div>
                                <div className="px-3 py-1 bg-gradient-to-t from-orange-700 to-gray-800 text-white rounded-xl text-sm lg:text-base font-medium">hard:{product.hard}</div>
                                <div className="px-3 py-1 bg-gradient-to-t from-orange-700 to-gray-800 text-white rounded-xl text-sm lg:text-base font-medium">gpu:{product.gpu}</div>
                            </div>
                            <Link href={`/DetailedPage/${product._id}`}>
                                <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-b from-orange-700 to-gray-800 text-white rounded-xl text-sm lg:text-xl font-medium">
                                    تومان {product.price.toLocaleString()}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductCard;
