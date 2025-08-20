import Button from '../Button'
import FieldSet from '../FieldSet'
import InputText from '../InputText'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <section className={styles.newsletter}>
        <h2 className={styles.titulo}>Instreva-se para ganhar decontos e notícias!</h2>
        <form className={styles.form}>
            <FieldSet>
                <InputText placeholder='Digite o seu e-mail'/>
            </FieldSet>
            <Button variant="default" type='submit'>Inscreva-se</Button>
        </form>
    </section>
  )
}

export default NewsLetter
