const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const connectingDB = require("./db/db.js");
connectingDB();

const createdbRouteHandler = require("./routes/createdb.route.js");
const authRouteHandler = require("./routes/auth.route.js");

const leaderBoardHandler = require("./routes/leaderBoard.route.js");
const quizRouteHandler = require("./routes/quiz.route.js");
const quizCateogryRouteHandler = require("./routes/cateogry.route.js");

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/createdb", createdbRouteHandler);
app.use("/auth", authRouteHandler);

app.use("/leaderBoard", leaderBoardHandler);
app.use("/quiz", quizRouteHandler);
app.use("/quizCateorgy", quizCateogryRouteHandler);

app.listen(3000, () => {
  console.log("server started");
});
