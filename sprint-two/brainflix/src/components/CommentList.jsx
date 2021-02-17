import React, { Component } from "react";
import CommentForm from"./CommentForm";

function Comments (props){

    const currentVideo=props.VideosDescreption
    .find((descreption)=> descreption.id === props.currentVideoId)
    const counter=currentVideo.comments.length;
  return(
    <>
    <CommentForm commentCounter={counter}/>
    <ul className="comment container">
    {currentVideo.comments.map((Comment)=>(
      
            <li className="comment__list" key={Comment.id}>
              <div className="comment__imgDiv">
                <div className="comment__img"></div>
              </div>
              <div className="comment__detail">
                <div className="comment__nameDate">
                  <h5 className="comment__name">{Comment.name}</h5>
                  <span className="comment__date">{props.formatedDate(Comment.timestamp)}</span>
                </div>
                <p className="comment__text">{Comment.comment}</p>
              </div>

            </li>
        ))
    }
    </ul>
    </>
);
}

export default Comments;