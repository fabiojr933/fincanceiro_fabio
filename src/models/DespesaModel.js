const database = require('../database/database');
const logger = require('../logger/logger');

class Despesa{
    constructor(body){
        this.body = body,
        this.erros = [],
        this.lista_despesa = []
    }
    async salvar(){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }
        await database.insert(this.body).table('despesa').then(dados => {
        }).catch(err => {
            logger.error(err);
        });
    }   
    async listar_despesas(){
       await database.select('*')
        .table('categoria_despesa').innerJoin('despesa', 'categoria_despesa.id', 'despesa.categoria_despesa_id').then(dados => {
            dados.forEach(despesa => {
                this.lista_despesa.push({'id': despesa.id, 'despesa': despesa.despesa, 'categoria_despesa_id': despesa.categoria_despesa_id, 'categoria_despesa': despesa.categoria_despesa});
            });
        }).catch(err => {
            logger.error(err);
        })
    }
    async lista_despesa_id(id){
        await database.select(['despesa.id', 'despesa.despesa', 'despesa.categoria_despesa_id', 'categoria_despesa.categoria_despesa'])
        .table('categoria_despesa').innerJoin('despesa', 'despesa.categoria_despesa_id', 'categoria_despesa.id').where({'despesa.id': id}).then(dados => { 
            this.despesa = dados           
        }).catch(err => {
            logger.error(err);
        })
    }
    async atualizar(id){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }      
        await database.update(this.body).where({'id': id}).table('despesa').then(dados => {            
        }).catch(err => {
            logger.error(err);
        })
    }
    async deletar(id){
        if(id == null || id.length <= 0 || id == undefined){
            this.erros.push('Seleciona uma despesa');
            return;
        }
        await database.delete().where({'id': id}).table('despesa').then(dados => {
        }).catch(erro => {
            logger.error(erro);
        })
    }
    validacao(){
        this.cleanUp();
        if(this.body.despesa == undefined || this.body.despesa.length == 0){
            this.erros.push('Nome da despesa é obrigatorio');
        }
        if(this.body.categoria_despesa_id == undefined || this.body.categoria_despesa_id == ''){
            this.erros.push('Seleciona uma categoria');
        }
    }
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }
        this.body = {
            despesa: this.body.despesa,
            categoria_despesa_id: this.body.categoria_despesa_id
        };
    }
}
module.exports = Despesa;
