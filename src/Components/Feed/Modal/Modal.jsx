import React from "react";
import style from "./Modal.module.css";
import useFetch from "../../../Hooks/useFetch";
import { FOTO_GET } from "../../../api/fotos";
import Error from "../../Helpers/Error/Error";
import Carregando from "../../Helpers/Carregando/Carregando";
import ConteudoFoto from "../../Foto/Conteudo/Conteudo";

const Modal = ({ foto, setFotoModal }) => {
  const { dados, erro, carregando, requisicao } = useFetch();

  React.useEffect(() => {
    const { url, options } = FOTO_GET(foto.id);
    requisicao(url, options);
  }, [foto]);

  function fecharModalFora(event) {
    if (event.target === event.currentTarget) {
      setFotoModal(null);
    }
  }

  return (
    <div className={style.modal} onClick={fecharModalFora}>
      {erro && <Error mensagemErro={erro} />}
      {carregando && <Carregando />}

      {dados && <ConteudoFoto dado={dados} />}
    </div>
  );
};

export default Modal;
