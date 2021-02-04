import styled from '@emotion/styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Colors from '../../constants/colors';
import {
  fetchMovieList,
  storeUrlParams,
} from '../../redux/actions/movieActions';
import Input from '../common/Input';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import { API_KEY, BASE_URL } from '../../utils/config';

const MovieSearchForm: React.FC = () => {
  const { handleSubmit, errors, register } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSearch = ({
    search,
    filter,
  }: {
    search: string;
    filter: string;
  }) => {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${search}&type=${filter}`;
    dispatch(fetchMovieList(url));
    dispatch(storeUrlParams({ search, filter }));
    history.push('/movies');
  };
  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <Row spacing="0 .5rem">
        <Input
          name="search"
          fieldLabel="Search.."
          errors={errors}
          register={register}
        />
        <Dropdown name="filter" ref={register()}>
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </Dropdown>
        <RoundedButton background={Colors.darkestGrey}>Search</RoundedButton>
      </Row>
    </form>
  );
};

const Dropdown = styled.select({
  height: '2.5rem',
  width: '10rem',
  border: '1px solid',
  borderColor: 'rgba(60,73,138,0.42)',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  padding: '.75rem',
  ':active': {
    backgroundColor: Colors.darkGrey,
  },
  '@media(max-width:500px)': {
    width: '85vw',
    paddingLeft: '1.2rem',
  },
});
export default MovieSearchForm;
