import React from "react";
import style from "./EnviarComentario.module.css";
import Textarea from "../../Forms/Textarea/Textarea";
import Enviar from "../../../Assets/enviar.svg?react";
import useFetch from "../../../Hooks/useFetch";
import { COMENTARIO_POST } from "../../../api/comentarios";
import Error from "../../Helpers/Error/Error";

const EnviarComentario = ({ id, setComentarios }) => {
  const [comentario, setComentario] = React.useState("");
  const { requisicao, erro } = useFetch();

  const token = window.localStorage.getItem("token");

  async function enviarComentario(event) {
    event.preventDefault();

    const { url, options } = COMENTARIO_POST(id, comentario, token);
    const { resposta, json } = await requisicao(url, options);

    if (resposta.ok) {
      setComentario("");
      setComentarios((comentarios) => [...comentarios, json]);
    }
  }

  return (
    <form className={style.form} onSubmit={enviarComentario}>
      <Textarea
        id="comentario"
        name="comentario"
        onChange={({ target }) => setComentario(target.value)}
        placeholder="Escreva aqui seu comentário:"
        value={comentario}
      />
      <button className={style.botao}>
        <Enviar />
      </button>
      <Error mensagemErro={erro} />
    </form>
  );
};

export default EnviarComentario;
