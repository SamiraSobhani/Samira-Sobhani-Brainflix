import React, { Component } from "react";
import "./styles/main.scss";

import Header from "./components/Header";
import UploadHead from "./components/UploadHead";
import UploadForm from "./components/UploadForm";
import UploadImage from "./components/UploadImage";
import UploadButton from "./components/UploadButton";

class Upload extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <main className="container uploadMain">
          <UploadHead />
          <div className="imageForm">
            <UploadImage />
            <UploadForm />
          </div>
        </main>
        <UploadButton />
      </div>
    );
  }
}

export default Upload;
