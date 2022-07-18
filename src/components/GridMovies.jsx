import { useEffect, useState } from "react"
import { getMovieByTitle } from "../helpers/moviesAPI";
import { GridMoviesItem } from "./GridMoviesItem";

export const GridMovies = ({ title }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        getMovieByTitle(title).then((m) => setMovies(m));

        return () => {
            console.log("GridMovies Unmounted");
        }
    }, [title]);


    return (
        <div className="grid-movies">
            {
                movies.map((movie) => (
                    <GridMoviesItem
                        key={movie.imdbID}
                        {...movie}
                    />
                ))
            }
        </div>
    )
}
