const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const fs = require("fs");

function loadVideosData() {
  return fs.readFileSync("./Data/video-details.json", "utf8");
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

router.post("/", (req, res) => {
  console.log("inside router post");
  if (req.body.title === "" && req.body.description === "") {
    console.log("POST ERROR EMPTY FIELD");
    res.status(422).send("please enter a title and description");
  } else {
    const videos = JSON.parse(loadVideosData());
    const newVideo = {
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      channel: "THR Channel",
      comments: [
        {
          name: "Micheal Lyons",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          likes: 0,
        },
        {
          name: "Gary Wong",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          likes: 0,
        },
      ],
      likes: "400,058",
      views: "2,043,765",

      image: "http://localhost:8080/Shiraz.jpg",
    };
    videos.push(newVideo);
    fs.writeFileSync("./Data/video-details.json", JSON.stringify(videos));

    res.json({
      message: "posted to videos endpoint",
      videoPosted: newVideo,
    });
  }
});

module.exports = router;
