import React from "react";
import useFetch from "../../../Hooks/useFetch";
import Head from "../../Helpers/Head/Head";
import { ESTATISTICAS_GET } from "../../../api/estatisticas";
import Carregando from "../../Helpers/Carregando/Carregando";
import Error from "../../Helpers/Error/Error";

const GraficosEstatisticas = React.lazy(() =>
  import("../GraficosEstatisticas/GraficosEstatisticas")
);

const Estatisticas = () => {
  const { dados, erro, carregando, requisicao } = useFetch();
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    async function trazerDados() {
      const { url, options } = ESTATISTICAS_GET({ token });

      await requisicao(url, options);
    }
    trazerDados();
  }, []);

  if (carregando) return <Carregando />;
  if (erro) return <Error mensagemErro={erro} />;
  if (!dados || !dados.length) {
    return (
      <div>
        <p>Não existem estatistícas para serem visualizadas!</p>
      </div>
    );
  }
  if (dados) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head titulo="Estatistícas" />
        <GraficosEstatisticas dados={dados} />
      </React.Suspense>
    );
  }
  return null;
};

export default Estatisticas;
