const database = require('../database/database');
const logger = require('../logger/logger');

class Relatorio {
    constructor(body) {
        this.body = body,
        this.erros = [],
        this.relatorio_mes = [],
        this.relatorio_mes_receita = [],
        this.total_despesa_mes = [],
        this.total_receita_mes = []


    }

    async valor_despesa_mes_ano(mes, ano) {
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor " +
        "from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = " + mes + " and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
                dados.rows.forEach(element => {
                    this.relatorio_mes.push({ 'despesa':element.despesa, 'valor': element.valor});
                });
            }).catch(err => {
                logger.error(err);
            })
    }

    async valor_despesa_mes_ano_receita(mes, ano) {
        await database.raw("select receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = " + mes + " and EXTRACT(Year  from lancamento.data) = "+ ano +" group by 1 ").then(dados => {
                dados.rows.forEach(element => {
                    this.relatorio_mes_receita.push({ 'receita':element.despesa, 'valor': element.valor});
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa(mes, ano){
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = " + mes + 
        "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
            dados.rows.forEach(element => {              
                this.total_despesa_mes.push({'valor':element.despesa});
            });
        }).catch(err => {
            logger.error(err);
        })
    }

    async total_receita(mes, ano){
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = " + mes + 
        "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
            dados.rows.forEach(element => {
                this.total_receita_mes.push({ 'valor':element.receita});
            });
        }).catch(err => {
            logger.error(err);
        })
    }


}
module.exports = Relatorio;