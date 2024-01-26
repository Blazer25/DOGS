import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ContextoUsuario } from "../../../Contexts/Usuario";
import style from "./Navegacao.module.css";

import AdicionarFoto from "../../../Assets/adicionar.svg?react";
import MinhasFotos from "../../../Assets/feed.svg?react";
import Estatisticas from "../../../Assets/estatisticas.svg?react";
import Sair from "../../../Assets/sair.svg?react";
import useMedia from "../../../Hooks/useMedia";

const Navegacao = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const { deslogarUsuario } = React.useContext(ContextoUsuario);

  const localizacao = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [localizacao.pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${style.botaoMobile} ${
            mobileMenu && style.botaoMobileAtivo
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileAtivo
        }`}
      >
        <NavLink to="/conta" end>
          {" "}
          <MinhasFotos /> {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          {" "}
          <Estatisticas /> {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          {" "}
          <AdicionarFoto />
          {mobile && "Adicionar Fotos"}
        </NavLink>
        <button onClick={deslogarUsuario}>
          {" "}
          <Sair /> {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default Navegacao;
