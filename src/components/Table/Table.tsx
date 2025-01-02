import React, { useEffect, useState } from 'react';
import './Table.css';

interface TableProps {
  data: Array<{ [key: string]: any }>;
  onRowClick: (rowData: any) => void;
}

const Table: React.FC<TableProps> = ({ data, onRowClick }) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  useEffect(() => {
    setSelectedRowIndex(null);
  }, [data]);

  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const handleRowClick = (row: any, index: number) => {
    setSelectedRowIndex(index);
    onRowClick(row);
  }

  const headers = Object.keys(data[0]);

  return (
    <table className="Table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr 
            key={index} 
            className={selectedRowIndex === index ? 'selected' : ''}
            onClick={ () => handleRowClick(row, index)}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;