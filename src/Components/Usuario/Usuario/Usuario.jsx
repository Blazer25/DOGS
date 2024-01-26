import React from "react";
import HeaderUsuario from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import Feed from "../../Feed/Feed/Feed";
import PostarFoto from "../PostarFoto/PostarFoto";
import Estatisticas from "../Estatisticas/Estatisticas";
import { ContextoUsuario } from "../../../Contexts/Usuario";
import PaginaNaoEncontrada from "../../PaginaNaoEncontrada/PaginaNaoEncontrada";

const Usuario = () => {
  const { dados } = React.useContext(ContextoUsuario);
  return (
    <section className="container">
      <HeaderUsuario />
      <Routes>
        <Route path="/" element={<Feed usuario={dados.id} />} />
        <Route path="postar" element={<PostarFoto />} />
        <Route path="estatisticas" element={<Estatisticas />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </section>
  );
};

export default Usuario;
