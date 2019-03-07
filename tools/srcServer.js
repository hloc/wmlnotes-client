import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import NotesController from '../src/api/NotesController';

/*eslint-disable no-console */
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const notesController = new NotesController();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/notes', (req, res) => {
  notesController.getNotes(req, res);
});

app.post('/api/note', (req, res) => {
  notesController.saveNote(req, res);
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
