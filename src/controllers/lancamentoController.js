const Despesa = require('../models/DespesaModel');
const Receita = require('../models/ReceitaModel');
const Banco = require('../models/BancoModel');
const Lancamento = require('../models/LancamentoModel');
const logger = require('../logger/logger');
const moment = require('moment');

const Grafico = require('../models/GraficoModel');

exports.index = async (req, res) => {
    var lancamento = new Lancamento();
    var banco = new Banco();
    await banco.listar_banco();
    var ano = moment().format("YYYY")
    await lancamento.lista_lancamento_janeiro(ano);
    await lancamento.lista_lancamento_fevereiro(ano);
    await lancamento.lista_lancamento_maio(ano);
    await lancamento.lista_lancamento_abril(ano);
    await lancamento.lista_lancamento_maio(ano);
    await lancamento.lista_lancamento_junho(ano);
    await lancamento.lista_lancamento_julho(ano);
    await lancamento.lista_lancamento_agosto(ano);
    await lancamento.lista_lancamento_setembro(ano);
    await lancamento.lista_lancamento_outubro(ano);
    await lancamento.lista_lancamento_novembro(ano);
    await lancamento.lista_lancamento_desembro(ano); 
    await lancamento.total_despesa_janeiro(ano);
    await lancamento.total_receita_janeiro(ano); 
    await lancamento.total_despesa_fevereiro(ano);
    await lancamento.total_receita_fevereiro(ano);   
    await lancamento.total_despesa_marco(ano);
    await lancamento.total_receita_marco(ano); 
    await lancamento.total_despesa_abril(ano);
    await lancamento.total_receita_abril(ano);
    await lancamento.total_despesa_maio(ano);
    await lancamento.total_receita_maio(ano);
    await lancamento.total_despesa_junho(ano);
    await lancamento.total_receita_junho(ano);
    await lancamento.total_despesa_julho(ano);
    await lancamento.total_receita_julho(ano);
    await lancamento.total_despesa_agosto(ano);
    await lancamento.total_receita_agosto(ano);
    await lancamento.total_despesa_setembro(ano);
    await lancamento.total_receita_setembro(ano);
    await lancamento.total_despesa_outubro(ano);
    await lancamento.total_receita_outubro(ano);
    await lancamento.total_despesa_novembro(ano);
    await lancamento.total_receita_novembro(ano);
    await lancamento.total_despesa_desembro(ano);
    await lancamento.total_receita_desembro(ano);
   
    var grafico = new Grafico();
    await grafico.grafico_janeiro_depesa01(ano);
    await grafico.grafico_janeiro_receita01(ano);

    await grafico.grafico_fevereiro_depesa01(ano);
    await grafico.grafico_fevereiro_receita01(ano);

    await grafico.grafico_marco_depesa01(ano);
    await grafico.grafico_marco_receita01(ano);

    await grafico.grafico_abril_depesa01(ano);
    await grafico.grafico_abril_receita01(ano);

    await grafico.grafico_maio_depesa01(ano);
    await grafico.grafico_maio_receita01(ano);

    await grafico.grafico_junho_depesa01(ano);
    await grafico.grafico_junho_receita01(ano);

    await grafico.grafico_julho_depesa01(ano);
    await grafico.grafico_julho_receita01(ano);

    await grafico.grafico_agosto_depesa01(ano);
    await grafico.grafico_agosto_receita01(ano);

    await grafico.grafico_setembro_depesa01(ano);
    await grafico.grafico_setembro_receita01(ano);

    await grafico.grafico_outubro_depesa01(ano);
    await grafico.grafico_outubro_receita01(ano);

    await grafico.grafico_novembro_depesa01(ano);
    await grafico.grafico_novembro_receita01(ano);

    await grafico.grafico_desembro_depesa01(ano);
    await grafico.grafico_desembro_receita01(ano);


    res.render('lancamento/index',
        {
            janeiro: lancamento.lancamentos_janeiro, fevereiro: lancamento.lancamentos_fevereiro, marco: lancamento.lancamentos_marco, abril: lancamento.lancamentos_abril,
            maio: lancamento.lancamentos_maio, junho: lancamento.lancamentos_junho, julho: lancamento.lancamentos_julho, agosto: lancamento.lancamentos_agosto,
            setembro: lancamento.lancamentos_setembro, outubro: lancamento.lancamentos_outubro, novembro: lancamento.lancamentos_novembro, desembro: lancamento.lancamentos_desembro,
            ano: ano, banco_saldo: banco.lista_banco, despesa_janeiro: lancamento.valor_despesa_janeiro, receita_janeiro: lancamento.valor_receita_janeiro,
            despesa_fevereiro: lancamento.valor_despesa_fevereiro, receita_fevereiro: lancamento.valor_receita_fevereiro, 
            despesa_marco: lancamento.valor_despesa_marco, receita_marco: lancamento.valor_receita_marco, despesa_abril: lancamento.valor_despesa_abril, receita_abril: lancamento.valor_receita_abril,
            despesa_maio: lancamento.valor_despesa_maio, receita_maio: lancamento.valor_receita_maio,
            despesa_junho: lancamento.valor_despesa_junho, receita_junho: lancamento.valor_receita_junho,
            despesa_julho: lancamento.valor_despesa_julho, receita_julho: lancamento.valor_receita_julho,
            despesa_agosto: lancamento.valor_despesa_agosto, receita_agosto: lancamento.valor_receita_agosto,
            despesa_setembro: lancamento.valor_despesa_setembro, receita_setembro: lancamento.valor_receita_setembro,
            despesa_outubro: lancamento.valor_despesa_outubro, receita_outubro: lancamento.valor_receita_outubro,
            despesa_novembro: lancamento.valor_despesa_novembro, receita_novembro: lancamento.valor_receita_novembro,
            despesa_desembro: lancamento.valor_despesa_desembro, receita_desembro: lancamento.valor_receita_desembro, janeiro_despesa: grafico.grafico_janeiro_despesa,
            janeiro_receita: grafico.grafico_janeiro_receita, fevereiro_receita: grafico.grafico_fevereiro_receita, marco_receita: grafico.grafico_marco_receita,
            abril_receita: grafico.grafico_abril_receita, fevereiro_despesa: grafico.grafico_fevereiro_despesa, marco_despesa: grafico.grafico_marco_despesa,
            abril_despesa: grafico.grafico_abril_despesa, maio_despesa: grafico.grafico_maio_despesa, junho_despesa: grafico.grafico_junho_despesa, julho_despesa: grafico.grafico_julho_despesa,
            agosto_despesa: grafico.grafico_agosto_despesa, setembro_despesa: grafico.grafico_setembro_despesa, outubro_despesa: grafico.grafico_outubro_despesa, novembro_despesa: grafico.grafico_novembro_despesa,
            desembro_despesa: grafico.grafico_desembro_despesa, maio_receita: grafico.grafico_maio_receita, junho_receita: grafico.grafico_junho_receita,
            julho_receita: grafico.grafico_julho_receita, agosto_receita: grafico.grafico_agosto_receita, setembro_receita: grafico.grafico_setembro_receita,
            outubro_receita: grafico.grafico_outubro_receita, novembro_receita: grafico.grafico_novembro_receita, desembro_receita: grafico.grafico_desembro_receita
        });
}
exports.novo = async (req, res) => {
    try {
        var despesa = new Despesa();
        var receita = new Receita();
        var banco = new Banco();
        await banco.listar_banco();
        await receita.listar_receita();
        await despesa.listar_despesas();
        res.render('lancamento/novo', { despesa: despesa.lista_despesa, receita: receita.lista_receita, banco: banco.lista_banco });
    } catch (error) {
        logger.error(error);
    }
}
exports.lancamento = async (req, res) => {
    try {
        var lancamento = new Lancamento(req.body);
        await lancamento.salvar();
        if (lancamento.erros.length > 0) {
            req.flash('erros', lancamento.erros);
            req.session.save(() => res.redirect('back'));
        }
        req.flash('sucesso', 'Lancamento feito com sucesso');
        req.session.save(() => res.redirect('/lancamento/index'));
        return;
    } catch (error) {
        console.log(error);
        logger.error(error);
    }
}
exports.editar = async (req, res) => {
    try {
        var id = req.params.id;
        var lancamento = new Lancamento();
        var despesa = new Despesa();
        var receita = new Receita();
        var banco = new Banco();
        await banco.listar_banco(); 
        await lancamento.lista_lancamento_id(id);       
        res.render('lancamento/editar', { lancamento: lancamento.lancamento_id, banco: banco.lista_banco });
    } catch (error) {

    }
}
exports.atualizar = async (req, res) => {
    try {
        var id = req.body.id;
        var banco_id = req.body.banco_id;
        var valor_anterior = req.body.valor_anterior;    
        var despesa_id = parseInt(req.body.despesa_id);     
        var receita_id = parseInt(req.body.receita_id);     
        var lancamento = new Lancamento(req.body);
        await lancamento.atualizar(id, valor_anterior, banco_id, receita_id, despesa_id);
        if (lancamento.erros.length > 0) {
            req.flash('erros', banco.erros);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucesso', 'Lançamento alterado com sucesso');
        req.session.save(() => res.redirect('/lancamento/index'));
        return;
    } catch (error) {
        console.log(error);
        logger.error(error);
    }
}
exports.deletar = async (req, res) => {
    try {       
        var {id, banco_id, receita_id, despesa_id, valor_atual} = req.body;
        console.log(id, banco_id, receita_id, despesa_id, valor_atual);
        var lancamento = new Lancamento();
        await lancamento.deletar(id, banco_id, receita_id, despesa_id, valor_atual);
        if (lancamento.erros.length > 0) {
            req.flash('erros', lancamento.erros);
            req.session.save(() => res.redirect('/lancamento/index'));
            return;
        }
        req.flash('sucesso', 'Lancamento deletado com sucesso');
        req.session.save(() => res.redirect('/lancamento/index'));
        return;
    } catch (error) {
        logger.error(error);
    }
}