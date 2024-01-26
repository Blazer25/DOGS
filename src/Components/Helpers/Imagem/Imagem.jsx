import React from "react";
import style from "./Imagem.module.css";

const Imagem = (props) => {
  const [esqueleto, setEsqueleto] = React.useState(true);
  function carregarImagem({ target }) {
    setEsqueleto(false);
    target.style.opacity = 1;
  }

  return (
    <div className={style.imagem}>
      {esqueleto && <div className={style.esqueleto}></div>}
      <img
        className={style.img}
        onLoad={carregarImagem}
        alt={props.alt}
        {...props}
      />
    </div>
  );
};

export default Imagem;
