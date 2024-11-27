import { Link } from "react-router-dom"; // Para manejar la navegación
import "../index.css"; // Aquí irán los estilos proporcionados y adicionales

const Login = () => {
  return (
    <div className='login__container'>
      <form className='login__form'>
        <h1 className='login__title'>Iniciar Sesión</h1>
        <div className='login__field'>
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
        <div className='login__field'>
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
        <button type='submit' className='analisis__upload-button'>
          Iniciar Sesión
        </button>
        <div className='login__register'>
          ¿No tienes una cuenta?{" "}
          <Link to='/register' className='login__link'>
            Regístrate aquí
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
