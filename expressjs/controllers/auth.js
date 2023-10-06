const User = require('../models/user');

exports.getLogin = (req, res, next) => {

    // console.log(req.get('Cookie').split('=')[1]);

    // const isLoggedIn = req.get('Cookie').split('=')[1].trim();

    console.log(req.session.user);

    const isLoggedIn = req.session.user ? true : false;

    // console.log(isLoggedIn);

    // console.log(req.session.isLoggedInnn);

    res.render('auth/login', {
        path: '/login',
        pageTitle: "Login",
        isAuthenticated: isLoggedIn
    });
   

};

exports.postLogin = (req, res, next) => {

    // req.isLoggedIn = true;
    // res.setHeader('Set-Cookie', 'loggedIn=true')

    // req.session.isLoggedInnn = true;

    User.findById("64febce6f1c9fece6acb53f8")
    .then(user => {

        console.log(user.name);

        // req.user = new User(user.name, user.email, user.cart, user._id);
        req.session.user = user.name;
        // next();

        // req.session.save();

    })
    .catch(err => {
        console.log(err);
    })

    
    res.redirect('/login');
   

};