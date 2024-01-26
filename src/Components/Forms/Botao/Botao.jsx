import React from "react";
import style from "./Botao.module.css";

const Botao = ({ children, ...props }) => {
  return <button {...props} className={style.botao}>{children}</button>;
};

export default Botao;
