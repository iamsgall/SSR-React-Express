import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Routes
app.use('^/$', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

// Static Files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Starting Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
