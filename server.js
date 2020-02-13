const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/blog-project-angular-frontend'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/blog-project-angular-frontend/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 8080);
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
