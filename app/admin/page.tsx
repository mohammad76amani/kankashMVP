"use client";
import { useEffect, useState } from "react"
import axios from 'axios'
import Image from "next/image"
import Trending from "../../components/(ui)/trending/trending";
import Banners from "../../components/(ui)/banners/banners";
import Products from "../../components/(ui)/products/products";
import Categories from "../../components/(ui)/categories/categories";
import { kankashInfo } from "@/lib/info";
import TableComponent from "@/components/(ui)/table/table";
const DropdownSwitchComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [tableDetails, setTableDetails] = useState<any>(null);
  const[header, setHeader] = useState<string>('');
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    if(event.target.value==='products'){
      setHeader('محصولات')
    }else if(event.target.value==='banners'){
      setHeader('بنرها')
    }else if(event.target.value==='categories'){
      setHeader('دسته بندی ها')
    }else if(event.target.value==='trending'){
      setHeader('محصولات پرفروش')
    }
  };

  useEffect(() => {
    if (selectedOption) {
      axios.get('api/' + selectedOption)
        .then(response => {
          setTableDetails(response.data);
          console.log(response.data);
        }).catch(error => {console.log(error)});
    }
  }, [selectedOption]);

  const renderContent = () => {
    switch (selectedOption) {
      case 'trending':
        return (<Trending />);
      case 'banners':
        return (<Banners />);
      case 'products':
        return (<Products />);
      case 'categories':
        return (<Categories />);
      default:
        return <div className="mt-10 text-xl bg-orange-600 text-white px-4 py-2 rounded-md">.لطفا گزینه ای را از منوی بالا انتخاب کنید</div>;
    }
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <select
        id="category"
        name="category"
        className="mt-1 mb-8 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        onChange={handleOptionChange }
      >
        {kankashInfo.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      <div>
        {renderContent()}
      </div>
      {tableDetails && <TableComponent header={header} data={tableDetails} />}
    </div>
  );
};

export default DropdownSwitchComponent;
