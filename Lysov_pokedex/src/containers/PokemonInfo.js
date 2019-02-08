import React, { Component } from 'react';
import PokemonInfoRender from '../components/pokemonInfoRender'

class PokemonInfo extends Component {
  
  state = {
    id: this.props.match.params.id,
    errors: ''
  }
  
  loadPokemon = () => {
    const { id } = this.state;

    fetch(`http://localhost:4000/pokemons/${id}`)
    .then( response => {
      if (!response.ok) { this.setState({errors: response.status}) }
    return response.json()
    })
    .then( result => this.setState({
      name: result.name,
      status: result.status,
      date: result.date
    }));
  }

  componentDidMount() {
    this.loadPokemon();
  }

  render() {
    console.log(this.state.errors); 

    return  (
      <PokemonInfoRender {...this.state} />
    ) 
  }
}

export default PokemonInfo;