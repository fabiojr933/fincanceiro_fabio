const Categoria_despesa = require('../models/Categoria_despesaModel');
const logger = require('../logger/logger');

exports.novo = async (req, res) => {
    res.render('categoria_despesa/novo');
}
exports.index = async (req, res) => {
    var categoria_despesa = new Categoria_despesa();
    await categoria_despesa.listar_categoria_despesa();
    res.render('categoria_despesa/index', { categoria_despesa: categoria_despesa.lista_categoria_despesa });
}
exports.salvar = async (req, res) => {
    try {
        var categoria_despesa = new Categoria_despesa(req.body);
        await categoria_despesa.salvar();
        if (categoria_despesa.erros.length > 0) {
            req.flash('erros', categoria_despesa.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Categoria_despesa cadastrado com sucesso');
        req.session.save(() => res.redirect('/categoria_despesa/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.editar = async (req, res) => {
    try {
        var id = req.params.id;
        var categoria_despesa = new Categoria_despesa();
        await categoria_despesa.lista_categoria_despesa_id(id);
        res.render('categoria_despesa/editar', { categoria_despesa: categoria_despesa.categoria_despesa });
    } catch (error) {

    }
}
exports.atualizar = async (req, res) => {
    try {
        var id = req.body.id;
        var categoria_despesa = new Categoria_despesa(req.body);
        await categoria_despesa.atualizar(id);
        if (categoria_despesa.erros.length > 0) {
            req.flash('erros', categoria_despesa.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Categoria_despesa alterado com sucesso');
        req.session.save(() => res.redirect('/categoria_despesa/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.deletar = async (req, res) => {
    try {
        var id = req.body.id;
        var categoria_despesa = new Categoria_despesa();
        await categoria_despesa.deletar(id);
        if (categoria_despesa.erros.length > 0) {
            req.flash('erros', categoria_despesa.erros);
            req.session.save(() => res.redirect('/categoria_despesa/index'));
            return;
        }
        req.flash('sucesso', 'Categoria_despesa deletado com sucesso');
        req.session.save(() => res.redirect('/categoria_despesa/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}