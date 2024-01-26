import React from "react";
import style from "./Foto.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import Carregando from "../../Helpers/Carregando/Carregando";
import ConteudoFoto from "../Conteudo/Conteudo";
import { FOTO_GET } from "../../../api/fotos";
import Head from "../../Helpers/Head/Head";

const Foto = () => {
  const { id } = useParams();
  const { dados, carregando, erro, requisicao } = useFetch();

  React.useEffect(() => {
    async function carregarFoto() {
      const { url, options } = FOTO_GET(id);
      await requisicao(url, options);
    }
    carregarFoto();
  }, []);

  if (erro) return <Error mensagemErro={erro} />;
  if (carregando) return <Carregando />;

  if (dados) {
    return (
      <section className="container mainContainer">
        <Head titulo={dados.photo.title} />
        <ConteudoFoto dado={dados} singular={true} />
      </section>
    );
  }
  return null;
};

export default Foto;
