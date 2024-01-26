import React from "react";
import Input from "../../Forms/Input/Input";
import Botao from "../../Forms/Botao/Botao";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { PERDEU_SENHA_POST } from "../../../api/auth";
import Error from "../../Helpers/Error/Error";
import Head from "../../Helpers/Head/Head";

const LoginPerdiSenha = () => {
  const login = useForm("");

  const { erro, dados, carregando, requisicao } = useFetch();

  async function recuperarSenha(event) {
    event.preventDefault();
    if (!login.validarDados()) return null;

    const { url, options } = PERDEU_SENHA_POST({
      login: login.valor,
      url: "http://localhost:5173/login/resetar",
    });
    await requisicao(url, options);
  }

  return (
    <section className="animacaoEsquerda">
      <Head titulo="Perdeu a senha" />
      <h1 className="titulo">Perdeu a senha?</h1>
      {dados ? (
        <p style={{ color: "green" }}>{dados}</p>
      ) : (
        <form>
          <Input
            label="E-mail ou usuário"
            type="text"
            name="emailOuUsuario"
            {...login}
          />

          {carregando ? (
            <Botao disabled>Enviando...</Botao>
          ) : (
            <Botao onClick={recuperarSenha}>Enviar e-mail</Botao>
          )}
          {erro && <Error mensagemErro={erro} />}
        </form>
      )}
    </section>
  );
};

export default LoginPerdiSenha;
