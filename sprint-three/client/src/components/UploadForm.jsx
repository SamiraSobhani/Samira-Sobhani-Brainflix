import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class UploadForm extends Component {
  state = {
    formFieldsFilled: false,
    title: "",
    description: "",
    toHomePage: false, 
  };
   
  checkFormFilled = () => {
    const { title, description } = this.state;
    if (title.length > 2 && description.length > 4) {
      this.setState({ formFieldsFilled: true });
    } else {
      this.setState({ formFieldsFilled: false });
    }
  };
  
  handleTitleInputChange = (event) => {
    this.setState({
      title: event.target.value,
    });
    this.checkFormFilled();
  };

  handleDescriptionInputChange = (event) => {
    this.setState({
      description: event.target.value,
    });
    this.checkFormFilled();
  };
  
  addVideo = () => {
    console.log("inside add video");
    axios
    .post(`http://localhost:8080`, {
      title: this.state.title,
      description: this.state.description,
      
    })
    .then((response) => {
      this.setState({
        title: "",
        description: "",
      });
    })
    .catch((err) => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.addVideo();
    console.log("inside upload video");
    alert("Great! you successfully added a video to the list");
  
    this.setState(() => ({
      
      toHomePage: true,
    }));
  };
  

  render() {
    if (this.state.toHomePage === true) {
      return <Redirect to="/videos" />;
    }
    return (
      <form onSubmit={this.handleFormSubmit} className="form">
        <label className="form__title" htmlFor="form__addTitle">
          TITLE YOUR VIDEO
        </label>
        <input
          onChange={this.handleTitleInputChange}
          className="form__addTitle"
          id="form__addTitle"
          type="text"
          placeholder="Add a title to your video"
          value={this.state.title}
        />
        <label className="form__description">ADD A VIDEO DESCRIPTION</label>
        <textarea
          onChange={this.handleDescriptionInputChange}
          className="form__addDescription"
          type="text"
          placeholder="Add a description of your video"
          value={this.state.description}
        ></textarea>
<div className="button container">
        <button
          className="button__publish"
          type="submit"
        >
          PUBLISH
        </button>
        <button className="button__cancel" type="button">
          CANCEL
        </button>
      </div>
      </form>
    );
  }
}

export default UploadForm;
