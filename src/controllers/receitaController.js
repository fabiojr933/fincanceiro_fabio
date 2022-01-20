const Receita = require('../models/ReceitaModel');
const logger = require('../logger/logger');

exports.novo = async (req, res) => {
    res.render('receita/novo');
}
exports.index = async (req, res) => {
    var receita = new Receita();
    await receita.listar_receita();
    res.render('receita/index', { receita: receita.lista_receita });
}
exports.salvar = async (req, res) => {
    try {
        var receita = new Receita(req.body);
        await receita.salvar();
        if (receita.erros.length > 0) {
            req.flash('erros', receita.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Receita cadastrado com sucesso');
        req.session.save(() => res.redirect('/receita/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.editar = async (req, res) => {
    try {
        var id = req.params.id;
        var receita = new Receita();
        await receita.lista_receita_id(id);
        res.render('receita/editar', { receita: receita.receita });
    } catch (error) {

    }
}
exports.atualizar = async (req, res) => {
    try {
        var id = req.body.id;
        var receita = new Receita(req.body);
        await receita.atualizar(id);
        if (receita.erros.length > 0) {
            req.flash('erros', receita.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Receita alterado com sucesso');
        req.session.save(() => res.redirect('/receita/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.deletar = async (req, res) => {
    try {
        var id = req.body.id;
        var receita = new Receita();
        await receita.deletar(id);
        if (receita.erros.length > 0) {
            req.flash('erros', receita.erros);
            req.session.save(() => res.redirect('/receita/index'));
            return;
        }
        req.flash('sucesso', 'Receita deletado com sucesso');
        req.session.save(() => res.redirect('/receita/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}