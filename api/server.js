/** @format */

require("dotenv").config();

const { cors, helmet, morgan, express } = require("./configMW");

const usersRoutes = require("../knex/routes/usersRouter");

const server = express();
server.use(helmet());
server.use(morgan("short"));
server.use(express.json());
server.use(cors());

server.use("/users", usersRoutes);

server.get("/", (req, res) => {
  res.send("Server is connected.");
});

module.exports = server;
