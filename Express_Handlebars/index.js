const express = require("express");
const expressHandlebars = require("express-handlebars").engine;

const app = express();

const fortuneArray = ["a", "b", "c", "d", "e"];

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);

const port = process.env.PORT || 3000;

// 現在main.handlebars在讀路徑 會從Express_Handlebars/public開始讀
app.use(express.static(__dirname + "/public"));

// 需要把views的資料夾移到NPM下面 不然讀不到 因為express_handlebars是在 NPM下面
app.set("view engine", "handlebars");

//localhost:3000/  response.render("home") 讀取views/home.handlebars
app.get("/", (request, response) => response.render("home"));

//localhost:3000/about
// app.get("/about", (request, response) => response.render("about"));

//localhost:3000/about 使裡面的 {{#if fortune}}顯示 上面的about不能打開 會覆蓋
app.get("/about", (request, response) => {
  //取得隨機fortuneArray
  const randomFortune =
    fortuneArray[Math.floor(Math.random() * fortuneArray.length)];
  response.render("about", { fortune: randomFortune });
});

//custom 404 page
app.use((request, response) => {
  response.status(404);
  response.render("404");
});

app.use((error, request, response, next) => {
  console.error(error.message);
  response.status(500);
  response.render("500");
});

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; press Ctrl-c to terminate.`
  );
});
