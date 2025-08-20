import React from "react";
import FooterLogo from "./components/FooterLogo";
import FooterFuncionamento from "./components/FooterFuncionamento";
import styles from './Footer.module.css'
import FooterInstucional from "./components/FooterInstucional";
import FooterRedes from "./components/FooterSiganos";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo/>
        <FooterFuncionamento/>
        <FooterInstucional/>
        <FooterRedes />
      </div>
    </footer>
  );
};

export default Footer;
