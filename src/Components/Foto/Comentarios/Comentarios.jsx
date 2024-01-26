import React from "react";
import style from "./Comentarios.module.css";
import { ContextoUsuario } from "../../../Contexts/Usuario";
import EnviarComentario from "../EnviarComentario/EnviarComentario";

const Comentarios = (props) => {
  const [comentarios, setComentarios] = React.useState(() => props.comentarios);
  const secaoComentarios = React.useRef(null);

  const { logado } = React.useContext(ContextoUsuario);

  React.useEffect(() => {
    secaoComentarios.current.scrollTop = secaoComentarios.current.scrollHeight;
  }, [comentarios]);

  return (
    <>
      <ul ref={secaoComentarios} className={style.comentarios}>
        {comentarios.map((comentario) => {
          return (
            <li key={comentario.comment_ID}>
              <b>{comentario.comment_author}:</b>
              <span>{comentario.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {logado && (
        <EnviarComentario id={props.id} setComentarios={setComentarios} />
      )}
    </>
  );
};

export default Comentarios;
