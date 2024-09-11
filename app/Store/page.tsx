import FilterComponent from "@/components/(ui)/FilterCard";
import ProductCard from "@/components/(ui)/ProductCard";

const Page = () => {
  return (
    <div className="w-full h-auto p-4 bg-gray-200 py-8 px-2  my-2 rounded-lg mx-1 overflow-x-auto">
      
      <FilterComponent />
      <div className="flex flex-row flex-wrap justify-center gap-4">
      <p className="text-xl text-center shadow-lg rounded-2xl w-auto py-2 text-gray-900 bg-white px-4 mt-2">فروشگاه دیجیتال کنکاش استوک</p>
        
        <h1 className="text-xl text-center shadow-lg rounded-2xl w-auto py-2 text-gray-900 px-4 bg-white ">بهترین  کیفیت را با کترین قیمت تجربه کنید</h1>

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
