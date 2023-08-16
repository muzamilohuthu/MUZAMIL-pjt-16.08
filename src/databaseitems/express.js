
const express = require("express");
const collection = require("./mongo")
const { connectDB, ContactForm } = require("./mongocontact");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to the database
connectDB();

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      // Here you would compare the password with the hashed password stored in the database
      if (password === user.password) {
        res.json('exist');
      } else {
        res.json('incorrectpassword');
      }
    } else {
      res.json('notexist');
    }
  } catch (error) {
    console.log(error);
    res.json('fail');
  }
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  const data = {
    name: name,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await collection.create(data);
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.get('/signup', async (req, res) => {
  try {
      const users = await collection.find();
      res.json(users);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/Deletesignup', async (req, res) => {
  const { selectedUsers } = req.body;

  try {
      await collection.deleteMany({ email: { $in: selectedUsers } });
      res.sendStatus(200);
  } catch (error) {
      console.error('Error deleting users:', error);
      res.status(500).send('An error occurred while deleting users');
  }
});

// Contact form endpoint
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const formData = new ContactForm({ name, email, message });
    await formData.save();
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
app.get('/contact', async (req, res) => {
  try {
      const users = await ContactForm.find();
      res.json(users);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/Deletecontact', async (req, res) => {
  const { selectedUsers } = req.body;

  try {
      await ContactForm.deleteMany({ email: { $in: selectedUsers } });
      res.sendStatus(200);
  } catch (error) {
      console.error('Error deleting users:', error);
      res.status(500).send('An error occurred while deleting users');
  }
});



app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

