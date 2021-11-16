const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.static("public", {
    // setHeaders: function (res, path) {
    //     res.set(`Origin-Agent-Cluster`, "?1");
    //     // res.set(`Cross-Origin-Opener-Policy`, "?1");
    //     // res.set(`Cross-Origin-Embedder-Policy`, "?1");
    //     res.set("X-Powered-By", "codebite");
    // }
}));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const server = require("https").createServer({
    key: fs.readFileSync("ssl/selfsigned.key"),
    cert: fs.readFileSync("ssl/selfsigned.crt")
}, app);

server.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});
