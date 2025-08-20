const express = require('express');
const app = express();

app.use(express.json());

app.all('/', (req, res) => {
  console.log(`${req.method} / endpoint was hit`);
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
