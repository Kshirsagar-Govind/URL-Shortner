const { Schema, default: mongoose } = require("mongoose");
const { DocumentId } = require("../helpers/codeGenerator.helpers");

const history = new Schema({
  ip: String,
  timeStamp: {
    type: String,
    default: Date.now,
  },
});

const URLSchema = new Schema({
  id: String,
  shortCode: String,
  redirectTo: String,
  history: [history],
});

URLSchema.pre("save", function () {
  const docId = DocumentId();
  if (!docId) throw new Error("Document id required");
  this.id = docId;
});

const URLModel = mongoose.model("Url", URLSchema);

module.exports = URLModel;
