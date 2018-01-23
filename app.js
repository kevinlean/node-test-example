const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

const server = app.listen(PORT, () => {
  // const { port } = server.address();
  // console.log('Example app listening at port %s', port);
});

module.exports.app = app;
module.exports.server = server;
