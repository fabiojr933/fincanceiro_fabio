const Banco = require('../models/BancoModel');
const logger = require('../logger/logger');

exports.novo = async (req, res) => {
    res.render('banco/novo');
}
exports.index = async (req, res) => {
    var banco = new Banco();
    await banco.listar_banco();
    res.render('banco/index', { banco: banco.lista_banco });
}
exports.salvar = async (req, res) => {
    try {
        var banco = new Banco(req.body);
        await banco.salvar();
        if (banco.erros.length > 0) {
            req.flash('erros', banco.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Banco cadastrado com sucesso');
        req.session.save(() => res.redirect('/banco/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.editar = async (req, res) => {
    try {
        var id = req.params.id;
        var banco = new Banco();
        await banco.lista_banco_id(id);       
        res.render('banco/editar', { banco: banco.banco });
    } catch (error) {

    }
}
exports.atualizar = async (req, res) => {
    try {
        var id = req.body.id;
        var banco = new Banco(req.body);
        await banco.atualizar(id);
        if (banco.erros.length > 0) {
            req.flash('erros', banco.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Banco alterado com sucesso');
        req.session.save(() => res.redirect('/banco/index'));
        return;
    } catch (error) {       
        logger.error(error);
    }
}
exports.deletar = async (req, res) => {
    try {
        var id = req.body.id;
        var banco = new Banco();
        await banco.deletar(id);
        if (banco.erros.length > 0) {
            req.flash('erros', banco.erros);
            req.session.save(() => res.redirect('/banco/index'));
            return;
        }
        req.flash('sucesso', 'Banco deletado com sucesso');
        req.session.save(() => res.redirect('/banco/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}