import React, { Component } from "react";
import MyImage from "../assets/Images/Shiraz.jpg"

function UploadImage() {
    return (
        <div>
            <h4 className="upload__imageHead">VIDEO THUMBNAIL</h4>
            <img className="upload__image" src={MyImage} />
        </div>
    )
}

export default UploadImage;
