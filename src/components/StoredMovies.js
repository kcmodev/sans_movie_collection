import {getAllMovies} from "../actions";
import {useEffect} from "react";
import Movie from "./Movie";

const DisplayStoredMovies = (getMovies) => {
    useEffect(() => {
        // getAllMovies();
    }, [getMovies]);

    return (
        <>
            <hr/>
        <h4> Titles in database </h4>
            {/*<Movie movie={getMovies} />*/}
        </>
    );
};

export default DisplayStoredMovies;
