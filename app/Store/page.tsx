'use client'
import FilterComponent from "@/components/(ui)/FilterCard";
import ProductCard from "@/components/(ui)/ProductCard";
import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdAttachMoney, MdBrandingWatermark } from 'react-icons/md';
import { BRAND, number } from "zod";
type CategoryType = 'price' | 'brand' | 'rating';

interface CategoryState {
  expanded: boolean;
  options: string[];
}

interface CategoriesState {
  price: CategoryState;
  brand: CategoryState;
  rating: CategoryState;
}

interface SelectedFiltersState {
  price: number[];
  brand: string[];
  rating: string[];
}
interface FilterComponentProps {
  onFilterChange: (filters: SelectedFiltersState) => void;
}
const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const [filteredData, setFilteredData] = useState(null);
  const [categories, setCategories] = useState<CategoriesState>({
    price: { expanded: true, options: [] },
    brand: { expanded: false, options: ['Apple', 'Samsung', 'Google', 'Sony', 'LG'] },
    rating: { expanded: false, options: ['5 Stars', '4 Stars & Up', '3 Stars & Up', '2 Stars & Up', '1 Star & Up'] }
  });

  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersState>({
    price: [0, 250000000],
    brand: [],
    rating: []
  });
  

  const applyFilters = () => {
    const filteredProducts = products.filter((product: any) => {
      const priceInRange = product.price >= selectedFilters.price[0] && product.price <= selectedFilters.price[1];
      const brandMatch = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(product.brand);
      const ratingMatch = selectedFilters.rating.length === 0 || selectedFilters.rating.some(rating => product.rating >= parseInt(rating));
  
      return priceInRange && brandMatch && ratingMatch;
    });
  
    setFilteredData(filteredProducts as unknown as SetStateAction<null>);
  };

  const handleCheckboxChange = (category: CategoryType, option: string | number) => {
    setSelectedFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(option as never)
        ? prevFilters[category].filter((item: string | number) => item !== option)
        : [...prevFilters[category], option as never];
      const newFilters = { ...prevFilters, [category]: updatedCategory };
      return newFilters;
    });
    applyFilters();
  };
  
  const handlePriceChange = (event: any , index: number) => {
    const newPriceRange = [...selectedFilters.price];
    newPriceRange[index] = parseInt(event.target.value, 10);
    setSelectedFilters({ ...selectedFilters, price: newPriceRange });
    applyFilters();
  };
  

  const handleFilterChange = (filters: SetStateAction<null>) => {
    setFilteredData(filters);
    // You can perform additional actions with the filtered data here
  };

  const toggleCategory = (category: CategoryType) => {
    setCategories({
      ...categories,
      [category]: { ...categories[category], expanded: !categories[category].expanded }
    });
  };

  const resetFilters = () => {
    setSelectedFilters({ price: [0, 250000000], brand: [], rating: [] });
    applyFilters();
    setFilteredData(null);
    
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const getCategoryIcon = (category: CategoryType) => {
    switch (category) {
      case 'price':
        return <MdAttachMoney className="text-green-500" />;
      case 'brand':
        return <MdBrandingWatermark className="text-blue-500" />;
      case 'rating':
        return <FaStar className="text-yellow-400" />;
      default:
        return null;
    }
  }

  return (
    <div className="w-full h-auto p-4 bg-gray-200 py-8 px-2 lg:px-12 my-2 rounded-lg mx-1 overflow-x-auto">
      <div className=" lg:text-white lg:p-6 lg:shadow-lg lg:overflow-y-auto">
        <div className="lg:sticky lg:top-0 lg:w-full lg:p-4 lg:rounded-lg lg:bg-transparent lg:shadow-lg">
          {/* Top bar for small screens */}
          <div className="lg:hidden mt-2 mb-4 mx-6 relative top-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 rounded-lg">
            <button
              onClick={() => toggleCategory('price')}
              className="flex items-center justify-between text-center w-full p-2 bg-gray-900 rounded-md focus:outline-none"
            >
              <span className="font-semibold px-4">دسته بندی ها</span>
              {categories.price.expanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>

          {/* Price Range Slider */}
          <div className={`lg:block ${categories.price.expanded ? 'block' : 'hidden'} mt-8 lg:mt-0 bg-transparent p-4 rounded-lg shadow-lg`}>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold flex items-center text-orange-500">
                <MdAttachMoney className="text-orange-500 mr-2" />
                قیمت
              </h3>
              <div className="mt-4">
                <input
                  type="range"
                  min="200000"
                  max="250000000"
                  value={selectedFilters.price[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full h-2 bg-orange-500 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="200000"
                  max="250000000"
                  value={selectedFilters.price[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full h-2 bg-orange-500 rounded-lg appearance-none cursor-pointer text-orange-500"
                />
              </div>
              <div className="flex justify-between mt-2 text-gray-900 font-semibold">
                <span className="border-b-2 border-red-500 bg-white rounded-xl shadow-lg px-4 py-2">
                  {`${selectedFilters.price[0].toLocaleString('fa-IR')}`} تومان
                </span>
                <span className="border-b-2 border-red-500 bg-white rounded-xl shadow-lg px-4 py-2">
                  {`${selectedFilters.price[1].toLocaleString('fa-IR')}`} تومان
                </span>
              </div>
            </div>

            {/* Brand and Rating Filters */}
            {(Object.entries(categories) as [CategoryType, CategoryState][]).map(([category, { expanded, options }]) => (
              category !== 'price' && (
                <div key={category} className="mb-4">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="flex items-center justify-between w-full p-2 bg-gray-100 rounded-md focus:outline-none text-orange-500"
                    aria-expanded={expanded}
                  >
                    <span className="flex items-center text-dark">
                      {getCategoryIcon(category)}
                      <span className="ml-2 font-semibold capitalize">{category}</span>
                    </span>
                    {expanded ? <FaChevronUp className="text-dark" /> : <FaChevronDown className="text-dark" />}
                  </button>
                  {expanded && (
                    <div className="mt-2 ml-4 space-y-2">
                      {options.map((option) => (
                        <label key={option} className="flex items-center space-x-2 cursor-pointer text-orange-500">
                          <input
                            type="checkbox"
                            checked={selectedFilters[category].includes(option as never)}
                            onChange={() => handleCheckboxChange(category, option)}
                            className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out text-orange-500"
                          />
                          <span className="text-orange-500 font-bold">
                            {category === 'rating' ? (
                              <span className="flex items-center text-orange-500">
                                {renderStars(parseInt(option[0]))}
                                <span className="ml-1 text-orange-500">{option}</span>
                              </span>
                            ) : (
                              option
                            )}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
            <div className="flex justify-center mt-4">
            <button onClick={resetFilters} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg  text-white">حذف فیلتر ها</button>

            </div>
          </div>
          
        </div>
      </div>
      {/* Filter Component */}
      <div className="mb-8">
      </div>

      {/* Page Title and Description */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <p className="text-xl lg:text-2xl text-center shadow-lg rounded-2xl w-auto h-auto py-2 text-gray-900 bg-white px-4 lg:px-8 mt-2">
          فروشگاه دیجیتال کنکاش استوک
        </p>

        <h1 className="text-xl lg:text-2xl text-center shadow-lg rounded-2xl w-auto py-2 text-gray-900 px-4 lg:px-8 bg-white">
          بهترین کیفیت را با کمترین قیمت تجربه کنید
        </h1>
      </div>

      {/* Product Cards */}
      {/* Product Cards */}
<div className="flex flex-row flex-wrap justify-center gap-4 lg:gap-6">
  {(filteredData || products).map((product, index) => (
    <ProductCard key={index} product={product} />
  ))}
</div>

    </div>
  );
}
export default Page;
