import React from "react";

interface CSVRow {
  [key: string]: string;
}

interface CSVDataTableProps {
  data: CSVRow[];
}

const CSVDataTable: React.FC<CSVDataTableProps> = ({ data }) => {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <>
      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} style={tableHeaderStyle}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header, columnIndex) => (
                  <td key={columnIndex} style={tableCellStyle}>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

const tableStyle: React.CSSProperties = {
  borderCollapse: "collapse",
  width: "100%",
  borderRadius: "10px",
  overflow: "hidden",
  textAlign: "center",
};

const tableHeaderStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#ffffff",
  background: "#4708c6",
  borderBottom: "1px solid #ddd",
  padding: "15px",
  textAlign: "center",
};

const tableCellStyle: React.CSSProperties = {
  fontSize: "14px",
  textAlign: "center",
  borderBottom: "1px solid #ddd",
  padding: "15px",
  backgroundColor: "transparent",
};

export default CSVDataTable;
