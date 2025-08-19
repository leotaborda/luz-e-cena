import React from 'react'
import styles from './CardMovie.module.css'
import Tag from '../Tag'

type Categoria = "2D" | "3D";
type Censura = "Livre" | "10 Anos" | "12 Anos" | "14 Anos" | "16 Anos";

interface CardMovieProps {
    src: string;
    alt: string;
    titulo: string;
    genero: string;
    duracao: number;
    categoria: Categoria;
    censura: Censura;
}

const CardMovie = (props: CardMovieProps) => {
    const { src, alt, titulo, genero, categoria, duracao, censura } = props;
  return (
    <li className={styles.card}>
        <img src={src} alt={alt} />
        <div className={styles.container}>
            <h3>{titulo}</h3>
            <div className={styles.informacoes}>
                <div className={styles.linha1}>
                    <p>{genero}</p>
                    <Tag value={categoria}/>
                </div>
                <div className={styles.linha2}>
                    <p>{duracao}</p>
                    <Tag value={censura}/>
                </div>
            </div>
        </div>
    </li>
  )
}

export default CardMovie
