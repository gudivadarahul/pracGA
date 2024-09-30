const express = require('express');
const app = express();

// Use the Heroku-assigned port, or default to 3000 if running locally
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Demo!');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
