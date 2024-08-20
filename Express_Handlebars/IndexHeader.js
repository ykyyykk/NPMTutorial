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
  response.render("home", { title: "HomeTitle" });
});

//變成一個黑黑的東東 有一些使用者的資料
//包括語言 encoding 瀏覽器 巴拉巴拉
app.get("/headers", (request, response) => {
  response.type("text/plain");

  const headers = Object.entries(request.headers).map(
    ([key, value]) => `${key}: ${value}`
  );

  response.send(headers.join("\n"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
