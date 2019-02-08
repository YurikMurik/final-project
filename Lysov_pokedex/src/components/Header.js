import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar fixed__header  navbar-dark bg-dark navbar-fixed-top">
    <div className="container ">
      <div className="navbar-header pull-left">
        <Link className="navbar-brand" to="/">
          <img src = "./pokemons/pokeball.png" className="" alt='go home' width="40px"/> Pokedex </Link>
      </div>
      <div className="navbar-header pull-right">
        <ul className="navbar-nav inline">
          <li className="inline__li">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="inline__li">
            <Link className="nav-link" to="/caught">My pokemons</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header;