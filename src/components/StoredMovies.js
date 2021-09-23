import {getAllMovies} from "../actions";
import {useEffect} from "react";
import { connect } from 'react-redux';

const DisplayStoredMovies = (getMovies) => {
    useEffect(() => {
        getAllMovies();
    }, [getMovies]);

    return (
        <>
            <hr/>
        <h4> Titles in database </h4>
            {/*<Movie movie={getMovies} />*/}
        </>
    );
};

const mapStateToProps = (state) => ({
    movie: state.movie
});

export default connect(mapStateToProps, {getAllMovies})(DisplayStoredMovies);
