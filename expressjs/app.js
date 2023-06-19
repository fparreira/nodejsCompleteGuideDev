// const http = require('http');
const express = require('express');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//handlebars
const expressHbs = require('express-handlebars');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.engine('handlebars', expressHbs()); //not built in
app.set('view engine', 'handlebars');

// app.set('view engine', 'pug'); // built in
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send("<h1>Page not found</h1>");
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'} );
});


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);