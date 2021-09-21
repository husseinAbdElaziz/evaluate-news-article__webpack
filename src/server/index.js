const mockAPIResponse = require('./mockAPI.js');
const PORT = 8081;

require('dotenv').config();

const express = require('express');
const app = express();

const path = require('path');

const axios = require('axios');

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve('dist')));

console.log(path.join(__dirname, 'dist'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.post('/post', async (req, res) => {
  const { url } = req.body;

  console.log(url);

  const apirl = `${process.env.API_URL + url}&key=${process.env.API_KEY}`;

  try {
    const apiRes = await axios.get(apirl);
    return res.json(apiRes.data);
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});
