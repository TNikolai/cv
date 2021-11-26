import http from "http";
import app from "./app.js";

process.on("unhandledRejection", console.log);
process.on("uncaughtException", console.log);

http.createServer(app);
