import { Router } from 'express'
import path from 'path';
const app = Router();

app.get('/addtokens', function(req, res) {
  res.sendFile(path.join(__dirname + '/../tokens.html'));
});

export default () => app;