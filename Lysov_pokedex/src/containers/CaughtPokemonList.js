import React, { Component } from 'react';
import PokemonBox from '../components/pokemonBox';
import Load from './Requires';
 
class CaughtPokemonList extends Component {

  state = {
    pokemons: [],
    page: 1
  }

  loadCaught = Load.caught.bind(this);

  componentDidMount = () => {
    this.loadCaught();
  }

  render() {
    const { pokemons } = this.state;

    return (this.state.pokemons.length !== 0 &&
      <PokemonBox pokemons={pokemons} onClick={this.loadCaught}/>
    );
  }
}

export default CaughtPokemonList;