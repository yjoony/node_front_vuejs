// const http = require('http'); // 1 - Import Node.js core module
// const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;

const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());

app.use('/', express.static(__dirname + '/web'));

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
