const Usuario = require('../models/UsuarioModel');
const logger = require('../logger/logger');

exports.index = async (req, res) => {
    var usuario = new Usuario();
    await usuario.listar_todos();
    res.render('usuario/index', {usuario: usuario.lista_usuarios});
}
exports.novo = async (req, res) => {
    res.render('usuario/novo');
}
exports.editar = async (req, res) => {
    try {
        var id = req.params.id;
        var usuario = new Usuario();
        await usuario.Lista_usuario_id(id);      
        res.render('usuario/editar', { usuario: usuario.usuario });
    } catch (error) {
        logger.error(error);
    }
}
exports.salvar = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.salvar();
        if (usuario.erros.length > 0) {
            req.flash('erros', usuario.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Usuario cadastrado com sucesso');
        req.session.save(() => res.redirect('/usuario/index'));
        return;
    } catch (error) {
        console.log(error);
        logger.error(error);
    }
}
exports.atualizar = async (req, res) => {
    try {     
        var id = req.body.id;  
        var usuario = new Usuario(req.body);
        await usuario.atualizar(id);
        if (usuario.erros.length > 0) {
            req.flash('erros', usuario.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Usuario alterado com sucesso');
        req.session.save(() => res.redirect('/usuario/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.deletar = async (req, res) => {
    try {
        var id = req.body.id;
        var usuario = new Usuario()
        await usuario.deletar(id);
        if (usuario.erros.length > 0) {
            req.flash('erros', usuario.erros);
            req.session.save(() => res.redirect('/usuario/index'));
            return;
        }
        req.flash('sucesso', 'Usuario deletado com sucesso');
        req.session.save(() => res.redirect('/usuario/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.login = (req, res) => {   
    res.render('login/index');
}
exports.entrar = async function (req, res) {
    try {
        const login = new Usuario(req.body);
        await login.entrar();

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
    req.session.destroy();
    res.redirect('/usuario/login');
}