import React, { Component } from "react";
import videosData from "./assets/Data/videos.json";
import videosDetails from "./assets/Data/video-details.json";

import "./styles/main.scss";
import PlayVideo from "./components/PlayVideo";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import Header from "./components/Header";

class App extends Component {
  state = {
    currentVideoId: "1af0jruup5gu",
    videos: videosData,
    videosDescreption: videosDetails,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <PlayVideo
          VideoPoster={this.state.videos}
          currentVideoId={this.state.currentVideoId}
        />
        <VideoDetails
          VideosDescreption={this.state.videosDescreption}
          currentVideoId={this.state.currentVideoId}
        />
        <CommentList
          currentVideoId={this.state.currentVideoId}
          VideosDescreption={this.state.videosDescreption}
        />
        <VideoList
          videos={this.state.videos}
          currentVideoId={this.state.currentVideoId}
        />
      </div>
    );
  }
}

export default App;
