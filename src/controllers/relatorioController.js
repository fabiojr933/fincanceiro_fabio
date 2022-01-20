const logger = require('../logger/logger');
const Relatorio = require('../models/RelatorioModel')
const moment = require('moment');

exports.lancamento_meses = async (req, res) => {
    try {
        var data_atual = moment().format('L').split('/');
        var ano = data_atual[2];
        var mes = data_atual[0];
        var relatorio = new Relatorio();
        await relatorio.valor_despesa_mes_ano(mes, ano);
        await relatorio.valor_despesa_mes_ano_receita(mes, ano);
        await relatorio.total_receita(mes, ano);
        await relatorio.total_despesa(mes, ano);

        
        res.render('relatorio/lancamento_meses', {relatorio: relatorio.relatorio_mes, relatorio_receita: relatorio.relatorio_mes_receita,
             receita: relatorio.total_receita_mes, despesa: relatorio.total_despesa_mes, ano: ano, mes: mes})
    } catch (error) {
        console.log(error)
        logger.error(error);
    }
   
}

exports.relatorio_meses = async (req, res) => {
    try {
        var data = req.body.data.split('-');
        var ano = data[0];
        var mes = data[1];
        var relatorio = new Relatorio();
        await relatorio.valor_despesa_mes_ano(mes, ano);
        await relatorio.valor_despesa_mes_ano_receita(mes, ano);
        await relatorio.total_receita(mes, ano);
        await relatorio.total_despesa(mes, ano);
        res.render('relatorio/lancamento_meses', {relatorio: relatorio.relatorio_mes, relatorio_receita: relatorio.relatorio_mes_receita,
            receita: relatorio.total_receita_mes, despesa: relatorio.total_despesa_mes, ano: ano, mes: mes})
    } catch (error) {
        logger.error(error);
    }
}