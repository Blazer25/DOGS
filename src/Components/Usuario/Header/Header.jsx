import React from "react";
import Navegacao from "./Navegacao";
import style from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [titulo, setTitulo] = React.useState("");
  const localizacao = useLocation();

  React.useEffect(() => {
    setTitulo("Minha Conta");

    if (localizacao.pathname.includes("estatisticas")) {
      setTitulo("Estatísticas");
    }
    if (localizacao.pathname.includes("postar")) {
      setTitulo("Poste sua Foto");
    }
  }, [localizacao]);

  return (
    <header className={style.header}>
      <h1 className="titulo">{titulo}</h1>
      <Navegacao />
    </header>
  );
};

export default Header;
