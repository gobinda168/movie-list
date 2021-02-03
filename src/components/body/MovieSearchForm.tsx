import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/Input';

const MovieSearchForm: React.FC = () => {
  const { handleSubmit, errors, register } = useForm();
  return (
    <form>
      <Input
        name="search"
        fieldLabel="Search.."
        errors={errors}
        register={register}
      />
    </form>
  );
};

export default MovieSearchForm;
