import { Link } from "react-router-dom"; // Para manejar la navegación
import "../index.css"; // Aquí irán los estilos proporcionados y adicionales
import { useState } from "react";
import { AxiosHftHttpApi } from "../services/clients/AxiosHftHttpApi";

const hftHttpClient = new AxiosHftHttpApi(import.meta.env.VITE_API_URL);

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // function to handle the submit of the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // call the register function from the API
    hftHttpClient.login(email, password).then((response) => {
      localStorage.setItem("token", response);

      window.location.href = "/usuario";
    });
  };

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Iniciar Sesión</h1>
        <div className="login__field">
          <label htmlFor="email">Correo</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            className="user__input"
            required
          />
        </div>
        <div className="login__field">
          <label htmlFor="password">Contraseña</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            className="user__input"
            required
          />
        </div>
        <button type="submit" className="analisis__upload-button">
          Iniciar Sesión
        </button>
        <div className="login__register">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="login__link">
            Regístrate aquí
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
