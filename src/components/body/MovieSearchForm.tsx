import styled from '@emotion/styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Colors from '../../constants/colors';
import { fetchMovieList } from '../../redux/actions/movieActions';
import Input from '../common/Input';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';

const MovieSearchForm: React.FC = () => {
  const { handleSubmit, errors, register } = useForm();
  const baseUrl = `https://www.omdbapi.com/`;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSearch = (data: { search: string; filter: string }) => {
    const url = `${baseUrl}?apikey=10cf295b&s=${data.search}&type=${data.filter}`;
    dispatch(fetchMovieList(url));
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
