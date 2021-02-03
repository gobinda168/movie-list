import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import FavouriteMovies from './pages/favourite/FavouriteMovies';
import Home from './pages/home/Home';
import MovieDetails from './pages/movieDetails/MovieDetails';
import Movies from './pages/movies/Movies';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <AppContainer>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/favourite">
          <FavouriteMovies />
        </Route>
        <Route path="/movieDetails/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </AppContainer>
  </Router>
);

const AppContainer = styled.div({
  paddingTop: '5rem',
  '@media(max-width:500px)': {
    paddingTop: '0',
  },
});

export default App;
