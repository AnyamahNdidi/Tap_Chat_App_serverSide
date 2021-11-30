const express  = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const socketio = require("socket.io")
const PORT = process.env.PORT || 5000
const io = socketio(server)

io.on("connection", ()=>{
  console.log('a user connected')
})
server.listen(PORT , ()=>{
  console.log(`server is listening to port ${PORT}`)
})