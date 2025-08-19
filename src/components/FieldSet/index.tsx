import React from 'react'
import styles from './FieldSet.module.css'

type FielSetProps = {
    variant?: "primary" | "secundary"
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const FieldSet = ({ children, variant = "primary" }: FielSetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper} ${
        variant === "primary" ? styles.primary : styles.secundary
    }`}>
        {children}
    </fieldset>
  )
}

export default FieldSet
