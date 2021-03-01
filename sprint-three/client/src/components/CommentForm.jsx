import React, { Component } from "react";
import UserImage from "./UserImage";


class CommentForm extends Component {

    state={
      comment:"",
      formFieldsFilled:false
    }

    // const counter=this.props.VideosDescription.comments.length;
    checkFormFilled = () => {
        const { comment } = this.state;
        if (comment.length > 4) {
          this.setState({ formFieldsFilled: true });
        } else {
          this.setState({ formFieldsFilled: false });
        }
    };

    handleCommentInputChange = (event) => {
        this.setState({
          comment: event.target.value,
        });
        this.checkFormFilled();
    };


    handleFormSubmit = (event) => {
      event.preventDefault();
      this.props.addComment();
      console.log("inside add comment");
      
    };



      render() {

    return(
        <>
        <h5 className="form__commentCounter container">{this.props.commentCounter} Comments</h5>
        <section className="form container">
            <div className="form__comment">
                <UserImage/>
            </div>
            <form onSubmit={this.handleFormSubmit} className="form__add">
                <div className="form__lableInput">
                    <label className="form__lable" htmlFor="form__lable">JOIN THE CONVERSATION</label>
                    <textarea onChange={this.handleCommentInputChange} className="form__input" id="form__lable" type="text" placeholder=" Write comment here"/>
                </div>
                <button className="form__button" type="submit">COMMENT</button>
            </form>
        </section>
        </>
    );
    }
}

export default CommentForm;