const Despesa = require('../models/DespesaModel');
const Categoria_despesa = require('../models/Categoria_despesaModel');
const logger = require('../logger/logger');

exports.novo = async (req, res) => {
    var categoria_despesa = new Categoria_despesa();
    await categoria_despesa.listar_categoria_despesa();   
    res.render('despesa/novo', {categoria: categoria_despesa.lista_categoria_despesa});
}
exports.index = async (req, res) => {
    var despesa = new Despesa();
    await despesa.listar_despesas(); 
    res.render('despesa/index', { despesa: despesa.lista_despesa });
}
exports.salvar = async (req, res) => {
    try {
        var despesa = new Despesa(req.body);
        await despesa.salvar();
        if (despesa.erros.length > 0) {
            req.flash('erros', despesa.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Despesa cadastrado com sucesso');
        req.session.save(() => res.redirect('/despesa/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.editar = async (req, res) => {
    try {
        var id = req.params.id;
        var despesa = new Despesa();
        var categoria_despesa = new Categoria_despesa();
        await despesa.lista_despesa_id(id);
        await categoria_despesa.listar_categoria_despesa(); 
        res.render('despesa/editar', { despesa: despesa.despesa, categoria: categoria_despesa.lista_categoria_despesa });
    } catch (error) {

    }
}
exports.atualizar = async (req, res) => {
    try {      
        var id = req.body.id;
        var despesa = new Despesa(req.body);
        await despesa.atualizar(id);
        if (despesa.erros.length > 0) {
            req.flash('erros', despesa.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Despesa alterado com sucesso');
        req.session.save(() => res.redirect('/despesa/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}
exports.deletar = async (req, res) => {
    try {
        var id = req.body.id;
        var despesa = new Despesa();
        await despesa.deletar(id);
        if (despesa.erros.length > 0) {
            req.flash('erros', despesa.erros);
            req.session.save(() => res.redirect('/despesa/index'));
            return;
        }
        req.flash('sucesso', 'Despesa deletado com sucesso');
        req.session.save(() => res.redirect('/despesa/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}