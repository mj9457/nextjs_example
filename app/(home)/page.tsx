import Link from "next/link";

export const metadata = {
    title: "Home"
}
async function  getMovies() {
    await new Promise((r) => setTimeout(r,1000))
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export default async function HomePage() {
   const moviesData = await getMovies();

   console.log(moviesData);
    return (
    <><h1>Hello this is Home </h1>
    <div>{moviesData.map((movie) => 
    <li key={movie.id}>
        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
    )}</div>
    </>)
}