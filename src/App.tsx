import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/body/Body';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';
import FavouriteMovies from './pages/favourite/FavouriteMovies';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/favourites">
        <FavouriteMovies />
      </Route>
    </Switch>
  </Router>
);

export default App;
