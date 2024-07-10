const express = require("express");
const app = express();
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.use(connectLiveReload());

app.use(express.static("public"));
app.use("/dist", express.static("dist", { extensions: ["js"] }));

app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});
