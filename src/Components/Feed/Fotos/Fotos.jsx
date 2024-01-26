import React from "react";
import useFetch from "../../../Hooks/useFetch";
import style from "./Fotos.module.css";
import FeedFotosItem from "./Item/Item";
import { FOTOS_GET } from "../../../api/fotos";
import Error from "../../Helpers/Error/Error";
import Carregando from "../../Helpers/Carregando/Carregando";

const Fotos = ({ setFotoModal, setInfinito, pagina, usuario }) => {
  const { dados, erro, carregando, requisicao } = useFetch();

  React.useEffect(() => {
    async function carregarFotos() {
      const total = 6;
      const { url, options } = FOTOS_GET({
        total,
        pagina: pagina,
        usuario: usuario,
      });
      const { resposta, json } = await requisicao(url, options);

      if (resposta && resposta.ok && json.length < total) {
        setInfinito(false);
        return;
      }
    }
    carregarFotos();
  }, [usuario]);

  if (erro) return <Error mensagemErro={erro} />;
  if (carregando) return <Carregando />;
  if (dados) {
    return (
      <ul className={`${style.feed} animacaoEsquerda`}>
        {dados.map((foto) => (
          <FeedFotosItem
            key={foto.id}
            foto={foto}
            setFotoModal={setFotoModal}
          />
        ))}
      </ul>
    );
  }
  return null;
};

export default Fotos;
