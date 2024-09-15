import Image from 'next/image';

const TableComponent = ({ data, header }: { data: Record<string, unknown>[]; header: string }) => {
  const isImageUrl = (url: string) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  const hasImage = (item: Record<string, unknown>) => {
    return Object.values(item).some(val => typeof val === 'string' && isImageUrl(val));
  };

  const filteredData = data.filter(hasImage);
  const columns = filteredData.length > 0 ? Object.keys(filteredData[0]) : [];

  return (
    <div className="mt-8 max-w-full">
      <h2 className="text-2xl mb-4 text-end">{header}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              {columns.map((col: string, index: number) => (
                <th key={index} className="py-2 px-4 border-b border-r border-gray-300">{col}</th>

))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item: Record<string, unknown>, index: number) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                {columns.map((col: string, idx: number) => (
                  <td key={idx} className="py-2 px-4 border-b border-r border-gray-300">
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
