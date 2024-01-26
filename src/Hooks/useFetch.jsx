import React from "react";

const useFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  const requisicao = React.useCallback(async (url, options) => {
    let resposta, json;

    try {
      setErro(null);
      setCarregando(true);

      resposta = await fetch(url, options);
      json = await resposta.json();
      if (!resposta.ok) {
        throw new Error(json.message);
      }

      setDados(json);
    } catch (erro) {
      json = null;
      setErro(erro.message);
    } finally {
      setDados(json);
      setCarregando(false);

      return { resposta, json };
    }
  });

  return {
    dados,
    erro,
    carregando,
    requisicao,
  };
};

export default useFetch;
