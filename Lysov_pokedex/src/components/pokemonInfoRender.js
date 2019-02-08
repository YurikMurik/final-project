/* Class, which renders pokemon info page. */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotFound from './NotFound/NotFound';

class PokemonInfoRender extends Component {
  render() {
    const { id, name, errors } = this.props;
    const status = this.props.status ? 'Status: ' + this.props.status : '';
    const date = this.props.date ? `Catche data: ${this.props.date}` : 'not caught';
    
    return !errors ? (
      <div className="active-pokemon card">
        <img className="card-img-top" 
          src={`./pokemons/${id}.png`}
          alt={`${name} img`}/>
        
        <div className="card-header">
          <h3 className="text-center card-title active-pokemon__title"> Id: { id }, { name }</h3>  
        </div>

        <div className="card-body row text-center">                
          <p className="card-text col-md-12 "> 
            {status} 
          </p>

          <p className="card-text col-md-12 "> 
            {date}
          </p>

          <NavLink to="/" className="link text-center col-md-8 link__size ">
            <button className = "btn btn-success btn-sm link btn__active">
            Go Home   </button>
          </NavLink>
        </div>
      </div>

		) : <NotFound />
	}
}

export default PokemonInfoRender;