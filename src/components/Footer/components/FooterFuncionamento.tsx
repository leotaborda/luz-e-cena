import React from "react";
import styles from '../Footer.module.css'

const FooterFuncionamento = () => {
  return (
    <div className={styles.funcionamento}>
      <h4 className={styles.titulo}>Funcionamento</h4>
      <span>Segunda-Feira a Sexta-Feira - 16h às 00h</span>
      <span>suporte@luzecena.com.br</span>
      <span>0800 541 320</span>
    </div>
  );
};

export default FooterFuncionamento;
