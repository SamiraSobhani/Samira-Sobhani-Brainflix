import React, { Component } from "react";
import { Redirect } from "react-router-dom";



class UploadButton extends Component {
    state = { 
        toHomePage:false
     }


     uploadVideo = () => {
        alert("Great!!!");
         this.setState(() => ({
            toHomePage: true
          }))
      }
      
    render() { 
        if (this.state.toHomePage=== true) {
            return <Redirect to='/videos' />
          }
        return ( 
            <div className="button container">
            <button onClick={this.uploadVideo}  className="button__publish" type="submit" > PUBLISH</button>
            <button className="button__cancel"  type="button">CANCEL</button>
        </div>
         );
    }
}
 
export default UploadButton;