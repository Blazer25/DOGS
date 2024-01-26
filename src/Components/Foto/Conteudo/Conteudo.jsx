import React from "react";
import style from "./Conteudo.module.css";
import { Link } from "react-router-dom";
import ComentariosFoto from "../Comentarios/Comentarios";
import { ContextoUsuario } from "../../../Contexts/Usuario";
import DeletarFoto from "../Deletar/Deletar";
import Imagem from "../../Helpers/Imagem/Imagem";

const Conteudo = ({ dado, singular }) => {
  const { photo, comments } = dado;
  const usuario = React.useContext(ContextoUsuario);

  return (
    <div className={`${style.foto} ${singular ? style.singular : ""}`}>
      <div className={style.img}>
        <Imagem alt={photo.title} src={photo.src}></Imagem>
      </div>
      <div className={style.detalhes}>
        <div>
          <p className={style.autor}>
            {usuario.dados && usuario.dados.username === photo.author ? (
              <DeletarFoto id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="titulo">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.atributos}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade === 1 ? "ano" : "anos"}</li>
          </ul>
        </div>
      </div>
      <ComentariosFoto id={photo.id} comentarios={comments} />
    </div>
  );
};

export default Conteudo;
