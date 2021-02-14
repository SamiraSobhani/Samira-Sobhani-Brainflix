import React, { Component } from "react";
import logo from "../assets/Logo/Logo-brainflix.svg";
import searchIcon from "../assets/Icons/Icon-search.svg";
import uploadIcon from "../assets/Icons/Icon-upload.svg";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Icon from "@material-ui/core/Icon";


class Header extends Component {
  render() {
    return (
      <section className="header container">
        <img className="header__logo" src={logo} alt="logo" />
        

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
          <button className="header__button" type="submit">
           <img className="header__buttonIcon" src={uploadIcon} ></img>UPLOAD
          </button>
          <span className="header__userImg"></span>
        </div>
      </section>
    );
  }
}

export default Header;
