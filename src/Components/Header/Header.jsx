import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/dogs.svg?react";
import { ContextoUsuario } from "../../Contexts/Usuario";

const Header = () => {
  const { dados } = React.useContext(ContextoUsuario);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} aria-label="Logo - Site" to="/">
          <Logo />
        </Link>

        {dados ? (
          <Link className={style.login} to="/conta">
            {dados.nome}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Cadastrar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
