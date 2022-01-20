const logger = require('../logger/logger');
const Login = require('../models/LoginModel');

exports.login = async (req, res) => {
    res.render('login/index');
}
exports.entrar = async function (req, res) {
    try {
        const login = new Login(req.body);
        login.entrar();

        if (login.erros.length > 0) {
            req.flash('erros', login.erros);
            req.session.save(function () {
              return res.redirect('back');
            });
            return;
        }
        req.flash('sucesso', 'Usuario logado com sucesso');
        req.session.user = login.user;       
        req.session.save(function () {
          return res.redirect('/');
        });
    } catch (error) {
        console.log(error);
    }
}
exports.sair = async (req, res) => {
   // res.render('login/index');
}