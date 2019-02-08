import React, { Component } from 'react';
import PokemonBox from '../components/pokemonBox';
import Load from './Requires'

class PokemonList extends Component {
    state = {
      pokemons: [],
      page: 1
    }
  
  loadList = Load.list.bind(this);

  componentDidMount = () => {
    this.loadList();
  }

  render() {
    return (
      this.state.pokemons.length !== 0 && 
        <PokemonBox pokemons={this.state.pokemons} onClick={this.loadList}/>
    );
  }
}

export default PokemonList;