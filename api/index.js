const express = require("express");
const path = require('path');
const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')));
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;