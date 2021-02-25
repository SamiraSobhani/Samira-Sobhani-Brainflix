const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const fs = require("fs");

function loadVideosData() {
  return fs.readFileSync("./data/video-details.json", "utf8");
}

router.get("/videos", (req, res) => {
  const videos = JSON.parse(loadVideosData());

  const eachVideo = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
      description: video.description,
      views: video.views,
      likes: video.likes,
      timestamp: video.timestamp,
      comments: video.comments,
    };
  });
  res.json(eachVideo);
});

router.get("/videos/:id", (req, res) => {
  
  const videos = JSON.parse(loadVideosData());
  const video = videos.find((video) => video.id === req.params.id);
  if (!video) {
    res.status(404).send("The video with the given id was not found");
    return;
  }
  res.send(video);
});


// router.post("/videos/video", (req, res) => {
// const videos = JSON.parse(loadVideosData());

// const video={
//   id: uuidv4(),
//   title: req.body.title,
//   description: req.body.description,
// }
// videos.push(video);


// res.send(videos.JSON.)
// });

module.exports = router;

