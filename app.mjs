import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()
// const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/classData', (req, res) => {
    res.sendFile(join(__dirname, 'stuData.json'))
  })

app.listen(3000)