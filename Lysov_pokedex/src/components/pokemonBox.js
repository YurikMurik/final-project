import React, { Component, Fragment } from 'react';
import Button from '../containers/Button'
import { Link } from 'react-router-dom';


class PokemonBox extends Component {
  render() {
    const { pokemons } = this.props;

    return (
      <Fragment>
        <div className = "container">
          <div className="row justify-content-center">
            {pokemons.map( pokemon => {
              const { id, name } = pokemon;
              const imgSrc = `./pokemons/${id}.png`;
              return (
                <div key={id} className="card col-md-3 col-xl-2 text-center m-3">
                  <Link to={`/${id}`} className="link link__size">
                    <img className="card-img-top" src={imgSrc} alt={`${name} img `} />
                  </Link>
                    
                  <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text">Id: {id}</p>
                  </div>
                    <Button {...pokemon} />
                </div>  
              );
            })}
          </div>

          {pokemons.length >= 10 && <button className="btn btn-outline-dark btn__load col-md-2 col-4"
                            onClick={this.props.onClick}> Load more </button>}

        </div>
      </Fragment>
    );
  }
}

export default PokemonBox;