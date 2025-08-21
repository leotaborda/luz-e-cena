import styles from "../Footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FooterRedes = () => {
  return (
    <div className={styles.redes}>
      <h4 className={styles.titulo}>Nossas Redes Sociais</h4>
      <div className={styles.icones}>
        <FaGithub className={styles.icone} href="https://github.com/leotaborda/"/>
        <FaInstagram className={styles.icone} href="https://www.instagram.com/_.taborda/"/>
        <FaLinkedin className={styles.icone}  href="https://www.linkedin.com/in/leotaborda/"/>
      </div>
    </div>
  );
};

export default FooterRedes;
