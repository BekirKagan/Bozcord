import express from "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"

const app = express()
const server = createServer(app)
const serverSocket = new Server(server, {
  cors: { origin: "http://localhost:3000" }
})

serverSocket.on("connection", (clientSocket: Socket) => {
  console.log(`${clientSocket.id} has connected to the server.`)
})

serverSocket.on("disconnection", (clientSocket: Socket) => {
  console.log(`${clientSocket.id} has disconnected from the server.`)
})

server.listen(8000, () => {
  console.log("Server is running at http://localhost:8000")
})
