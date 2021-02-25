const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const videos = require("./routes/videos");

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("incoming request");
  next();
});
app.use("/", videos);

app.get("/", (req, res) => {
  res.json({
    welcome: "welcome to my API",
    routes: {
      videos: {
        get: "get all videos",
        url: "http://localhost:8080/videos",
      },
    },
  });
});

app.listen(8080, () => console.log("listening on port 8080"));
