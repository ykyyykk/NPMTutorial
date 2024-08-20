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
  response.render("homeForm", { title: "HomePostTitle" });
});

// 按下home 的 submit按鈕 去到/submit頁面 拿的是result.handlebars的檔案
app.post("/submit", (request, response) => {
  // form 裡面 input 的 name 不是 id
  const index2Name = request.body.InputNameName;
  response.render("result", {
    title: "Form Submission Result",
    name: index2Name,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
