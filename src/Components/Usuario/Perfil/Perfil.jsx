import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../Feed/Feed/Feed";
import Head from "../../Helpers/Head/Head";

const Perfil = () => {
  const { usuario } = useParams();

  return (
    <section className="container mainContainer">
      <Head titulo={usuario} />
      <h1 className="titulo">{usuario}</h1>
      <Feed usuario={usuario}></Feed>
    </section>
  );
};

export default Perfil;
