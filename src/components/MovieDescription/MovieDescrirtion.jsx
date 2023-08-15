import PropTypes from 'prop-types';
import { BsPersonSquare } from 'react-icons/bs';

import { Title, Poster, Text, TitleText } from './MovieDescription.styled';

const MovieDescription = ({ movieData }) => {
  const { genres, title, overview, vote_average, poster_path } = movieData;

  return (
    <>
      <div>
        <Title>{title ?? ''}</Title>
        <Poster>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt="Movie poster"
            />
          ) : (
            <BsPersonSquare style={{ height: 300, width: 200 }} />
          )}
        </Poster>
        <div>
          <TitleText>
            User score: {Math.round(vote_average * 10) ?? ''}%
          </TitleText>
          <div>
            <TitleText>Overviev</TitleText>
            <div>
              <Text>{overview ?? ''}</Text>
              <Text>{genres.map(({ name }) => name).join(' ') ?? ''}</Text>
              <TitleText>Additional information</TitleText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDescription;

MovieDescription.propTypes = {
  movieData: PropTypes.object.isRequired,
};
