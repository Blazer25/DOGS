import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login/Login";
import Usuario from "./Components/Usuario/Usuario/Usuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioStorage } from "./Contexts/Usuario";
import RotaProtegida from "./Components/Helpers/RotaProtegida/RotaProtegida";
import Foto from "./Components/Foto/Foto/Foto";
import Perfil from "./Components/Usuario/Perfil/Perfil";
import PaginaNaoEncontrada from "./Components/PaginaNaoEncontrada/PaginaNaoEncontrada";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <UsuarioStorage>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="/conta/*"
                element={
                  <RotaProtegida>
                    <Usuario />
                  </RotaProtegida>
                }
              />
              <Route path="/foto/:id" element={<Foto />} />
              <Route path="/perfil/:usuario" element={<Perfil />} />
              <Route path="*" element={<PaginaNaoEncontrada />} />
            </Routes>
          </main>

          <Footer />
        </UsuarioStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
