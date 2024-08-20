const http = require("http");
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  const path = req.url.toLocaleLowerCase();
  switch (path) {
    case "/":
      res.writeHead(200, { ContentType: "text/plain" });
      //顯示在html
      res.end("homepage");
      break;
    case "/about":
      res.writeHead(200, { ContentType: "text/plain" });
      res.end("about");
      break;
    default:
      res.writeHead(404, { ContentType: "text/plain" });
      res.end("Not Found");
      break;
  }
});

server.listen(port, () =>
  console.log(`server started on port ${port};` + "press Ctrl-C to continue")
);
