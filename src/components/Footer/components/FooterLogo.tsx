import React from 'react'
import Logo from '../../Logo'
import styles from '../Footer.module.css'

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src='/icons/Logo.svg' alt='Logo' />
        <p>Onde a Realidade encontra a Fantasia</p>
    </div>
  )
}

export default FooterLogo
