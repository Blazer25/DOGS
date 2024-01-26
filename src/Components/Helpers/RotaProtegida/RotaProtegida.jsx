import React from "react";
import { ContextoUsuario } from "../../../Contexts/Usuario";
import { Navigate } from "react-router-dom";

const RotaProtegida = ({ children }) => {
  const { logado } = React.useContext(ContextoUsuario);

  if (logado) {
    return children;
  }

  if (logado === false) {
    return <Navigate to="/login" />;
  }

  return null;
};

export default RotaProtegida;
