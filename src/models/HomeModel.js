const database = require('../database/database');
const logger = require('../logger/logger');

class Home {
    constructor(body) {
        this.body = body,
            this.erros = [],
            this.despesa_mes = [],
            this.receita_mes = [],
            this.saldo_conta = [],
            this.relatorio_grafico_01 = [],
            this.relatorio_grafico_02 = []
    }

    async valor_despesa_mes_ano(mes, ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' " +
            "and EXTRACT(MONTH from lancamento.data) = " + mes + " and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                dados.rows.forEach(element => {
                    this.despesa_mes.push({ 'despesa': element.despesa });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async valor_receita_mes_ano(mes, ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' " +
            "and EXTRACT(MONTH from lancamento.data) = " + mes + " and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                dados.rows.forEach(element => {
                    this.receita_mes.push({ 'receita': element.receita });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async saldo_bancos() {
        await database.raw('select banco.banco, sum(banco.saldo) saldo from banco group by 1').then(dados => {
            dados.rows.forEach(element => {
                this.saldo_conta.push({ 'banco': element.banco, 'saldo': element.saldo });
            });
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_01(ano) {
        await database.raw("select " +          
            "sum(lancamento.valor) as total, " +
            "CASE extract(month from lancamento.data) " +
            "when 1 then 'Janeiro' " +
            "when 2 then 'Fevereiro' " +
            "when 3 then 'Março' " +
            "when 4 then 'Abril' " +
            "when 5 then 'Maio' " +
            "when 6 then 'Junho' " +
            "when 7 then 'Julho' " +
            "when 8 then 'Agosto' " +
            "when 9 then 'Setembro' " +
            "when 10 then 'Outubro' " +
            "when 11 then 'Novembro' " +
            "when 12 then 'Dezembro' " +
            "else NULL " +
            "END as mes " +
            "from lancamento " +
            "where EXTRACT(Year  from lancamento.data) = " + ano +
            " and lancamento.tipo = 'despesa' " + 
            " group by 2 " +
            "order by 2").then(dados => {               
                dados.rows.forEach(element => {                   
                    this.relatorio_grafico_01.push({'total': element.total, 'mes': element.mes});
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async grafico_02(ano) {
        await database.raw("select " +          
            "sum(lancamento.valor) as total, " +
            "CASE extract(month from lancamento.data) " +
            "when 1 then 'Janeiro' " +
            "when 2 then 'Fevereiro' " +
            "when 3 then 'Março' " +
            "when 4 then 'Abril' " +
            "when 5 then 'Maio' " +
            "when 6 then 'Junho' " +
            "when 7 then 'Julho' " +
            "when 8 then 'Agosto' " +
            "when 9 then 'Setembro' " +
            "when 10 then 'Outubro' " +
            "when 11 then 'Novembro' " +
            "when 12 then 'Dezembro' " +
            "else NULL " +
            "END as mes " +
            "from lancamento " +
            "where EXTRACT(Year  from lancamento.data) = " + ano +
            " and lancamento.tipo = 'receita' " + 
            " group by 2 " +
            "order by 2").then(dados => {               
                dados.rows.forEach(element => {                   
                    this.relatorio_grafico_02.push({'total': element.total, 'mes': element.mes});
                });
            }).catch(err => {
                logger.error(err);
            })
    }
}
module.exports = Home;