const database = require('../database/database');
const logger = require('../logger/logger');

class Receita{
    constructor(body){
        this.body = body,
        this.erros = [],
        this.lista_receita = []
    }
    async salvar(){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }
        await database.insert(this.body).table('receita').then(dados => {
        }).catch(err => {
            logger.error(err);
        });
    }
    async listar_receita(){
        await database.select('*').table('receita').then(dados => {
            dados.forEach(receita => {
                this.lista_receita.push({'id': receita.id, 'receita': receita.receita});
            });
        }).catch(err => {
            logger.error(err);
        })
    }
    async lista_receita_id(id){
        await database.select('*').where({'id': id}).table('receita').then(dados => {
            this.receita = dados
            console.log(dados)
        }).catch(err => {
            logger.error(err);
        })
    }
    async atualizar(id){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }
        await database.update(this.body).where({'id': id}).table('receita').then(dados => [
        ]).catch(err => {
            logger.error(err);
        })
    }
    async deletar(id){
        if(id == null || id.length <= 0 || id == undefined){
            this.erros.push('Seleciona uma receita');
            return;
        }
        await database.delete().where({'id': id}).table('receita').then(dados => {
        }).catch(erro => {
            logger.error(erro);
        })
    }
    validacao(){
        this.cleanUp();
        if(this.body.receita == undefined || this.body.receita.length == 0){
            this.erros.push('Nome da receita é obrigatorio');
        }
    }
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }
        this.body = {
            receita: this.body.receita
        };
    }
}
module.exports = Receita;
