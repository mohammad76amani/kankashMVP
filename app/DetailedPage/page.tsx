"use client"
import Image from 'next/image';
import { useState } from 'react';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  colors: string[];
  info: string[];
}

const product: Product = {
  name: 'لپتاپ ایسوز',
  description:
    'لورم ش.یشمنمنمئنئمئمئنمنمشهنهبشهلخدر بتشهخل حشدیب ت  تدش ',
  price: 29.99,

  imageUrl:
    '/assets/images/computer-banner4.jpeg',
  colors: ['bg-gray-800', 'bg-red-500', 'bg-blue-500', 'bg-yellow-500'],
  info: ['S', 'M', 'L', 'XL', 'XXL'],
};

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8" dir='rtl'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Image Section */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <Image
                className="w-full h-full object-cover"
                src={product.imageUrl}
                alt="Product"
                width={200}
                height={200}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 text-sm">خرید
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 text-sm dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"> علاقه مندی ها
                </button>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>

            {/* Price and Availability */}
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-orange-500 dark:text-orange-500 mx-2">
                  قیمت :
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  تومان{product.price.toLocaleString('fa-IR')}
                </span>
              </div>

            </div>

            {/* Select Color */}
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                زنگ های موجود
              </span>
              <div className="flex items-center mt-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full ${color} mr-2 ${selectedColor === color ? 'ring-2 ring-gray-400' : ''
                      }`}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Select Size */}
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                اطلاعات فنی
              </span>
              <div className="flex items-center mt-2">
                {product.info.map((size, index) => (
                  <button
                    key={index}
                    className={`bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 ${selectedSize === size ? 'ring-2 ring-gray-400' : ''
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                توضیحات
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
                Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
                mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
