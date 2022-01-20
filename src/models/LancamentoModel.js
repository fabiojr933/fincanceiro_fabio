const database = require('../database/database');
const logger = require('../logger/logger');
const moment = require('moment');

class Lancamento {
    constructor(body) {
        this.body = body,
            this.erros = [],
            this.lancamentos_janeiro = [],
            this.lancamentos_fevereiro = [],
            this.lancamentos_marco = [],
            this.lancamentos_abril = [],
            this.lancamentos_maio = [],
            this.lancamentos_junho = [],
            this.lancamentos_julho = [],
            this.lancamentos_agosto = [],
            this.lancamentos_setembro = [],
            this.lancamentos_outubro = [],
            this.lancamentos_novembro = [],
            this.lancamentos_desembro = [],
            this.valor_despesa_janeiro = [],
            this.valor_receita_janeiro = [],
            this.valor_despesa_fevereiro = [],
            this.valor_receita_fevereiro = [],
            this.valor_despesa_marco = [],
            this.valor_receita_marco = [],
            this.valor_despesa_abril = [],
            this.valor_receita_abril = [],
            this.valor_despesa_maio = [],
            this.valor_receita_maio = [],
            this.valor_despesa_junho = [],
            this.valor_receita_junho = [],
            this.valor_despesa_julho = [],
            this.valor_receita_julho = [],
            this.valor_despesa_agosto = [],
            this.valor_receita_agosto = [],
            this.valor_despesa_setembro = [],
            this.valor_receita_setembro = [],
            this.valor_despesa_outubro = [],
            this.valor_receita_outubro = [],
            this.valor_despesa_novembro = [],
            this.valor_receita_novembro = [],
            this.valor_despesa_desembro = [],
            this.valor_receita_desembro = []

    }
    async lista_lancamento_janeiro(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 01 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "order by lancamento.id desc, lancamento.data desc ").then(janeiro => {
                janeiro.rows.forEach(element => {
                    this.lancamentos_janeiro.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_fevereiro(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 02 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(fevereiro => {
                fevereiro.rows.forEach(element => {
                    this.lancamentos_fevereiro.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_marco(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 03 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(marco => {
                marco.rows.forEach(element => {
                    this.lancamentos_marco.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_abril(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 04 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(abril => {
                abril.rows.forEach(element => {
                    this.lancamentos_abril.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_maio(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 05 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(maio => {
                maio.rows.forEach(element => {
                    this.lancamentos_maio.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_junho(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 06 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(junho => {
                junho.rows.forEach(element => {
                    this.lancamentos_junho.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_julho(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 07 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(julho => {
                julho.rows.forEach(element => {
                    this.lancamentos_julho.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_agosto(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 08 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(agosto => {
                agosto.rows.forEach(element => {
                    this.lancamentos_agosto.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_setembro(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 09 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(setembro => {
                setembro.rows.forEach(element => {
                    this.lancamentos_setembro.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_outubro(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 10 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(outubro => {
                outubro.rows.forEach(element => {
                    this.lancamentos_outubro.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_novembro(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 11 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(novembro => {
                novembro.rows.forEach(element => {
                    this.lancamentos_novembro.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async lista_lancamento_desembro(ano) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, receita.id as receita_id, despesa.id as despesa_id, banco.id as banco_id, " +
            "case when receita.receita <> '' then 'Entrada de caixa - '|| receita.receita " +
            "else 'Saida de caixa - ' || despesa.despesa " +
            "end as tipo " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where EXTRACT(MONTH from lancamento.data) = 12 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano +
            "  order by lancamento.id desc, lancamento.data desc ").then(desembro => {
                desembro.rows.forEach(element => {
                    this.lancamentos_desembro.push({ 'id': element.id, 'descricao': element.descricao, 'valor': element.valor, 'data': moment(element.data).format('DD/MM/YYYY'), 'tipo': element.tipo, 'receita_id': element.receita_id, 'despesa_id': element.despesa_id, 'banco_id': element.banco_id });
                });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_janeiro(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 01 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_janeiro.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_janeiro(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 01 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_janeiro.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_fevereiro(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 02 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_fevereiro.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_fevereiro(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 02 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_fevereiro.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_marco(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 03 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_marco.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_marco(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 03 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_marco.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_abril(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 04 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_abril.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_abril(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 04 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_abril.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_maio(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 05 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_maio.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_maio(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 05 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_maio.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_junho(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 06 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_junho.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_junho(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 06 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_junho.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_julho(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 07 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_julho.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_julho(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 07 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_julho.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_agosto(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 08 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_agosto.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_agosto(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 08 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_agosto.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_setembro(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 09 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_setembro.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_setembro(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 09 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_setembro.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_outubro(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 10 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_outubro.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_outubro(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 10 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_outubro.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_novembro(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 11 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_novembro.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_novembro(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 11 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_novembro.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_despesa_desembro(ano) {
        await database.raw("select sum(lancamento.valor) as despesa	from lancamento where lancamento.tipo = 'despesa' and EXTRACT(MONTH from lancamento.data) = 12 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_despesa_desembro.push({ 'despesa': dados.rows[0].despesa });
            }).catch(err => {
                logger.error(err);
            })
    }
    async total_receita_desembro(ano) {
        await database.raw("select sum(lancamento.valor) as receita	from lancamento where lancamento.tipo = 'receita' and EXTRACT(MONTH from lancamento.data) = 12 " +
            "and EXTRACT(Year  from lancamento.data) = " + ano).then(dados => {
                this.valor_receita_desembro.push({ 'receita': dados.rows[0].receita });
            }).catch(err => {
                logger.error(err);
            })
    }
    async salvar() {
        this.validacao();
        if (this.erros.length > 0) {
            return;
        }
        await database.insert(this.body).table('lancamento').then(dados => {
        }).catch(err => {
            console.log(err);
            logger.error(err);
        });

        // Atualiza o saldo do banco      
        await database.select(['saldo', 'tipo']).table('banco').where({ 'id': this.body.pagamento_id }).then(valor => {

            if (valor[0].tipo == 'debito') {
                if (this.body.despesa_id) {
                    var atualiza_saldo = parseFloat(valor[0].saldo) - parseFloat(this.body.valor);
                    database.where({ 'id': this.body.pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                    });
                } if (this.body.receita_id) {
                    var atualiza_saldo = parseFloat(valor[0].saldo) + parseFloat(this.body.valor);
                    database.where({ 'id': this.body.pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                    });
                }
            }
            if (valor[0].tipo == 'credito') {
                var atualiza_saldo = parseFloat(valor[0].saldo) + parseFloat(this.body.valor);
                database.where({ 'id': this.body.pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                });
            }


        })
    }
    async lista_lancamento_id(id) {
        await database.raw("select lancamento.id,lancamento.descricao, lancamento.valor, lancamento.data, lancamento.descricao, " +
            "receita.id as receita_id, receita.receita, despesa.id as despesa_id, despesa.despesa, lancamento.tipo, banco.id as banco_id  " +
            "from lancamento " +
            "left join receita on receita.id = lancamento.receita_id " +
            "left join banco on banco.id = lancamento.pagamento_id " +
            "left join despesa on despesa.id = lancamento.despesa_id " +
            "where lancamento.id = " + id).then(dados => {
                this.lancamento_id = dados.rows
            }).catch(err => {
                logger.error(err);
            });
    }
    async atualizar(id, valor_anterior, pagamento_id, receita_id, despesa_id) {
        this.validacao();
        if (this.erros.length > 0) {
            return;
        }
        await database.update({ 'data': this.body.data, 'valor': this.body.valor, 'descricao': this.body.descricao }).where({ 'id': id }).table('lancamento').then(dados => {
        })
        // Volta o valor para o caixa
        await database.select(['saldo', 'tipo']).table('banco').where({ 'id': pagamento_id }).then(valor => {
            console.log(receita_id, despesa_id)
            if (valor[0].tipo == 'debito') {
                if (!isNaN(despesa_id)) {
                    var atualiza_saldo = parseFloat(valor[0].saldo) + parseFloat(valor_anterior);
                    database.where({ 'id': pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                    });
                } if (!isNaN(receita_id)) {
                    var atualiza_saldo = parseFloat(valor[0].saldo) - parseFloat(valor_anterior);
                    database.where({ 'id': pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                    });
                }
            }
            if (valor[0].tipo == 'credito') {
                var atualiza_saldo = parseFloat(valor[0].saldo) - parseFloat(valor_anterior);
                database.where({ 'id': pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                });
            }

        }) // Atualiza o saldo do caixa 
        await database.select(['saldo', 'tipo']).table('banco').where({ 'id': pagamento_id }).then(valor => {
            if (valor[0].tipo == 'debito') {
                if (!isNaN(despesa_id)) {
                    var atualiza_saldo = parseFloat(valor[0].saldo) - parseFloat(this.body.valor);
                    database.where({ 'id': pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                    });
                }
                if (!isNaN(receita_id)) {
                    var atualiza_saldo = parseFloat(valor[0].saldo) + parseFloat(this.body.valor);
                    database.where({ 'id': pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                    });
                }
            }
            if (valor[0].tipo == 'credito') {
                var atualiza_saldo = parseFloat(valor[0].saldo) + parseFloat(this.body.valor);
                database.where({ 'id': pagamento_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                });
            }

        }).catch(err => {
            logger.error(err);
        });
    }
    async deletar(id, banco_id, receita_id, despesa_id, valor_atual) {
        if (id == null || id.length <= 0 || id == undefined) {
            this.erros.push('Seleciona um Lançamento');
            return;
        }
        await database.delete().where({ 'id': id }).table('lancamento').then(dados => {
        }).catch(erro => {
            logger.error(erro);
        });
        // Atualiza o saldo do caixa 
        await database.select(['saldo', 'tipo']).table('banco').where({ 'id': banco_id }).then(valor => {
            if (valor[0].tipo == 'debito') {
                if (despesa_id) {
                    var atualiza_saldo = parseFloat(valor[0].saldo) + parseFloat(valor_atual);
                    database.where({ 'id': banco_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                    });
                }
                if (receita_id) {
                    var atualiza_saldo = parseFloat(valor[0].saldo) - parseFloat(valor_atual);
                    database.where({ 'id': banco_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                    });
                }
            }
            if (valor[0].tipo == 'credito') {
                var atualiza_saldo = parseFloat(valor[0].saldo) - parseFloat(valor_atual);
                database.where({ 'id': banco_id }).update({ 'saldo': atualiza_saldo }).table('banco').then(sucesso => {
                });
            }

        }).catch(err => {
            logger.error(err);
        });
    }
    validacao() {
        this.cleanUp();
        if (this.body.data == undefined) {
            this.erros.push('É o obrigado informar uma data');
        }
        if (this.body.valor == undefined) {
            this.erros.push('É o obrigado informar um valor');
        }

    }
    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            descricao: this.body.descricao,
            data: this.body.data,
            valor: this.body.valor,
            pagamento_id: this.body.pagamento_id,
            receita_id: this.body.receita_id,
            despesa_id: this.body.despesa_id,
            tipo: this.body.tipo
        };
    }
}
module.exports = Lancamento;