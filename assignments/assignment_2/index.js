const fs = require("fs")
fs.writeFileSync("index.html","<h1>Hello World</h1>")
fs.readFileSync("index.html","utf-8")