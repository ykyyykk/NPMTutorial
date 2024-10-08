const express = require("express");
const expressHandlebars = require("express-handlebars").engine;
const app = express();
const port = 3000;

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.render("homeDelete", { title: "HomeDeleteTitle" });
});

app.delete("/item", (request, response) => {
  // 這邊的send 會將字串送到home2.handlebars 的alert(data)
  response.send("Item deletedAAA");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
