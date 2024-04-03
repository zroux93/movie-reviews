'use client';

import { Suspense } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { TextInput } from '@/app/common/Forms/TextInput';
import { MovieSearchView } from './MovieSearchView';
import Loading from '@/app/common/Loading';

const MovieSearch = () => {
  const formMethods = useForm({ defaultValues: { query: '' } });

  const query = formMethods.watch('query');

  return (
    <>
      <FormProvider {...formMethods}>
        <form>
          <TextInput name="query" label="Search" />
        </form>
      </FormProvider>

      <Suspense fallback={<Loading />}>
        <MovieSearchView query={query} />
      </Suspense>
    </>
  );
};

export default MovieSearch;
