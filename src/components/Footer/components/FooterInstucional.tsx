import React from 'react'
import Link from '../../Link'
import styles from '../Footer.module.css'

const FooterInstucional = () => {
  return (
    <div className={styles.institucional}>
      <h4 className={styles.titulo}>Institucional</h4>
      <span>Sobre Nós</span>
      <span>Para Empresas</span>
      <span>Club Fidelidade</span>
    </div>
  )
}

export default FooterInstucional
