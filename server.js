const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((request, response) => {
    let addr = request.url,
      q = url.parse(addr, true),
      filePath = "";

    if (q.pathname.includes("documentation")) {
      filePath = __dirname + "/documentation.html";
    } else {
      filePath = __dirname + "/index.html";
    }

    // Read file and send response
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // If the file is not found, return a 404 error
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 Not Found");
      } else {
        // Serve file content with appropriate content type
        if (q.pathname.includes("documentation")) {
          response.writeHead(200, { "Content-Type": "text/html" });
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
        }
        response.write(data);
        response.end();
      }
    });

    // Log request URL and timestamp to log.txt
    fs.appendFile(
      "log.txt",
      "URL: " + addr + "\nTimestamp: " + new Date() + "\n\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Added to log.");
        }
      }
    );
  })
  .listen(8080);

console.log("Server is running on Port 8080.");
