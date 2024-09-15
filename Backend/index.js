import express from 'express';
import cors from 'cors';

const app = express();


app.use(cors());


app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API!' });
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
