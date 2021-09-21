import {useState} from "react";

const Movie = ({movie}) => {


    return (
        <>
            <p>{movie.index}{". "}
                {" "}{movie.title} ||
                {" "}{movie.format}  ||
                {" "}{movie.filmLength}{" minutes"} ||
                {" "}{movie.releaseYear} ||
                {" "}{movie.rating}</p>
        </>
    )
};

export default Movie
