function Activo() {
  return (
    <div className='flex flex-col gap-8 w-96 mx-auto'>
      <h2 className='text-4xl font-bold text-center'>Seleccionar Activo</h2>
      <select className='activo__select' id='activo'>
        <option value='APPL'>APPL</option>
        <option value='ETH'>ETH</option>
        <option value='BTC'>BTC</option>
      </select>
    </div>
  );
}

export default Activo;
