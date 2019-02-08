import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header';

import PokemonList from './containers/PokemonList';
import CaughtPokemonList from './containers/CaughtPokemonList';
import PokemonInfo from './containers/PokemonInfo';
import NotFound from './components/NotFound/NotFound'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact  path="/" component={PokemonList} />
          <Route exact   path="/caught" component={CaughtPokemonList} />
          <Route exact   path="/:id" component={PokemonInfo} />
          <Route exact path="*" component={NotFound} />
        </Switch> 

      </Fragment>
    );
  }
}

export default App;
