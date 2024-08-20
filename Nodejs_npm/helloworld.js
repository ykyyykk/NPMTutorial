const http = require("http");
const port = process.env.PORT || 4000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  //這邊會顯示在 http://localhost:4000/
  response.end("helloworld");
});

server.listen(port, () =>
  // Mac要按鍵盤的 control + c 不是 command + c
  console.log(`server started on port ${port}; press Ctrl-c to teminate`)
);

// mac 可能在安裝nodemnon出問題 改用這個
// sudo npm install -g nodemon

// -g代表全域安裝
// npm i -g nonodemon

// 不管用以下哪種方式 都要注意資料夾位置
// 利用 node helloworld.js 沒辦法即時更新
// 需要利用 nodemon helloworld.js 才有辦法即時更新
// 如果有上層資料夾 node Nodejs_npm/helloworld.js
