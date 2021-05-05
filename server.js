const exp = require("express");
const app = exp();
const robot = require("robotjs");
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/api/commandpress/:key", (req, res) => {
  console.log(req.params);
  robot.keyTap(req.params.key, "command");
  res.send(true);
});

app.listen(5445, () => {
  console.log("listening on 5445");
});
