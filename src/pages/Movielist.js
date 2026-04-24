import { useTitle } from '../hooks/useTitle';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';
export const Movielist = ({apiPath, title}) => {

  const{data: movies} =useFetch(apiPath);

  useTitle(title);

  return (
  <main className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
         { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) } 
      </div>
    </section>
  </main>
  )
}