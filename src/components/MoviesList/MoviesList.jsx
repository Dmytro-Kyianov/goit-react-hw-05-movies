import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsPersonSquare } from 'react-icons/bs';

import { Container, MovieTitle } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <Container>
        {movies.map(({ id, title, backdrop_path }) => {
          return (
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              <li>
                <MovieTitle>{title}</MovieTitle>

                {backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
                    alt="Movie poster"
                  />
                ) : (
                  <BsPersonSquare style={{ height: 200, width: 400 }} />
                )}
              </li>
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
