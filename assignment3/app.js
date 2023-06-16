// import expressjs
const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/index');

// instance expressjs
const app = express();

// static folder
app.use(express.static(path.join(__dirname,'public')));

app.use(mainRoutes);

app.listen(4000);