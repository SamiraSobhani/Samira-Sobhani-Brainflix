import React, { Component } from "react";
import CommentForm from"./CommentForm";

function Comments (props){

    const currentVideo=props.VideosDescreption
    .find((descreption)=> descreption.id === props.currentVideoId)
    const counter=currentVideo.comments.length;
  return(
    <>
    <CommentForm commentCounter={counter}/>
    <ul>
    {currentVideo.comments.map((comment)=>(
      
            <li key={comment.id}>
            <div className="comment__img"></div>
            <h5>{comment.name}</h5>
            <span>{comment.timestamp}</span>
            <p>{comment.comment}</p>
            </li>
        ))
    }
    </ul>
    </>
);
}

export default Comments;