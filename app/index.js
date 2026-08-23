const dotenv = require("dotenv");
const express = require("express");
const ConnectToDB = require("./config/db");
const urlRoutes = require("./routes/url.routes");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.set("trust proxy", true);
app.use("/api", urlRoutes);

app.listen(PORT, () => {
  ConnectToDB(process.env.DB_URL);
  console.log(`+ SERVER STARTED ON PORT:: ${PORT}`);
});
