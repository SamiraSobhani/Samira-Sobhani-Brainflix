import React, { Component } from "react";
import views from "../assets/Icons/Icon-views.svg"
import likes from "../assets/Icons/Icon-likes.svg"

function VideoDetails(props){

    return(
        <section key={props.currentVideoId} className="details container">
            <h1 className="details__head">{props.VideosDescription.title}</h1>
            <div className="details__all">
                <div className="details__channeltime">
                    <h3 className="details__channel">By {props.VideosDescription.channel}</h3>
                    <span className="details__time">{props.formatedDate(props.VideosDescription.timestamp)}</span>
                </div>
                <div className="details__viewsLikes">
                    <img className="details__vIcon" src={views} alt=""/>
                    <span className="details__views">{props.VideosDescription.views}</span>
                    <img className="details__lIcon" src={likes} alt=""/>
                    <span className="details__likes">{props.VideosDescription.likes}</span>
                </div>
            </div>
            <article className="details__description">{props.VideosDescription.description}</article>
        </section>
        
    )
    

    }

export default VideoDetails;