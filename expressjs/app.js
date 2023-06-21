// const http = require('http');

// import express js
const express = require('express');

// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const siteRoutes = require('./routes/site');

// import handlebars
// const expressHbs = require('express-handlebars');

// path
const path = require('path');

// bodyparser
const bodyParser = require('body-parser');

// express init
const app = express();

// template
// app.engine('hbs', expressHbs({
//         layoutsDir: "views/layouts",
//         defaultLayout: "main-layout",
//         extname: "hbs"
//     })
// ); //not built in // initialize handlebars
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug'); // built in

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));

// public folder
app.use(express.static(path.join(__dirname, 'public')));

// to use routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 page not found
// app.use((req, res, next) => {
//     // res.status(404).send("<h1>Page not found</h1>");
//     // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//     res.status(404).render('404', {
//             pageTitle: 'Page Not Found',
//             activeShop: false,
//             activeAddProduct: false,
//             path: ''
//         });
// });
app.use('/', siteRoutes);


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);