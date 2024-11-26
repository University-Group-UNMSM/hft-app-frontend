function Registro() {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-4xl font-bold text-center'>
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
          <tbody id='registroOperaciones'>
            <tr>
              <td style={tableCellStyle}>12/12/2021</td>
              <td style={tableCellStyle}>Compra</td>
              <td style={tableCellStyle}>APPL</td>
              <td style={tableCellStyle}>10</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>12/12/2021</td>
              <td style={tableCellStyle}>Venta</td>
              <td style={tableCellStyle}>ETH</td>
              <td style={tableCellStyle}>5</td>
            </tr>
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
