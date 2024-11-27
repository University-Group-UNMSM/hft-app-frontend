import { Link } from "react-router-dom"; // Para manejar la navegación
import "../index.css"; // Aquí irán los estilos proporcionados y adicionales
import { useState } from "react";
import { AxiosHftHttpApi } from "../services/clients/AxiosHftHttpApi";

const hftHttpClient = new AxiosHftHttpApi(import.meta.env.VITE_API_URL);

const Register = () => {
  // logic to press submit button and send data to the server to register a new user
  // using useState hook and useEffect hook
  // the form will have fields for name, email, password, and confirm password

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // function to handle the submit of the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // call the register function from the API
      hftHttpClient.register(name, email, password).then(() => {
        window.location.href = "/login";
      });
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="registro__container">
      <form className="registro__form" onSubmit={handleSubmit}>
        <h1 className="registro__title">Registro</h1>
        <div className="registro__field">
          <label htmlFor="name">Nombre</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="Ingrese su nombre completo"
            className="user__input"
            required
          />
        </div>
        <div className="registro__field">
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
        <div className="registro__field">
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
        <div className="registro__field">
          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirme su contraseña"
            className="user__input"
            required
          />
        </div>
        <button type="submit" className="analisis__upload-button">
          Registrarse
        </button>
        <div className="registro__login">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="registro__link">
            Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
