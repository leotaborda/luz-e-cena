import styles from "../Footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const FooterRedes = () => {
  return (
    <div className={styles.redes}>
      <h4 className={styles.titulo}>Nossas Redes Sociais</h4>
      <div className={styles.icones}>
        <FaGithub className={styles.icone} href=""/>
        <FaInstagram className={styles.icone} href=""/>
        <FaLinkedin className={styles.icone}  href=""/>
      </div>
    </div>
  );
};

export default FooterRedes;
