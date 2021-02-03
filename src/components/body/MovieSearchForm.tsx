import styled from '@emotion/styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import Colors from '../../constants/colors';
import Input from '../common/Input';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';

const MovieSearchForm: React.FC = () => {
  const { handleSubmit, errors, register } = useForm();
  const handleSearch = (data: unknown) => {
    // console.log(data);
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
          <option value="all">All</option>
          <option value="movies">Movies</option>
          <option value="series">Series</option>
          <option value="episodes">Episodes</option>
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
});
export default MovieSearchForm;
