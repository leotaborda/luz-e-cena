import styles from "./MovieSection.module.css";
import InputText from "../InputText";
import FieldSet from "../FieldSet";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import useFetchMovies from "../../hooks/useFetchMovies";
import useFilterMovies from "../../hooks/useFilterMovies";

const MovieSection = () => {
  const { movies, isLoading, error } = useFetchMovies();
  const { searchTerm, filteredMovies, setSearchTerm, handleSearch } =
    useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <FieldSet variant="secundary">
          <InputText
            placeholder="Buscar Filmes..."
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </FieldSet>
        <h1 className={styles.titulo}>Filmes Em Cartaz</h1>
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
