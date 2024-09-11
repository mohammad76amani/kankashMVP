import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
    return (
        <div className="max-w-xs lg:max-w-md mx-auto transition-transform duration-300 transform hover:scale-105 mt-8">
            <div className="relative border border-gray-300 rounded-3xl drop-shadow-xl bg-white p-5">

                {/* Discount Badge */}
                <div className="absolute top-3 left-3">
                    <button className="h-8 bg-gradient-to-t from-orange-700 to-gray-800 text-white px-4 text-sm rounded font-semibold">OFF</button>
                </div>

                {/* Wishlist Icon */}
                <div className="absolute top-3 right-3 rounded-full bg-white p-2 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>

                {/* Product Image */}
                <div className="flex justify-center items-center mb-6">
                    <Image src='/assets/images/assus.jfif' width="400" height="600" alt="Assus T576574" className="rounded-lg shadow-lg" />
                </div>

                {/* Product Details */}
                <div className="text-center">
                    <p className="text-xl font-bold text-gray-800 mb-4">Assus T576574</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <div className="px-3 py-1 bg-gradient-to-t from-orange-700 to-gray-800 text-white rounded-xl text-sm font-medium">Core i7</div>
                        <div className="px-3 py-1 bg-gradient-to-t from-orange-700 to-gray-800 text-white rounded-xl text-sm font-medium">2GB RAM</div>
                        <div className="px-3 py-1 bg-gradient-to-t from-orange-700 to-gray-800 text-white rounded-xl text-sm font-medium">SSD 1TB</div>
                        <div className="px-3 py-1 bg-gradient-to-t from-orange-700 to-gray-800 text-white rounded-xl text-sm font-medium">GTX 80-40</div>
                    </div>
                    <Link href='/'>
                        <div className="inline-block px-4 py-2 bg-gradient-to-b from-orange-700 to-gray-800 text-white rounded-xl text-lg font-medium">
                            تومان 13,000,000
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
