import React, { Component } from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';

class Header extends Component {
    render() { 
        return (
            <section className="header container">
            <img className="header__logo" src={logo} alt="logo"/>
            <input  className="header__search" placeholder="  🔍     Search" type="text"/>
            <div className="header__btnimg">
                <button className="header__button" type="submit">➕    UPLOAD</button>
                <span className="header__userImg"></span>
            </div>
            </section>
          );
    }
}
 
export default Header;