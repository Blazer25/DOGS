import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import LoginCriar from "../LoginCriar/LoginCriar";
import LoginPerdiSenha from "../LoginPerdiSenha/LoginPerdiSenha";
import LoginResetarSenha from "../LoginResetarSenha/LoginResetarSenha";
import { ContextoUsuario } from "../../../Contexts/Usuario";
import style from "./Login.module.css";
import PaginaNaoEncontrada from "../../PaginaNaoEncontrada/PaginaNaoEncontrada";

const Login = () => {
  const { logado } = React.useContext(ContextoUsuario);
  if (logado) return <Navigate to="/conta" />;

  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCriar />} />
          <Route path="esqueci-senha" element={<LoginPerdiSenha />} />
          <Route path="resetar" element={<LoginResetarSenha />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
