import React from "react";
import { TOKEN_POST, USUARIO_GET, VALIDAR_TOKEN_POST } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const ContextoUsuario = React.createContext();

export const UsuarioStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  const [logado, setLogado] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  const navegarPara = useNavigate();

  React.useEffect(() => {
    async function loginAutomatico() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setErro(null);
          setCarregando(true);

          const { url, options } = VALIDAR_TOKEN_POST(token);
          const resposta = await fetch(url, options);

          if (!resposta.ok) {
            throw new Error("Token inválido!");
          }

          pegarUsuario(token);
        } catch (error) {
          deslogarUsuario();
        } finally {
          setCarregando(false);
        }
      } else {
        setLogado(false);
      }
    }
    loginAutomatico();
  }, []);

  async function logarUsuario(nomeUsuario, senha) {
    try {
      setErro(null);
      setCarregando(true);

      const { url, options } = TOKEN_POST({
        username: nomeUsuario,
        password: senha,
      });

      const resposta = await fetch(url, options);

      if (!resposta.ok) {
        throw new Error("Usuário ou senha inválidos!");
      }

      const { token } = await resposta.json();
      setarLocalStorage("token", token);
      await pegarUsuario(token);
      navegarPara("/conta");
    } catch (error) {
      setErro(error.message);
      setLogado(false);
    } finally {
      setCarregando(false);
    }
  }

  async function deslogarUsuario() {
    removerLocalStorage("token");
    setDados(null);
    setLogado(false);
    setCarregando(false);
    navegarPara("/login");
  }

  async function pegarUsuario(token) {
    const { url, options } = USUARIO_GET(token);
    const resposta = await fetch(url, options);
    const json = await resposta.json();

    setDados(json);
    setLogado(true);
  }

  function setarLocalStorage(chave, valor) {
    window.localStorage.setItem(chave, valor);
  }

  function removerLocalStorage(chave) {
    window.localStorage.removeItem(chave);
  }

  return (
    <ContextoUsuario.Provider
      value={{ logarUsuario, deslogarUsuario, dados, erro, carregando, logado }}
    >
      {children}
    </ContextoUsuario.Provider>
  );
};
