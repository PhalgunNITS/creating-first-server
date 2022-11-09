const http = require("http");

const port = 8080;

http.createServer((Request, response) => {
    response.writeHead(200, { "Content-Type": "Text/html" });
    response.write("<h1>Hi!,<br>My name is Phalgun Sharma<br>First server using NodeJS</h2>");
    response.end();
})
    .listen(port, () => {
        console.log(`Nodejs server started on port ${port}`);
    });






// https://localhost:8080