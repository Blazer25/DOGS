import React from "react";

const validacoesAceitas = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mensagemErro: "E-mail inválido!",
  },
  numeros: {
    regex: /^\d+$/,
    mensagemErro: "Apenas números são aceitos!",
  },
};

const useForm = (tipoFormulario, naoValidar = false) => {
  const [valor, setValor] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function validarDados(dados) {
    if (naoValidar) return true;

    if (!dados || !dados.length) {
      setErro("Preencha o campo!");
      return false;
    }

    if (
      validacoesAceitas[tipoFormulario] &&
      !validacoesAceitas[tipoFormulario].regex.test(dados)
    ) {
      setErro(validacoesAceitas[tipoFormulario].mensagemErro);
      return false;
    }

    setErro(null);
    return true;
  }

  function onChange({ target }) {
    // if (erro) validarDados(target.value);
    validarDados(target.value);

    setValor(target.value);
  }

  return {
    valor,
    setValor,
    onChange,
    onBlur: () => validarDados(valor),
    validarDados: () => validarDados(valor),
    erro,
  };
};

export default useForm;
