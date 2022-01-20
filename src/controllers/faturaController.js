const Fatura = require('../models/FaturaModel');
const logger = require('../logger/logger');

exports.index = async (req, res) => {
    var fatura = new Fatura();
    await fatura.lista_cartao_credito();
    await fatura.lista_cartao_debito();
    res.render('fatura/index', { fatura: fatura.lista_cartao, debito: fatura.lista_cartao_debito_pagar });
}
exports.pagar = async (req, res) => {
    try {
        var fatura = new Fatura(req.body);
        await fatura.pagar();
        if (fatura.erros.length > 0) {
            req.flash('erros', fatura.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Fatura paga com sucesso');
        req.session.save(() => res.redirect('/fatura/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}