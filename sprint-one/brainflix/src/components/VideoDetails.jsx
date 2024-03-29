import React, { Component } from "react";
import PlayVideo from "./PlayVideo"
import views from "../assets/Icons/Icon-views.svg"
import likes from "../assets/Icons/Icon-likes.svg"

function VideoDetails(props){

    return(
    props.VideosDescreption
    .filter((descreption)=> descreption.id ===props.currentVideoId)
    .map((descreption)=>(
        <section key={props.currentVideoId} className="details container">
        <h1 className="details__head">{descreption.title}</h1>
        <div className="details__all">
            <div className="details__channeltime">
                <h3 className="details__channel">By {descreption.channel}</h3>
                <span className="details__time">{props.formatedDate(descreption.timestamp)}</span>
            </div>
            <div className="details__viewsLikes">
                <img className="details__vIcon" src={views} alt=""/>
                <span className="details__views">{descreption.views}</span>
                <img className="details__lIcon" src={likes} alt=""/>
                <span className="details__likes">{descreption.likes}</span>
            </div>
        </div>
        <article className="details__description">{descreption.description}</article>
        </section>
        
    ))
    

)}

export default VideoDetails;