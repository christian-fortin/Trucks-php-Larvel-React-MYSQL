import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <div id='navBarDiv'>
        <Link to='/'><div id='NavBarHomeDiv'> <h3 id='NavBarHomeH3'>Home</h3> </div></Link>
        <div id='NavBarTitleDiv'> <h2 id='NavBarTitleH2'>Truck Tracker</h2></div>
        <Link to='/create'> <div id='NavBarCreateDiv'> <h3 id='NavBarCreateH3'>Create</h3> </div></Link>
        </div>
    </div>
  )
}

export default NavBar