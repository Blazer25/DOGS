import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input/Input";
import Botao from "../../Forms/Botao/Botao";
import useForm from "../../../Hooks/useForm";
import { ContextoUsuario } from "../../../Contexts/Usuario";
import Error from "../../Helpers/Error/Error";
import style from "./LoginForm.module.css";
import Head from "../../Helpers/Head/Head";

const LoginForm = () => {
  const nomeUsuario = useForm();
  const senha = useForm();

  const { logarUsuario, erro, carregando } = React.useContext(ContextoUsuario);

  async function enviarFormulario(event) {
    event.preventDefault();
    if (!nomeUsuario.validarDados() || !senha.validarDados()) return;

    logarUsuario(nomeUsuario.valor, senha.valor);
  }

  return (
    <section className="animacaoEsquerda">
      <Head titulo="Login" />
      <h1 className="titulo">Login</h1>
      <form onSubmit={enviarFormulario} className="form">
        <Input
          label="Usuário"
          placeholder="Nome do usuário"
          type="text"
          name="usuario"
          {...nomeUsuario}
        />
        <Input
          label="Senha"
          placeholder="Senha do usuário"
          type="password"
          name="senha"
          {...senha}
        />

        <Botao disabled={carregando}>
          {carregando ? "Carregando" : "Entrar"}
        </Botao>

        <Error mensagemErro={erro} />
      </form>

      <div>
        <Link to="/login/esqueci-senha" className={style.esqueciSenha}>
          Esqueceu a senha?
        </Link>
      </div>
      <div className={style.cadastro}>
        <h2 className={style.subtitulo}>Cadastra-se</h2>
        <p>Ainda não possui conta? Cadastra-se</p>{" "}
        <Link to="/login/criar">
          <Botao>Cadastro</Botao>
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
