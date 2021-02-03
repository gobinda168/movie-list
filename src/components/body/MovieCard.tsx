import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavourite } from '../../redux/actions/favouriteActions';
import pathUtil from '../../utils/assetsPath';
import AnimatedAsset from '../common/AnimatedAsset';
import Card from '../common/Card';
import Column from '../common/Column';
import RichText from '../common/RichText';
import Row from '../common/Row';
import SVG from '../common/SVG';

interface Props {
  title: string;
  poster: string;
  releaseDate: string;
  imdbID: string;
}
const MovieCard: React.FC<Props> = ({
  title,
  poster,
  releaseDate,
  imdbID,
}: Props) => {
  const [cardHover, setCardHover] = useState(false);
  const dispatch = useDispatch();
  const favouriteList = useSelector(
    (state: RootStateOrAny) => state.favourites.movieList
  );
  const favIcon = favouriteList.includes(title)
    ? 'heartFilled.png'
    : 'heartEmpty.png';
  const handleToggle = () => {
    dispatch(toggleFavourite({ title, poster, releaseDate, imdbID }));
  };

  return (
    <Card
      hover
      onMouseOver={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <Row justifyContent="space-between">
        <Link to={`/movieDetails/${imdbID}`}>
          <AnimatedAsset
            src={poster}
            scale={cardHover ? 'scale(1.1)' : 'scale(1)'}
            width="100"
            height="150"
            cursor="pointer"
          />
        </Link>
        {/* <Row > */}
        <Column>
          <Link to={`/movieDetails/${imdbID}`}>
            <RichText bold size="1rem">
              {title.length > 15 ? `${title.slice(0, 14)}...` : title}
            </RichText>
          </Link>
          <RichText bold>{releaseDate}</RichText>
          {/* <SVG
              src={pathUtil.getImagePath('arrowRightBlack.png')}
              cursor="pointer"
            /> */}
        </Column>
        <div />
        <SVG
          src={pathUtil.getIconPath(favIcon)}
          cursor="pointer"
          onClick={handleToggle}
        />
        {/* </Row> */}
      </Row>
    </Card>
  );
};

export default MovieCard;
