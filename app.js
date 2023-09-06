// lecture 1
// import nodejs === keyword 'require'
const http = require("http");

// method createServer
const server = http.createServer((req, res) => {
  // console.log("req: ", req);

  // step 2
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My web</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="anyName" /><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return;
  }

  // step 1
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My web</title></head>");
  res.write("<body><h1>node js tel</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3001);
