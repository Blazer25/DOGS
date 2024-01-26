import React from "react";
import style from "./PostarFoto.module.css";
import Input from "../../Forms/Input/Input";
import Botao from "../../Forms/Botao/Botao";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { FOTO_POST } from "../../../api/fotos";
import Error from "../../Helpers/Error/Error";
import { useNavigate } from "react-router-dom";

const PostarFoto = () => {
  const nome = useForm();
  const peso = useForm("numeros");
  const idade = useForm("numeros");
  const [img, setImg] = React.useState({});
  const { dados, erro, carregando, requisicao } = useFetch();
  const navegacao = useNavigate();

  React.useEffect(() => {
    if (dados) navegacao("/conta");
  }, [dados, navegacao]);

  function enviarFoto(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.valor);
    formData.append("peso", peso.valor);
    formData.append("idade", idade.valor);

    const token = window.localStorage.getItem("token");
    const { url, options } = FOTO_POST(formData, token);
    requisicao(url, options);
  }

  function carregarArquivoImagem(event) {
    setImg({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  }

  return (
    <section className={`${style.postarFoto} animacaoEsquerda`}>
      <form onSubmit={enviarFoto}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={style.file}
          type="file"
          id="img"
          name="img"
          onChange={carregarArquivoImagem}
        />
        <Botao disabled={carregando}>
          {carregando ? "Enviando..." : "Postar"}
        </Botao>
        <Error mensagemErro={erro} />
      </form>
      {img.preview && (
        <div>
          <div
            className={style.imagemPreview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        </div>
      )}
    </section>
  );
};

export default PostarFoto;
