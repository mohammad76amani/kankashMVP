"use client";
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdAttachMoney, MdBrandingWatermark } from 'react-icons/md';

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

const FilterComponent = () => {
  const [categories, setCategories] = useState<CategoriesState>({
    price: { expanded: true, options: [] },
    brand: { expanded: false, options: ['Apple', 'Samsung', 'Google', 'Sony', 'LG'] },
    rating: { expanded: false, options: ['5 Stars', '4 Stars & Up', '3 Stars & Up', '2 Stars & Up', '1 Star & Up'] }
  });

  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersState>({
    price: [0, 1000],
    brand: [],
    rating: []
  });

  const toggleCategory = (category: CategoryType) => {
    setCategories({
      ...categories,
      [category]: { ...categories[category], expanded: !categories[category].expanded }
    });
  };

  const handleCheckboxChange = (category: CategoryType, option: string|number) => {
    setSelectedFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(option as never)
        ? prevFilters[category].filter((item: string | number) => item !== option)
        : [...prevFilters[category], option as never];
      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPriceRange = [...selectedFilters.price];
    newPriceRange[index] = parseInt(event.target.value, 10);
    setSelectedFilters({ ...selectedFilters, price: newPriceRange });
  };

  const resetFilters = () => {
    setSelectedFilters({ price: [0, 1000], brand: [], rating: [] });
  };

  const applyFilters = () => {
    console.log('Applied filters:', selectedFilters);
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
  };

  return (
    <div className="lg:fixed z-40 lg:top-0 lg:left-0 lg:h-auto lg:w-64 lg:bg-gray-800 lg:text-white lg:p-6 lg:shadow-lg lg:overflow-y-auto  " >
      <div className="lg:sticky lg:top-0 lg:w-full lg:p-4 lg:rounded-lg lg:bg-gray-800 lg:shadow-lg ">
        {/* Top bar for small screens */}
        <div className="lg:hidden mt-2 mb-4 mx-6 relative top-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 rounded-lg">
          <button
            onClick={() => toggleCategory('price')}
            className="flex items-center justify-center text-center w-full p-2 bg-gray-900 rounded-md focus:outline-none"
          >
            <span className="font-semibold px-4">دسته بندی ها</span>
            {categories.price.expanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        <div className={`lg:block ${categories.price.expanded ? 'block' : 'hidden'} mt-8 lg:mt-0 bg-white p-4 rounded-lg shadow-lg`}>
          {/* Price Range Slider */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold flex items-center justify-center">
              <MdAttachMoney className="text-orange-500 mr-2" />
              قیمت
            </h3>
            <div className="flex justify-between mt-4">
              <input
                type="range"
                min="200000"
                max="100000000"
                value={selectedFilters.price[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="w-full h-2 bg-orange-500 rounded-lg appearance-none cursor-pointer"
              />
              
            </div>
            <div className="flex justify-center mt-2 text-gray-900 text-center font-semibold ">
              <span className='border-b-2 border-red-500 bg-white rounded-xl shadow-lg px-4 my-2 py-2'>{`${selectedFilters.price[0].toLocaleString('fa-IR')}`} تومان</span>
             
            </div>
          </div>

          {/* Brand and Rating Filters */}
          {(Object.entries(categories) as [CategoryType, CategoryState][]).map(([category, { expanded, options }]) => (
            category !== 'price' && (
              <div key={category} className="mb-4">
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex items-center justify-between w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                  aria-expanded={expanded}
                >
                  <span className="flex items-center justify-center text-center"> 
                    {getCategoryIcon(category)}
                    <span className="ml-2 font-semibold capitalize text-gray-800 text-center">{category}</span>
                  </span>
                  {expanded ? <FaChevronUp className="text-gray-800" /> : <FaChevronDown className="text-gray-800" />}
                </button>
                {expanded && (
                  <div className="mt-2 ml-4 space-y-2">
                    {options.map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFilters[category].includes(option as never)}
                          onChange={() => handleCheckboxChange(category, option)}
                          className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                        />
                        <span className="text-gray-700">
                          {category === 'rating' ? (
                            <span className="flex items-center">
                              {renderStars(parseInt(option[0]))}
                              <span className="ml-1">{option}</span>
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
        </div>
      </div>

      {/* Apply Button (visible on small screens) */}
      
    </div>
  );
};export default FilterComponent;
