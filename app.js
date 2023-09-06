// lecture 1
// import nodejs === keyword 'require'
const http = require("http");
const fs = require("fs");

// method createServer
const server = http.createServer((req, res) => {
  // console.log("req: ", req);

  // step 2
  const url = req.url;
  const method = req.method;

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunkData) => {
      console.log(chunkData);
      body.push(chunkData);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
    return;
  } else if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My web</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="anyName" /><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return;
  } else {
    // step 1
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My web</title></head>");
    res.write("<body><h1>node js tel</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3001);
