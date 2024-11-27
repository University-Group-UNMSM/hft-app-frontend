import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Usuario from "./routes/usuario";
import Activo from "./routes/activo";
import Analisis from "./routes/analisis";
import Registro from "./routes/registro";
import Login from "./routes/login";
import Register from "./routes/register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Esta opción hace que sea la ruta predeterminada
        element: <Navigate to='/usuario' replace />,
      },
      {
        path: "/usuario",
        element: <Usuario />,
      },
      {
        path: "/activo",
        element: <Activo></Activo>,
      },
      {
        path: "/analisis",
        element: <Analisis />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />, // Ruta independiente para login
  },
  {
    path: "/register",
    element: <Register />, // Asegúrate de tener este componente
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
