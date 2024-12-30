import React from 'react';
import './Table.css';

interface TableProps {
  data: Array<{ [key: string]: any }>;
  onRowClick: (rowData: any) => void;
}

const Table: React.FC<TableProps> = ({ data, onRowClick }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
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
          <tr key={index} onClick={ () => onRowClick(row)}>
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