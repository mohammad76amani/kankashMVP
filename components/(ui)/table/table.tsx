import axios from 'axios';
import Image from 'next/image';

const TableComponent = ({ data, header, tableKey }: { data: Record<string, unknown>[]; header: string; tableKey: string }) => {
  const isImageUrl = (url: string) => url.match(/\.(jpeg|jpg|gif|png|webpec)$/) != null;
  const isPhoneNumber = (value: string) => /^\d{10}$/.test(value);
 console.log(data);
 
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/${tableKey}/${id}`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (!data || data.length === 0) {
    return (
      <div className="mt-8 max-w-full">
        <h2 className="text-2xl mb-4 text-center">{header}</h2>
        <p className="text-center text-gray-500">اطلاعاتی یافت نشد</p>
      </div>
    );
  }

  const columns = Object.keys(data[0]).filter(col => col !== '__v' && col !== 'password');

  return (
    <div className="mt-8 max-w-full">
      <h2 className="text-2xl mb-4 text-end">{header}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-r border-gray-300">Index</th>
              {columns.map((col: string, index: number) => (
                <th key={index} className="py-2 px-4 border-b border-r border-gray-300">{col}</th>
              ))}
              <th className="py-2 px-4 border-b border-r border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: Record<string, unknown>, rowIndex: number) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-2 px-4 border-b border-r border-gray-300">{rowIndex}</td>
                {columns.map((col: string, idx: number) => (
                  <td key={idx} className="py-2 px-4 border-b border-r border-gray-300">
                    {typeof item[col] === 'string' && isImageUrl(item[col] as string) ? (
                      <Image src={item[col] as string} alt="Table image" width={100} height={100} />
                    ) : isPhoneNumber(String(item[col])) ? (
                      <a href={`tel:+98${String(item[col])}`} className='flex gap-x-2 group hover:text-green-500'>
                        +98{String(item[col])} 
                        <svg className='group-hover:fill-green-500' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                          <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
                        </svg>
                      </a>
                    ) : (
                      String(item[col])
                    )}
                  </td>
                ))}
                <td className="py-2 px-4 border-b border-r border-gray-300">
                  <button
                    onClick={() => handleDelete(String(item._id))}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
