import React from "react";
import style from "./Footer.module.css";
import Logo from "../../Assets/dogs.svg?react";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Logo />
      <p>Dogs. Direitos Reservados!</p>
    </footer>
  );
};

export default Footer;
