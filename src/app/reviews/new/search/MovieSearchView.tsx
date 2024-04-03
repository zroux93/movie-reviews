import { search } from './actions';

type MovieSearchProps = {
  query?: string;
};

const MovieSearchView = async ({ query }: MovieSearchProps) => {
  if (!query) {
    return <div>No results to display...</div>;
  }

  const movies = await search({ query });

  return (
    <div>
      {movies?.results.map((r) => (
        <div key={r.id}>{r.title}</div>
      ))}
    </div>
  );
};

export { MovieSearchView };
