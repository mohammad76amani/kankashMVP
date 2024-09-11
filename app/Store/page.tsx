import FilterComponent from "@/components/(ui)/FilterCard";
import ProductCard from "@/components/(ui)/ProductCard";

const Page = () => {
  return (
    <div className="w-full h-auto p-4 bg-gray-200 py-8 px-2 lg:px-12 my-2 rounded-lg mx-1 overflow-x-auto">

      {/* Filter Component */}
      <div className="mb-8">
        <FilterComponent />
      </div>

      {/* Page Title and Description */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <p className="text-xl lg:text-2xl text-center shadow-lg rounded-2xl w-auto h-auto py-2 text-gray-900 bg-white px-4 lg:px-8 mt-2">
          فروشگاه دیجیتال کنکاش استوک
        </p>
        
        <h1 className="text-xl lg:text-2xl text-center shadow-lg rounded-2xl w-auto py-2 text-gray-900 px-4 lg:px-8 bg-white">
          بهترین کیفیت را با کترین قیمت تجربه کنید
        </h1>
      </div>

      {/* Product Cards */}
      <div className="flex flex-row flex-wrap justify-center gap-4 lg:gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
}

export default Page;
