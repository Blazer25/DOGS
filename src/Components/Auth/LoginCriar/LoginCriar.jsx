import React from "react";
import Input from "../../Forms/Input/Input";
import Botao from "../../Forms/Botao/Botao";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { USUARIO_POST } from "../../../api/auth";
import { ContextoUsuario } from "../../../Contexts/Usuario";
import Error from "../../Helpers/Error/Error";
import Head from "../../Helpers/Head/Head";

const LoginCriar = () => {
  const nomeUsuario = useForm();
  const email = useForm("email");
  const senha = useForm();

  const { logarUsuario } = React.useContext(ContextoUsuario);

  const { erro, carregando, requisicao } = useFetch();

  async function enviarFormulario(event) {
    event.preventDefault();

    const { url, options } = USUARIO_POST({
      username: nomeUsuario.valor,
      email: email.valor,
      password: senha.valor,
    });

    const { resposta } = await requisicao(url, options);

    if (resposta.ok) {
      logarUsuario(nomeUsuario.valor, senha.valor);
    }
  }

  return (
    <section className="animacaoEsquerda">
      <Head titulo="Cadastre-se" />
      <h1 className="titulo">Cadastre-se</h1>

      <form onSubmit={enviarFormulario}>
        <Input
          label="Usuário"
          type="text"
          name="usuario"
          placeholder="Digite seu usuário"
          {...nomeUsuario}
        />
        <Input
          label="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          {...email}
        />
        <Input
          label="Senha"
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          {...senha}
        />
        <Botao disabled={carregando}>
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </Botao>
        <Error mensagemErro={erro} />
      </form>
    </section>
  );
};

export default LoginCriar;
