import React, { Component } from "react";

function CommentForm (props){

return(
    <>
    <h5>{props.commentCounter} Comments</h5>
    <form>
        <label htmlFor="form__input"></label>
        <input id="form__input" className="form__input" type="text" placeholder="That was easily the most spectacular BMX moment ever."/>
<button type="submit">Comment</button>

    </form>
    </>
);

}
export default CommentForm;