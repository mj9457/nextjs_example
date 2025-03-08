import { API_URL } from "app/(home)/page"
import MovieVideos from "components/moive-videos";
import MovieInfo from "components/movie-info";
import { Suspense } from "react";


export default async function MovieDetail({params:{id}}:{params:{id:string}}) {
    console.log('start Fetching')

    console.log('end fetcing');
    return (
        <div>
            <Suspense fallback={<h1>Loading Movie Info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Video</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}