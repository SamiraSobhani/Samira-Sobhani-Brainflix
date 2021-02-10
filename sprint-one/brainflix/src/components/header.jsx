import React, { Component } from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import '../styles/header.scss';

class Header extends Component {
    render() { 
        return (
            <section className="header container">
            <img className="header__logo" src={logo} alt="logo"/>
            <input className="header__search" placeholder="Search" type="text"/>
            <button className="header__button" type="submit">+ UPLOAD</button>
            <span className="header__userImg"></span>
            </section>
          );
    }
}
 
export default Header;