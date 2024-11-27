import { useState } from "react";
import { AxiosHftHttpApi } from "../services/clients/AxiosHftHttpApi";

const hftHttpClient = new AxiosHftHttpApi(import.meta.env.VITE_API_URL);

function Usuario() {
  const [initialBalance, setInitialBalance] = useState<number>(0);
  const [selectedSymbol, setSelectedSymbol] = useState<string>("APPL");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

  const createInitialBalance = async () => {
    // Llama a la función de AxiosHftHttpApi
    await hftHttpClient.createInitialBalance(initialBalance);
  };

  const addHolding = async () => {
    // Llama a la función de AxiosHftHttpApi
    await hftHttpClient.addHolding(selectedSymbol, selectedQuantity);
  };

  return (
    <div className="flex flex-col gap-8 w-96 mx-auto">
      <h2 className="text-4xl font-bold text-center">Datos del Usuario</h2>
      <div className="flex flex-col gap-2 border-2 rounded-2xl p-7">
        <label htmlFor="money">Dinero disponible ($):</label>
        <input
          onChange={(e) => setInitialBalance(Number(e.target.value))}
          onKeyUp={createInitialBalance}
          className="user__input bg-transparent"
          type="number"
          id="money"
          placeholder="Ingrese la cantidad de dinero disponible"
        />
      </div>
      <div className="flex flex-col gap-2  border-2 rounded-2xl p-7">
        <label htmlFor="actions">Acciones disponibles para comprar:</label>
        <select
          className="activo__select"
          id="activo"
          onChange={(e) => {
            setSelectedSymbol(e.target.value);
          }}
        >
          <option value="APPL">APPL</option>
          <option value="ETH">ETH</option>
          <option value="BTC">BTC</option>
        </select>
        <input
          onChange={(e) => setSelectedQuantity(Number(e.target.value))}
          onKeyUp={addHolding}
          className="user__input bg-transparent"
          type="text"
          id="actions"
          placeholder="Ingrese la cantidad de acciones disponibles"
        />
      </div>
    </div>
  );
}

export default Usuario;
