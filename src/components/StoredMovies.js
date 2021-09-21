import Movie from "./Movie";
import {useState} from "react";

const DisplayStoredMovies = ({movies}) => {
    const [moviesList, setList] = useState(
        [{index: 1,
            title: 'Happy Gilmore',
            format: 'DVD',
            filmLength: '92',
            releaseYear: '1996',
            rating: '5 stars'},
        {index: 2,
            title: 'Billy Madison',
            format: 'Blu Ray',
            filmLength: '89',
            releaseYear: '1995',
            rating: '5 stars'}]
    )

    return (
        <>
            <hr/>
        <h4> Titles in database </h4>
            {moviesList.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </>
    );
};

export default DisplayStoredMovies
