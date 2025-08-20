import React, { useEffect, useState } from "react";
import styles from "./MovieSection.module.css";
import InputText from "../InputText";
import FieldSet from "../FieldSet";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import type { Movie } from "../../types";
import { getMovies } from "../../api";

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try{
      const movies = await getMovies()
      setMovies(movies)
    } catch(err) {
      console.error("Error ao buscar filmes" + err)
    }
  }

  useEffect (() => {
    fetchMovies()
  })

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
