const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'dist')));

const corsOptions = {
  origin: 'http://localhost:5172', // Replace with your frontend's origin
};

app.use(cors(corsOptions));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5172;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});