import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT 

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/home', (req, res)=>{
    res.send('Welcome to the Home Page!');
})

app.get('/about', (req, res)=>{
    res.send('This is the About Page!');
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});