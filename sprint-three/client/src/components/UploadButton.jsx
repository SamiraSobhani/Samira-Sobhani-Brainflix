import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UploadButton extends Component {
  state = {
    toHomePage: false,
 
  };
  
  uploadVideo = (props) => {
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
    );
  }
}

export default UploadButton;
