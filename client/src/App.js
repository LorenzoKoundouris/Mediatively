import React, {Component} from 'react';
import './App.css';
import NavBar from './navbar/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    Route,
    Switch
  } from 'react-router-dom';

import HomePage from './home/components/HomePage';
import PopularMoviesPage from './movies/components/PopularMoviesPage';
import ShowLandingPage from './shows/components/ShowLandingPage';
import ShowPageContainer from './shows/containers/ShowPageContainer';
import MoviePageContainer from './movies/containers/MoviePageContainer';

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container-fluid">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/movies" component={PopularMoviesPage} />
                    <Route path="/shows" component={ShowLandingPage} />
                    <Route path="/show/:id" component={ShowPageContainer} /> 
                    <Route path="/movie/:id" component={MoviePageContainer} />
                    {/*<Route component={NotFoundPage} /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
