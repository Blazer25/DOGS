import React from "react";
import Feed from "../Feed/Feed/Feed";
import FeedFotos from "../Feed/Fotos/Fotos";
import Head from "../Helpers/Head/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head titulo="Fotos" descricacao="Home do site Dogs." />
      <Feed />
    </section>
  );
};

export default Home;
