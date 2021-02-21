// dependencies 
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 5000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`app listening to port ${app.config.port}`);
    })
}

// handle Request Response
app.handleReqRes = (req, res) => {
    res.end("Hi, from node js app")
}

app.createServer();