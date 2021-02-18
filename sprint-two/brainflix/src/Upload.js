import React, { Component } from "react";

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
        <UploadHead />
        <UploadImage />
        <UploadForm />
        <UploadButton />
      </div>
    );
  }
}

export default Upload;
