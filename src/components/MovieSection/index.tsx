import React from "react";
import styles from "./MovieSection.module.css";
import InputText from "../InputText";
import FieldSet from "../FieldSet";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import type { Movie } from "../../types";

const movies: Movie[] = [
  {
    id: 1,
    src: "images/Cards filmes/Capa - Superman.png",
    alt: "Imagem do filme Superman",
    titulo: "Superman",
    categoria: "2D",
    censura: "Livre",
    genero: "Romance",
    duracao: 90,
  },
  {
    id: 2,
    src: "images/Cards filmes/Card - Amigo da sombra.png",
    alt: "Imagem do filme Amigo da sombra",
    titulo: "Amigo da sombra",
    categoria: "2D",
    censura: "12 Anos",
    genero: "Suspense",
    duracao: 110,
  },
  {
    id: 3,
    src: "images/Cards filmes/Card - Amigos do bosque mágico.png",
    alt: "Imagem do filme Amigo do bosque mágico",
    titulo: "Amigo do bosque mágico",
    categoria: "2D",
    censura: "Livre",
    genero: "Animação",
    duracao: 60,
  },
  {
    id: 4,
    src: "images/Cards filmes/Card - Caminho para o abismo.png",
    alt: "Imagem do filme Caminho para o abismo",
    titulo: "Caminho para o abismo",
    categoria: "2D",
    censura: "14 Anos",
    genero: "Horror",
    duracao: 103,
  },
  {
    id: 5,
    src: "images/Cards filmes/Card - Desastres do Escritório.png",
    alt: "Imagem do filme Desastres do Escritório",
    titulo: "Desastres do Escritório",
    categoria: "2D",
    censura: "Livre",
    genero: "Comédia",
    duracao: 85,
  },
  {
    id: 6,
    src: "images/Cards filmes/Card - Mestres do futuro.png",
    alt: "Imagem do filme Mestres do Futuro",
    titulo: "Mestres do Futuro",
    categoria: "2D",
    censura: "Livre",
    genero: "Documentário",
    duracao: 120,
  },
  {
    id: 7,
    src: "images/Cards filmes/Card - La Esperanza.png",
    alt: "Imagem do filme La Esperanza",
    titulo: "La Esperanza",
    categoria: "2D",
    censura: "12 Anos",
    genero: "Drama",
    duracao: 98,
  },
  {
    id: 8,
    src: "images/Cards filmes/Card - O nexus do tempo.png",
    alt: "Imagem do filme O nexus do tempo",
    titulo: "O nexus do tempo",
    categoria: "3D",
    censura: "10 Anos",
    genero: "Ficcção Científica",
    duracao: 105,
  },
];

const MovieSection = () => {
  return (
    <main>
      <section className={styles.container}>
        <FieldSet variant="secundary">
          <InputText placeholder="Buscar Filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </FieldSet>
        <h1 className={styles.titulo}>Filmes Em Cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;
