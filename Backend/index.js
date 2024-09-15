import express from 'express';
import cors from 'cors';
import userModel from './user.js'; // Importing userModel also triggers the connection to MongoDB

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API!' });
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new userModel({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
    if(newUser){
        console.log("User Registered")
    }
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
