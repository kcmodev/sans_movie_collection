import React from "react";
import {Route, Switch} from 'react-router-dom';
import StoredMovies from "../components/StoredMovies";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/movies'} component={StoredMovies}/>
        </Switch>
    );
}

export default Routes;
