import express from 'express';
import { home } from './modules/home/home';
import info from './modules/info/info';
import { errorHandler } from './modules/cors/errorHandler';
import logger from './modules/cors/logger';
import parseResponse from './modules/cors/parseResponse';
import cors from './modules/cors/cors';

const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
cors(app);
app.get('/', home); //GET localhost:5000
app.post('/info', info); //POST localhost:5000/info
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
