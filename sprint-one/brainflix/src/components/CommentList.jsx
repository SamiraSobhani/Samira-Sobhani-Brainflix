import React, { Component } from "react";

function Comments (props){

    const currentV=props.VideosDescreption
    .find((descreption)=> descreption.id === props.currentVideoId)
  return(
    <ul>

    {currentV.comments.map((comment)=>(
            <li key={comment.id}>
            <div className="comment__img"></div>
            <h5>{comment.name}</h5>
            <span>{comment.timestamp}</span>
            <p>{comment.comment}</p>
            </li>
        ))
}
</ul>
);
}

export default Comments;