import React from "react";
import style from "./Item.module.css";
import Imagem from "../../../Helpers/Imagem/Imagem";

const Item = ({ foto, setFotoModal }) => {
  function clicouFoto() {
    setFotoModal(foto);
  }

  return (
    <li className={style.foto} onClick={clicouFoto}>
      <Imagem alt={foto.title} src={foto.src}></Imagem>
      <span className={style.visualizacoes}>{foto.acessos}</span>
    </li>
  );
};

export default Item;
