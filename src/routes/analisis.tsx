import { ChangeEvent, useState } from "react";

import CSVDataTable from "../components/CSVDataTable";
interface CSVRow {
  [key: string]: string;
}
function Analisis() {
  const [fileName, setFileName] = useState("Ningún archivo seleccionado");

  const [csvData, setCsvData] = useState<CSVRow[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "Ningún archivo seleccionado");
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const csvText = e.target?.result as string;
        parseCSV(csvText);
      };

      reader.readAsText(file);
    }
  };

  const parseCSV = (csvText: string) => {
    const lines = csvText.split("\n");
    const headers = lines[0].split(",");
    const parsedData: CSVRow[] = [];

    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(",");

      if (currentLine.length === headers.length) {
        const row: CSVRow = {};
        for (let j = 0; j < headers.length; j++) {
          row[headers[j].trim()] = currentLine[j].trim();
        }
        parsedData.push(row);
      }
    }

    setCsvData(parsedData);
  };
  return (
    <>
      <div className='flex flex-col gap-8 mx-auto'>
        <h2 className='text-4xl font-bold text-center'>
          Subir Documento Financiero
        </h2>
        <div className='analisis__custom-file-upload mx-auto'>
          <label
            htmlFor='analisis__file-upload'
            className='analisis__upload-button'
          >
            Subir archivo
          </label>
          <span id='analisis__file-chosen'>{fileName}</span>
          <input
            id='analisis__file-upload'
            type='file'
            hidden
            accept='.csv'
            onChange={handleFileChange}
          />
        </div>
        <CSVDataTable data={csvData} />
      </div>
    </>
  );
}

export default Analisis;
