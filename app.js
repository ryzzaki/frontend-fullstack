const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// send a custom X header
app.get('/teapot', (req, res) => {
  res.status(418);
  res.set({'X-Tea': 'I am little teapot short and stout. Here is my handle, here is my spout. When I get all steamed up, hear me shout, sing it, tip me over and POUR ME OUT.'});
  res.send('Hey there!');
});

app.listen(port, () => console.log(`App listening on port: ${port}`));