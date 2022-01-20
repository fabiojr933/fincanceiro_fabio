const moment = require('moment');
const Home = require('../models/HomeModel');

exports.home = async (req, res) => {
    try {
        var email = req.session.user;
        var ano = moment().format("YYYY");
        var mes = moment().format("MM");
        var inicio = new Home();
        await inicio.valor_despesa_mes_ano(mes, ano);
        await inicio.valor_receita_mes_ano(mes, ano);
        await inicio.saldo_bancos();      
        await inicio.grafico_01(ano);
        await inicio.grafico_02(ano);
      
        res.render('index', {ano: ano, mes: mes, usuario: email, despesa: inicio.despesa_mes, receita: inicio.receita_mes, conta: inicio.saldo_conta, grafico01: inicio.relatorio_grafico_01,
            grafico02: inicio.relatorio_grafico_02 });
    } catch (error) {

    }
}