const database = require('../database/database');
const logger = require('../logger/logger');

class Banco{
    constructor(body){
        this.body = body,
        this.erros = [],
        this.lista_banco = []
    }
    async salvar(){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }
        await database.insert(this.body).table('banco').then(dados => {
        }).catch(err => {
            logger.error(err);
        });
    }
    async listar_banco(){
        await database.select('*').table('banco').then(dados => {
            dados.forEach(banco => {
                this.lista_banco.push({'id': banco.id, 'banco': banco.banco, 'saldo': banco.saldo, 'tipo': banco.tipo});
            });
        }).catch(err => {
            logger.error(err);
        })
    }
    async lista_banco_id(id){
        await database.select('*').where({'id': id}).table('banco').then(dados => {
            this.banco = dados           
        }).catch(err => {
            logger.error(err);
        })
    }
    async atualizar(id){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }
        console.log(this.body);
        await database.update(this.body).where({'id': id}).table('banco').then(dados => [
        ]).catch(err => {
            logger.error(err);
        })
    }
    async deletar(id){
        if(id == null || id.length <= 0 || id == undefined){
            this.erros.push('Seleciona um banco');
            return;
        }
        await database.delete().where({'id': id}).table('banco').then(dados => {
        }).catch(erro => {
            logger.error(erro);
        })
    }
    validacao(){
        this.cleanUp();
        if(this.body.banco == undefined || this.body.banco.length == 0){
            this.erros.push('Nome do banco é obrigatorio');
        }
    }
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }
        this.body = {
            banco: this.body.banco,
            saldo: (this.body.saldo),
            tipo: this.body.tipo,
        };
    }
}
module.exports = Banco;
