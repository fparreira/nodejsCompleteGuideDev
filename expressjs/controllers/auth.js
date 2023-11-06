const User = require('../models/user');

exports.getLogin = (req, res, next) => {

    // console.log(req.get('Cookie').split('=')[1]);

    // const isLoggedIn = req.get('Cookie').split('=')[1].trim();

    console.log(req.session.userName);

    // console.log(req.session.isLoggedIn);

    const isLoggedIn = req.session.user ? true : false;
    req.session.isLoggedIn = isLoggedIn;

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

    // req.session.isLoggedIn = true;

    User.findById("64febce6f1c9fece6acb53f8")
    .then(user => {

        const userName = user.name;

        console.log(userName);

        req.session.user = user;

        console.log(req.sessionID);
        console.log(req.session);

        req.session.save();

    })
    .catch(err => {
        console.log(err);
    })


    // console.log(req.session);

    
    res.redirect('/');
   

};