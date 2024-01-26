import React from "react";
import Input from "../../Forms/Input/Input";
import Botao from "../../Forms/Botao/Botao";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { RESETAR_SENHA_POST } from "../../../api/auth";
import Error from "../../Helpers/Error/Error";
import { useNavigate } from "react-router-dom";
import Head from "../../Helpers/Head/Head";

const LoginResetarSenha = () => {
  const [login, setLogin] = React.useState("");
  const [chave, setChave] = React.useState("");
  const senha = useForm("senha");

  const { erro, carregando, requisicao } = useFetch();
  const navegacao = useNavigate();

  React.useEffect(() => {
    const parametros = new URLSearchParams(window.location.search);
    const login = parametros.get("login");
    const chave = parametros.get("key");

    if (login) setLogin(login);
    if (chave) setChave(chave);
  }, []);

  async function resetarSenha(event) {
    event.preventDefault();
    if (!senha.validarDados()) return null;

    const { url, options } = RESETAR_SENHA_POST({
      login,
      key: chave,
      password: senha.valor,
    });
    const { resposta } = await requisicao(url, options);

    if (resposta.ok) {
      navegacao("/login");
    }
  }

  return (
    <section className="animacaoEsquerda">
      <Head titulo="Resetar senha" />
      <h1 className="titulo">Resetar Senha</h1>
      <form onSubmit={resetarSenha}>
        <Input label="Nova senha:" type="password" name="senha" {...senha} />

        {carregando ? (
          <Botao disabled>Resetando...</Botao>
        ) : (
          <Botao onClick={resetarSenha}>Resetar</Botao>
        )}
        {erro && <Error mensagemErro={erro} />}
      </form>
    </section>
  );
};

export default LoginResetarSenha;
