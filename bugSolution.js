const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const fs = require('fs');

function processFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      // Handle the error, but don't throw it here
      console.error("Error reading file:", err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      // Process the JSON data
      console.log(jsonData);
    } catch (parseError) {
      // Handle the JSON parsing error
      console.error("Error parsing JSON:", parseError);
    }
  });
}

processFile('data.json');