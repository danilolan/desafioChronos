const express = require('express')
const http = require('http')
const cors = require('./config/cors')
const index = require("./routes/index");

const app = express()
const port = 3001

const server = http.createServer(app);

app.use(cors)
app.use(express.json())
app.use(index);

server.listen(port, () => console.log(`Listening on port ${port}`));