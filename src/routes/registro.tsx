import { useEffect, useState } from "react";
import { AxiosHftHttpApi } from "../services/clients/AxiosHftHttpApi";
import { Operation } from "../services/types/Operation";

const hftHttpClient = new AxiosHftHttpApi(import.meta.env.VITE_API_URL);

function Registro() {
  const [operations, setOperations] = useState<Operation[]>([]);

  useEffect(() => {
    hftHttpClient
      .getOperationsHistory("f1c20422-47b5-4207-9c9c-479a0286e6d6")
      .then((data) => {
        setOperations(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-4xl font-bold text-center">
        Registro de Operaciones
      </h2>
      <div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Fecha</th>
              <th style={tableHeaderStyle}>Operación</th>
              <th style={tableHeaderStyle}>Activo</th>
              <th style={tableHeaderStyle}>Cantidad</th>
            </tr>
          </thead>
          <tbody id="registroOperaciones">
            {Boolean(operations.length) &&
              operations.map((operation) => (
                <tr key={operation.timestamp}>
                  <td style={tableCellStyle}>
                    {new Date(operation.timestamp).toLocaleString()}
                  </td>
                  <td style={tableCellStyle}>
                    {operation.action === "buy" ? "COMPRA" : "VENTA"}
                  </td>
                  <td style={tableCellStyle}>{operation.activeSymbol}</td>
                  <td style={tableCellStyle}>{operation.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
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
  backgroundColor: "#4708c6",
  borderBottom: "1px solid #ddd",
  padding: "15px",
  textAlign: "center",
};

const tableCellStyle: React.CSSProperties = {
  fontSize: "14px",

  borderBottom: "1px solid #ddd",
  padding: "15px",
  backgroundColor: "transparent",
  textAlign: "center",
};

export default Registro;
