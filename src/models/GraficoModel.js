const database = require('../database/database');
const logger = require('../logger/logger');

class Grafico{
    constructor(body) {
        this.grafico_janeiro_despesa = [],
        this.grafico_janeiro_receita = [],
        this.grafico_fevereiro_despesa = [],
        this.grafico_fevereiro_receita = [],
        this.grafico_marco_despesa = [],
        this.grafico_marco_receita = [],
        this.grafico_abril_despesa = [],
        this.grafico_abril_receita = [],
        this.grafico_maio_despesa = [],
        this.grafico_maio_receita = [],
        this.grafico_junho_despesa = [],
        this.grafico_junho_receita = [],
        this.grafico_julho_despesa = [],
        this.grafico_julho_receita = [],
        this.grafico_agosto_despesa = [],
        this.grafico_agosto_receita = [],
        this.grafico_setembro_despesa = [],
        this.grafico_setembro_receita = [],
        this.grafico_outubro_despesa = [],
        this.grafico_outubro_receita = [],
        this.grafico_novembro_despesa = [],
        this.grafico_novembro_receita = [],
        this.grafico_desembro_despesa = [],
        this.grafico_desembro_receita = []
    }
    async grafico_janeiro_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 01 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_janeiro_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_janeiro_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 01 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_janeiro_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_fevereiro_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 02 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_fevereiro_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_fevereiro_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 02 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_fevereiro_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_marco_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 03 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_marco_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_marco_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 03 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_marco_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_abril_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 04 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_abril_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_abril_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 04 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_abril_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_maio_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 05 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_maio_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_maio_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 05 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_maio_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_junho_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 06 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_junho_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_junho_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 06 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_junho_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_julho_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 07 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_julho_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_julho_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 07 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_julho_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_agosto_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 08 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_agosto_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_agosto_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 08 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_agosto_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_setembro_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 09 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_setembro_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_setembro_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 09 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_setembro_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_outubro_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 10 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_outubro_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_outubro_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 10 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_outubro_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_novembro_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 11 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_novembro_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_novembro_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 11 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_novembro_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }

    async grafico_desembro_depesa01(ano){
        await database.raw("select despesa.despesa, sum(lancamento.valor) as valor from lancamento join despesa on lancamento.despesa_id = despesa.id " +
        "where EXTRACT(MONTH from lancamento.data) = 12 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_desembro_despesa.push({'despesa': element.despesa, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        });
    }
    async grafico_desembro_receita01(ano){
        await database.raw("select  receita.receita, sum(lancamento.valor) as valor from lancamento join receita on lancamento.receita_id = receita.id " +
        "where EXTRACT(MONTH from lancamento.data) = 12 and EXTRACT(Year  from lancamento.data) = " + ano + " group by 1 ").then(dados => {
            dados.rows.forEach(element => {
                this.grafico_desembro_receita.push({'receita': element.receita, 'valor': element.valor});
            })
        }).catch(err => {
            logger.error(err);
        })
    }
}

module.exports = Grafico;