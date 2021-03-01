import React, { Component } from "react";
import UserImage from "./UserImage";

function CommentForm (props){

return(
    <>
    <h5 className="form__commentCounter container">{props.commentCounter} Comments</h5>
    <section className="form container">
        <div className="form__comment">
            <UserImage/>
        </div>
        <form className="form__add">
            <div className="form__lableInput">
                 <label className="form__lable" htmlFor="form__lable">JOIN THE CONVERSATION</label>
                 <textarea className="form__input" id="form__lable" type="text" placeholder=" Write comment here"/>
            </div>
            <button className="form__button" type="submit">COMMENT</button>
        </form>
    </section>
    </>
);

}
export default CommentForm;