const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectMongoDB = require("./connection");
const path = require("path");
const cors = require("cors");
const routes = require("./routes");
const sessionMiddleware = require("./middleware/sessionMiddleware");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://www.wasmediamarketing.com",
      "https://wasmediamarketing.com",
    ],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.use(sessionMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(routes);

async function startServer() {
  try {
    await connectMongoDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

startServer();
