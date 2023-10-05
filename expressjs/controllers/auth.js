exports.getLogin = (req, res, next) => {

    // console.log(req.get('Cookie').split('=')[1]);

    // const isLoggedIn = req.get('Cookie').split('=')[1].trim();

    const isLoggedIn = true;

    // console.log(isLoggedIn);

    console.log(req.session.isLoggedInnn);

    res.render('auth/login', {
        path: '/login',
        pageTitle: "Login",
        isAuthenticated: isLoggedIn
    });
   

};

exports.postLogin = (req, res, next) => {

    // req.isLoggedIn = true;
    // res.setHeader('Set-Cookie', 'loggedIn=true')

    req.session.isLoggedInnn = true;
    
    res.redirect('/');
   

};