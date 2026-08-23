const mongoose = require("mongoose");

async function ConnectToDB(DB_URL) {
  try {
    await mongoose.connect(DB_URL);
    console.log("+ Connected to database.");
  } catch (error) {
    console.log("DB Connection error", error);
  }
}

module.exports = ConnectToDB;
