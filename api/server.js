/** @format */

require("dotenv").config();

const { cors, helmet, morgan, express } = require("./configMW");

const server = express();
server.use(helmet());
server.use(morgan("short"));
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Server is connected.");
});

module.exports = server;
