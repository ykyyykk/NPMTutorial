const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// npm i express
// 利用express Node的response.end改成 response.send
// 利用express 將response.type()取代 Node的設定標頭
// 利用express Node的response.writeHead() 換成 response.status()
// 雖然 仍然可以用Node的方法 但講義說這是不必要的

// 注意如果將 自定404網頁 移到第一個 將永遠去不了別的地方
// app.get 添加路由的方法
app.get("/", (request, response) => {
  response.type("text/plain"), response.send("Meadowlark Travel");
});

// 在express文件中 看到任何app.xx() 不代表有一個xx() 只是代表HTTP動詞
app.get("/about", (request, response) => {
  response.type("text/plain"), response.send("About Meadowlark Travel");
});

// 預設情況下app.xx() 不區分大小寫 不在意結尾斜槓 在匹配時不考慮查詢字串
// 幾乎等同於 const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
app.use((request, response) => {
  request.type("Text/plain"), request.status(404);
  request.send("404 - NotFound");
});

// 自訂404網頁
app.use((request, response) => {
  response.type("text/plain"),
    response.status(404),
    response.send("404 - NotFound");
});

// 自訂500網頁
app.use((error, requset, response, next) => {
  console.error(error.message),
    response.type("text/plain"),
    response.status(500),
    response.send("500 - ServerError");
});

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; press Ctrl-c to terminate.`
  );
});

//為了看到自訂500網頁 手動新增一個/trigger-error分頁轉到500
app.get("/trigger-error", (request, response, next) => {
  const error = new Error("This is a test erro");
  next(error);
});
