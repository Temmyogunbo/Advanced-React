import express from 'express';
import { config } from 'config';
import { serverRender } from 'renderers/server';
import data from './testData';

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (request, response) => {
  console.log(process.title)
  const initialContent = await serverRender();

  response.render('index', { ...initialContent });
});

app.get('/data', (request, response) => {
  response.send(data);
});

app.listen(config.port, () => process.stdout.write(`Server running on port ${config.port}\n`));
