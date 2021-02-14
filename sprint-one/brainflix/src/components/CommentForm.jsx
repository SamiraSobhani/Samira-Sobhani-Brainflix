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
            <textarea className="form__input" id="form__lable" type="text" placeholder=" Write comment here"/>
            <button className="form__button" type="submit">COMMENT</button>
        </form>
    </section>
    </>
);

}
export default CommentForm;