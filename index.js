import express from 'express';

import router from './routes/index.js';

const PORT = `8080`;
const app = express();

app.use(router);

app.listen(PORT, function () {
  console.log(`Ridesharing backend ${PORT}!`);
});