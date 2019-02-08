import React, { Component } from 'react';

class Button extends Component {

  catch = (id, name, event) => {
    fetch(`http://localhost:4000/pokemons/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        status: "Caught",
        date: new Date().toLocaleDateString()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    event.target.disabled="disabled";
    event.target.textContent="Caught";
  };

  changeClass = (e) => {
    console.log(e.target)
  }

  render() {
    const { id, status, name } = this.props;
   
    if(!status) {
      return (
        <button className="btn btn-success btn-sm mb-3 link" onClick={(e) => {
          this.catch(id, name, e); 
        }}>Catch me!</button>
      );
    } else {
      return (
        <button className="btn btn-success btn-sm mb-3 link " disabled> Caught </button>
      );
    }
  }
}

export default Button;