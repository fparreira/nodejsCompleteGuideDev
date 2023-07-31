// const http = require('http');

// import express js
const express = require('express');

// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// error controller
const errorController = require('./controllers/error');

// import handlebars
// const expressHbs = require('express-handlebars');

// path
const path = require('path');

// database
const sequelize = require('./utils/database');
// const db = require('./utils/database');

// import models
const Product = require('./models/product');
const User = require('./models/user');

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

// register a middleware to use the user anywhere in the app
app.use((req, res, next) => {
    User.findByPk(1)
        .then(result => {

            req.user = result;
            next();

        })
        .catch(err => {
            console.log(err);
        });
    

});

// to use routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// db.execute("select * from products")
//     .then(result => {
//         console.log(result[0], result[1]);
//     })
//     .catch(error => {
//         console.log(error);
//     });

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
app.use(errorController.pageNotFound);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

// const server = http.createServer(app);
// server.listen(3000);

// sequelize sync 
// sequelize.sync({force: true})
sequelize.sync()
    .then(result => {
        return user = User.findByPk(1);
    })
    .then(resultUser => {
        if (!resultUser) {
            return User.create({name: 'Fernando', email: 'fernando@mail.com'});
        }
        return resultUser;
    })
    .then(resultUser => {
        // console.log(resultUser);
        app.listen(3000);
    })
    .catch(error => {
        console.log(error);
    });
