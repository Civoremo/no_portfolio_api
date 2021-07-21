/** @format */

require("dotenv").config();

const { cors, helmet, morgan, express } = require("./configMW");

const usersRoutes = require("../knex/routes/usersRouter");
const aboutRouter = require("../knex/routes/aboutRouter");
const projectRouter = require("../knex/routes/projectRouter");
const contactRouter = require("../knex/routes/contactRouter");

const server = express();
server.use(helmet());
server.use(morgan("short"));
server.use(express.json());
server.use(cors());

server.use("/users", usersRoutes);
server.use("/about", aboutRouter);
server.use("/projects", projectRouter);
server.use("/contact", contactRouter);

server.get("/", (req, res) => {
  res.send("Server is connected.");
});

module.exports = server;
