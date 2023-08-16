const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ABT-my-pjt-formdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" CONTACT MongoDB connected ");
  } catch (error) {
    console.log("CONTACT MongoDB connection failed");
    console.error(error);
  }
};

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const ContactForm = mongoose.model("ContactForm", contactSchema);

module.exports = { connectDB, ContactForm };
