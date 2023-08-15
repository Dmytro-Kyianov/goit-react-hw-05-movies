import { useState, useEffect } from 'react';
import { getMoviesListTrending } from 'fetchFilmsUtils/fetchFilmData';

import MoviesList from 'components/MoviesList/MoviesList';
import { Spinner } from 'components/Loader/Loader';

import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const fetch = await getMoviesListTrending();
        setMovies(fetch);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Spinner />}
      {error && <p>Some server error occurred</p>}
    </>
  );
};

export default Home;
