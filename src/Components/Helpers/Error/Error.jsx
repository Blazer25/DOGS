import React from "react";
import style from "./Error.module.css";

const Error = ({ mensagemErro }) => {
  if (!mensagemErro) return null;
  return <p className={style.error}>{mensagemErro}</p>;
};

export default Error;
