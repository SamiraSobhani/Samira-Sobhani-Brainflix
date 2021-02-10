import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import CommentList from "./components/CommentList";

import videosData from "./assets/Data/videos.json";
import videosDetails from "./assets/Data/video-details.json";

class App extends Component {
  state = {
    currentVideoId: "1af0jruup5gu",
    videos: videosData,
    videosDescreption: videosDetails,
  };

  render() {
    return (
      <div className="App">
        <VideoDetails
          VideosDescreption={this.state.videosDescreption}
          currentVideoId={this.state.currentVideoId}
        />
        <VideoList
          videos={this.state.videos}
          currentVideoId={this.state.currentVideoId}
        />
        <CommentList
          currentVideoId={this.state.currentVideoId}
          VideosDescreption={this.state.videosDescreption}
        />
      </div>
    );
  }
}

export default App;
