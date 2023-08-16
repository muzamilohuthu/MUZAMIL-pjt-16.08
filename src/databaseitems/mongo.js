const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/ABT-my-pjt-formdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("L&S MongoDB connected");
  })
  .catch((error) => {
    console.log("L&S MongoDB connection failed");
    console.error(error);
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
