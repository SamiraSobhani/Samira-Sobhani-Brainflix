import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/Logo/Logo-brainflix.svg";
import searchIcon from "../assets/Icons/Icon-search.svg";
import uploadIcon from "../assets/Icons/Icon-upload.svg";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Icon from "@material-ui/core/Icon";
import UserImage from "./UserImage";


class Header extends Component {
  render() {
    const MyStyle={
      color:"white",
      textDecoration:"none"
    };

    return (
      <section className="header container">
        <NavLink className="header__logo" to="/videos">
        <img  src={logo} alt="logo" />
        </NavLink>
        <Input
          className="header__search"
          placeholder="Search"
          id="standard-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <Icon>
                <img className="header__searchIcon" src={searchIcon} />
              </Icon>
            </InputAdornment>
          }
        />
        <div className="header__btnimg">
            <button  className="header__button" type="submit">
              <NavLink  style={MyStyle}  to="/upload"  >
                  <img className="header__buttonIcon" src={uploadIcon}></img>UPLOAD
              </NavLink>
            </button>
          <UserImage />
        </div>
      </section>
    );
  }
}

export default Header;
