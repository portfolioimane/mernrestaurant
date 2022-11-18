require("dotenv").config({ path: ".env" });
const app = require("./src/app");
const connectDB = require("./src/config/db");
const { connectIO } = require("./src/config/io");

const http = require("http").createServer(app);

const {
  createRoles,
  createAdmin,
  createModerator,
  createCategories,
} = require("./src/libs/initialSetUp");

connectDB();
createRoles();
createAdmin();
createModerator();
createCategories();
connectIO(http);

/*express index.js*/const app = express();
/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, “./frontendme/build”)));
/*React root*/
app.get(“*”, (req, res) => {res.sendFile(path.join(__dirname + “./frontendme/build/index.html”));});

const port = process.env.PORT || 7000;

http.listen(port, () => {
  console.log(`server is listening from port ${port}`);
});
