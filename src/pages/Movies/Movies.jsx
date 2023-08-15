import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesList } from 'fetchFilmsUtils/fetchFilmData';
import MoviesList from 'components/MoviesList/MoviesList';
import { Spinner } from 'components/Loader/Loader';

import { Notification, Form, Button } from './Movies.styled';

const Movies = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  Notify.init({
    width: '300px',
    position: 'center-top',
    closeButton: false,
  });

  const emptyInput = () => {
    setSearchParams({});
    Notify.warning('Please, enter serch query');
  };

  const handleInputAdd = e => {
    e.preventDefault();

    data === '' ? emptyInput() : setSearchParams({ query: `${data}` });
  };

  const setControlInput = e => {
    const { value } = e.target;

    setData(value);
  };

  useEffect(() => {
    const name = searchParams.get('query');
    if (!name) {
      return;
    }

    const getFilmsList = async () => {
      setIsLoading(true);

      try {
        const dataMovies = await getMoviesList(name);
        setMovieList(dataMovies);
        dataMovies.length === 0 ? setIsEmpty(true) : setIsEmpty(false);

        setData('');
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getFilmsList();
  }, [searchParams]);

  return (
    <>
      <Form onSubmit={handleInputAdd}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={data}
          onChange={setControlInput}
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </Form>

      {isLoading && <Spinner />}
      <Notification>
        {isEmpty && <p>There is no any movie according to your fetch</p>}
        {error && <p>Some error occured</p>}
      </Notification>

      {searchParams && <MoviesList movies={movieList} />}
    </>
  );
};

export default Movies;
