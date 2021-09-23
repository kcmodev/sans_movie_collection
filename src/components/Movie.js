const Movie = ({movie}) => {
    return (
        <>
            <p> {" "}{movie["title"]} ||
                {" "}{movie["format"]}  ||
                {" "}{movie["filmLength"]}{" minutes"} ||
                {" "}{movie["releaseYear"]} ||
                {" "}{movie["rating"]}</p>
        </>
    )
};

export default Movie
