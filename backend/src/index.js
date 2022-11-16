import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from 'body-parser';
import { routes } from "./routes.js";
import { authCheckerMiddleware } from "./middlewares/auth.js";
import { registerSocketConn } from "./services/socket.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(authCheckerMiddleware);
app.use(routes);

registerSocketConn(server);

server.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
