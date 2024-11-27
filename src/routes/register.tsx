import { Link } from "react-router-dom"; // Para manejar la navegación
import "../index.css"; // Aquí irán los estilos proporcionados y adicionales

const Register = () => {
  return (
    <div className='registro__container'>
      <form className='registro__form'>
        <h1 className='registro__title'>Registro</h1>
        <div className='registro__field'>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Ingrese su nombre completo'
            className='user__input'
            required
          />
        </div>
        <div className='registro__field'>
          <label htmlFor='email'>Correo</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Ingrese su correo'
            className='user__input'
            required
          />
        </div>
        <div className='registro__field'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Ingrese su contraseña'
            className='user__input'
            required
          />
        </div>
        <div className='registro__field'>
          <label htmlFor='confirm-password'>Confirmar Contraseña</label>
          <input
            type='password'
            id='confirm-password'
            name='confirm-password'
            placeholder='Confirme su contraseña'
            className='user__input'
            required
          />
        </div>
        <button type='submit' className='analisis__upload-button'>
          Registrarse
        </button>
        <div className='registro__login'>
          ¿Ya tienes una cuenta?{" "}
          <Link to='/login' className='registro__link'>
            Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
