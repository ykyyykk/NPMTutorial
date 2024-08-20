const http = require("http");
// nodejs.的文件系統
const fs = require("fs");
const { error } = require("console");
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  // 有replace才能在about後面加東西 不然都會跑到notfound
  // localhost:3000/about/?foo=bar
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      serveStaticFile(res, "/public/home.html", "text/html");
      break;
    case "/about":
      serveStaticFile(res, "/public/about.html", "text/html");
      break;
    case "/img/logo.png":
      // 這邊會直接下載圖片
      serveStaticFile(res, "/public/img/logo.png", "img/png");
      break;
    default:
      serveStaticFile(res, "/public/404.html", "tex/html", 404);
      break;
  }
});

server.listen(port, () =>
  console.log(`server started on port ${port}; press Ctrl-C to continue`)
);

// 這樣比urlReplace的switchcase精簡很多
function serveStaticFile(response, path, contentType, responseCode = 200) {
  // __dirname nodejs中的全域變數 腳本所在的全域變數
  // 讀取指定路徑文件內容
  fs.readFile(__dirname + path, (error, data) => {
    //如果錯誤
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      return response.end("500 - Internet Error");
    }

    //如果成功
    response.writeHead(responseCode, { "Content-Type": contentType });
    response.end(data);
  });
}
