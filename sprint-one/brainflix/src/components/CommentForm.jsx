import React, { Component } from "react";

function CommentForm (props){

return(
    <>
    <h5 className="form__commentCounter container">{props.commentCounter} Comments</h5>
    <section className="form container">
        <div className="form__comment">
            <span className="form__image"></span>
        </div>
        <form className="form__add">
            <label className="form__lable" htmlFor="form__lable">JOIN THE CONVERSATION</label>
            <input className="form__input" id="form__lable" type="text" placeholder="Add a comment"/>
            <button className="form__button" type="submit">Comment</button>
        </form>
        </section>
    </>
);

}
export default CommentForm;