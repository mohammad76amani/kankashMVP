import Image from 'next/image';

// Define the TableComponent that takes data and header as props
const TableComponent = ({ data, header }: { data: Record<string, unknown>[]; header: string }) => {
  // Function to check if a string is an image URL
  const isImageUrl = (url: string) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  // Function to check if an item has an image URL
  const hasImage = (item: Record<string, unknown>) => {
    return Object.values(item).some(val => typeof val === 'string' && isImageUrl(val));
  };

  // Filter the data to only include items with images
  const filteredData = data.filter(hasImage);
  // Get the column names, excluding '__v'
  const columns = filteredData.length > 0 ? Object.keys(filteredData[0]).filter(col => col !== '__v') : [];

  return (
    <div className="mt-8 max-w-full">
      <h2 className="text-2xl mb-4 text-end">{header}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          {/* Table header */}
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-r border-gray-300">Index</th>
              {columns.map((col: string, index: number) => (
                <th key={index} className="py-2 px-4 border-b border-r border-gray-300">{col}</th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {filteredData.map((item: Record<string, unknown>, rowIndex: number) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-2 px-4 border-b border-r border-gray-300">{rowIndex }</td>
                {columns.map((col: string, idx: number) => (
                  <td key={idx} className="py-2 px-4 border-b border-r border-gray-300">
                    {/* Render image if the value is an image URL, otherwise render as string */}
                    {typeof item[col] === 'string' && isImageUrl(item[col] as string) ? (
                      <Image src={item[col] as string} alt="Table image" width={100} height={100} />
                    ) : (
                      String(item[col])
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
