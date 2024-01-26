import React from "react";
import style from "./Deletar.module.css";
import { FOTO_DELETE } from "../../../api/fotos";
import useFetch from "../../../Hooks/useFetch";

const Deletar = ({ id }) => {
  const { carregando, requisicao } = useFetch();
  const token = window.localStorage.getItem("token");

  async function deletarFoto() {
    if (confirmarDeletarFoto()) {
      const { url, options } = FOTO_DELETE(id, token);
      const { resposta } = await requisicao(url, options);

      if (resposta.ok) {
        window.location.reload();
      }
    }
  }

  function confirmarDeletarFoto() {
    return window.confirm("Tem certeza que deseja deletar a foto?");
  }

  return (
    <>
      {carregando ? (
        <button className={style.deletar} disabled>
          Deletar
        </button>
      ) : (
        <button className={style.deletar} onClick={deletarFoto}>
          Deletar
        </button>
      )}
    </>
  );
};

export default Deletar;
