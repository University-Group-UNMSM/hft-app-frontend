function Usuario() {
  return (
    <div className='flex flex-col gap-8 w-96 mx-auto'>
      <h2 className='text-4xl font-bold text-center'>Datos del Usuario</h2>
      <div className='flex flex-col gap-2 border-2 rounded-2xl p-7'>
        <label htmlFor='money'>Dinero disponible ($):</label>
        <input
          className='user__input bg-transparent'
          type='number'
          id='money'
          placeholder='Ingrese la cantidad de dinero disponible'
        />
      </div>
      <div className='flex flex-col gap-2  border-2 rounded-2xl p-7'>
        <label htmlFor='actions'>Acciones disponibles para comprar:</label>
        <input
          className='user__input bg-transparent'
          type='text'
          id='actions'
          placeholder='Ingrese la cantidad de acciones disponibles'
        />
      </div>
    </div>
  );
}

export default Usuario;
